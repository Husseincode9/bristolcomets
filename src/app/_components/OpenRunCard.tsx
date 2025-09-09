"use client";

import Link from "next/link";

export type OpenRunProps = {
  dayLabel: string; // Thu / Sun
  title: string; // e.g., Open Run (cap 20, £5 non‑members)
  venue: string;
  time: string; // e.g., 18:00–19:00
  weekday: number; // 0=Sun ... 6=Sat
  startHour: number;
  startMinute: number;
  capacity: number;
};

export default function OpenRunCard(props: OpenRunProps) {

  return (
    <div className="k-card p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#2dd4bf] text-black text-sm font-bold">{props.dayLabel}</span>
          <div className="text-sm text-foreground/70"><span className="font-semibold text-foreground text-base">{props.time}</span> · {props.venue}</div>
        </div>
        <div className="flex gap-2">
          <Link href={props.dayLabel === "Thu" ? "/runs/thu" : "/runs/sun"} className="px-3 py-1.5 rounded bg-[#2dd4bf] text-black text-sm font-medium hover:opacity-90">Start list</Link>
        </div>
      </div>
    </div>
  );
}



