"use client";

import { useState } from "react";

type Player = { id: string; name: string };

export default function TueTrainingPage() {
  const [started, setStarted] = useState(false);
  const [name, setName] = useState("");
  const [players, setPlayers] = useState<Player[]>([]);

  function addPlayer() {
    if (!name.trim()) return;
    setPlayers((prev) => [...prev, { id: crypto.randomUUID(), name: name.trim() }]);
    setName("");
  }

  function removePlayer(id: string) {
    setPlayers((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div className="space-y-6 px-6 min-h-[80vh]">
      <h1 className="text-2xl font-semibold">Tuesday Team Training</h1>
      <p className="text-foreground/70">18:30–21:30 · Ashton Park School, Bristol</p>

      {!started ? (
        <button onClick={() => setStarted(true)} className="px-4 py-2 rounded bg-[#2dd4bf] text-black font-medium">Start list</button>
      ) : (
        <div className="k-card p-4 text-sm text-foreground/80">Team A and Team B members only</div>
      )}

      {started && (
        <>
          <div className="flex items-center gap-2">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="flex-1 min-w-0 rounded border border-black/15 dark:border-white/15 bg-transparent px-3 py-2" />
            <button onClick={addPlayer} className="px-3 py-2 rounded bg-foreground text-background text-sm">Add</button>
          </div>

          <ul className="divide-y divide-black/10 dark:divide-white/10 rounded-md border border-black/10 dark:border-white/10 overflow-hidden">
            {players.map((p, idx) => (
              <li key={p.id} className="flex items-center justify-between p-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm w-6 text-center font-semibold text-foreground/80">{idx + 1}</span>
                  <span>{p.name}</span>
                </div>
                <button onClick={() => removePlayer(p.id)} className="text-xs text-red-600 hover:underline">Remove</button>
              </li>
            ))}
            {players.length === 0 && (
              <li className="p-3 text-sm text-foreground/60">No one signed up yet.</li>
            )}
          </ul>
        </>
      )}
    </div>
  );
}


