"use client";

import { useState } from "react";

type Player = { id: string; name: string; paid: boolean };

export default function ThuRunPage() {
  const [name, setName] = useState("");
  const [paid, setPaid] = useState(false);
  const [players, setPlayers] = useState<Player[]>([]);

  function addPlayer() {
    if (!name.trim()) return;
    setPlayers((prev) => [
      ...prev,
      { id: crypto.randomUUID(), name: name.trim(), paid },
    ]);
    setName("");
    setPaid(false);
  }

  function removePlayer(id: string) {
    setPlayers((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div className="space-y-6 px-6 min-h-[80vh]">
      <h1 className="text-2xl font-semibold">Thursday Open Run</h1>
      <p className="text-foreground/70">18:00–19:00 · St Mary Redcliffe, Bristol · cap 20 · £5 non‑members</p>

      <div className="flex items-center gap-2">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="flex-1 min-w-0 rounded border border-black/15 dark:border-white/15 bg-transparent px-3 py-2" />
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={paid} onChange={(e) => setPaid(e.target.checked)} />
          Paid
        </label>
        <button onClick={addPlayer} className="px-3 py-2 rounded bg-foreground text-background text-sm">Add</button>
      </div>

      <ul className="divide-y divide-black/10 dark:divide-white/10 rounded-md border border-black/10 dark:border-white/10 overflow-hidden">
        {players.map((p, idx) => (
          <li key={p.id} className="flex items-center justify-between p-3">
            <div className="flex items-center gap-3">
              <span className="text-sm w-6 text-center font-semibold text-foreground/80">{idx + 1}</span>
              <span className={`inline-flex h-2.5 w-2.5 rounded-full ${p.paid ? "bg-emerald-500" : "bg-amber-500"}`}></span>
              <span className={p.paid ? "font-medium text-emerald-600" : "text-amber-600"}>{p.name}</span>
              {p.paid && <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">Paid</span>}
            </div>
            <button onClick={() => removePlayer(p.id)} className="text-xs text-red-600 hover:underline">Remove</button>
          </li>
        ))}
        {players.length === 0 && (
          <li className="p-3 text-sm text-foreground/60">No one signed up yet.</li>
        )}
      </ul>
    </div>
  );
}


