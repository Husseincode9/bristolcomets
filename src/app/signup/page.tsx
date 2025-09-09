"use client";

import { useSearchParams } from "next/navigation";

export default function SignupPage() {
  const params = useSearchParams();
  const mode = params.get("mode") || "add";
  const day = params.get("day") || "";

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Sign-up</h1>
      <p className="text-foreground/80">Mode: {mode} {day && <>• Day: {day}</>}</p>
      <p className="text-foreground/60">This placeholder page can be expanded with list management when you're ready.</p>
    </div>
  );
}
