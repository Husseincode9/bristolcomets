"use client";

import { useMemo, useState } from "react";

export type ScheduleItem = {
  label: string; // Tue/Thu/Sun
  title: string; // e.g., Open Run (cap 20...)
  venue: string;
  time: string; // display string
  // For signup-open calculation (if applicable)
  weekday?: number; // 0=Sun ... 6=Sat
  startHour?: number;
  startMinute?: number;
  signupEnabled: boolean; // false for Tuesday (training only)
};

function nextOccurrence(weekday: number, hour: number, minute: number, now: Date): Date {
  const d = new Date(now);
  const currentDow = d.getDay();
  const addDays = (weekday - currentDow + 7) % 7;
  const target = new Date(d);
  target.setDate(d.getDate() + addDays);
  target.setHours(hour, minute, 0, 0);
  if (target <= d) target.setDate(target.getDate() + 7);
  return target;
}

function opensAtFor(item: ScheduleItem, now: Date): Date | null {
  if (!item.signupEnabled || item.weekday === undefined || item.startHour === undefined || item.startMinute === undefined) {
    return null;
  }
  const start = nextOccurrence(item.weekday, item.startHour, item.startMinute, now);
  return new Date(start.getTime() - 24 * 60 * 60 * 1000);
}

export default function ScheduleCards({ items }: { items: ScheduleItem[] }) {
  const [selected, setSelected] = useState<string | null>(null);
  const now = useMemo(() => new Date(), []);

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {items.map((g) => {
        const isSelected = selected === g.label;
        const opensAt = opensAtFor(g, now);
        return (
          <div key={g.label} className="k-card p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button onClick={() => setSelected(isSelected ? null : g.label)} className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#2dd4bf] text-black text-sm font-semibold cursor-pointer">
                  {g.label}
                </button>
                <div>
                  <div className="font-medium">{g.title}</div>
                  <div className="text-sm text-foreground/70"><span className="font-semibold text-foreground">{g.time}</span> · {g.venue}</div>
                </div>
              </div>
              {g.signupEnabled && (
                <a href="/signup" className="text-sm px-3 py-1.5 rounded bg-foreground text-background">Join</a>
              )}
            </div>
            {isSelected && (
              <div className="mt-3 text-sm text-foreground/80">
                {g.signupEnabled && opensAt ? (
                  <>Sign-ups open at <span className="font-medium">{opensAt.toLocaleString()}</span> (24h before session start)</>
                ) : (
                  <>Members' training — no sign-up required</>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}


