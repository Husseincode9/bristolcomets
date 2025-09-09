import Image from "next/image";
import Link from "next/link";
import OpenRunCard from "./_components/OpenRunCard";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="k-hero overflow-hidden min-h-[80vh] flex items-center">
        <div className="w-full px-6 py-16 flex flex-col items-center gap-4 text-center">
          <Image src="/comets-logo.png" alt="Bristol Comets" width={240} height={240} />
          <h1 className="text-5xl font-bold tracking-tight">Bristol Comets</h1>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl grid gap-6 sm:grid-cols-2 px-6">
        <div className="k-card p-6">
          <h2 className="text-xl font-semibold">About Us</h2>
          <p className="mt-3 text-foreground/80">
            We’re a community club bringing players together across Bristol. Sessions are
            organised, competitive yet welcoming. Whether you are new or experienced,
            there’s a spot for you.
          </p>
        </div>
        <div className="k-card p-6">
          <h3 className="text-xl font-semibold">How it works</h3>
          <ul className="mt-3 space-y-2 text-foreground/80 list-disc pl-5">
            <li>Join the list on the Sign-up page</li>
            <li>Prepay to secure your place (highlighted in green)</li>
            <li>Turn up and hoop!</li>
          </ul>
        </div>
      </section>

      {/* Team training */}
      <section className="mx-auto max-w-6xl space-y-3 px-6">
        <h2 className="text-2xl font-semibold">Team training</h2>
        <div className="k-card p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#2dd4bf] text-black text-sm font-semibold">Tue</span>
            <div className="text-sm text-foreground/70"><span className="font-semibold text-foreground">18:30–21:30</span> · Ashton Park School, Bristol</div>
          </div>
          <Link href="/runs/tue" className="px-3 py-1.5 rounded bg-[#2dd4bf] text-black text-sm font-medium hover:opacity-90">Start list</Link>
        </div>
      </section>

      {/* Open Runs */}
      <section className="mx-auto max-w-6xl space-y-6 px-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold">Open Runs</h2>
          <Link href="/signup" className="text-sm underline underline-offset-4">Go to sign-up</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <OpenRunCard dayLabel="Thu" title="Open Run (cap 20, £5 non‑members)" venue="St Mary Redcliffe, Bristol" time="18:00–19:00" weekday={4} startHour={18} startMinute={0} capacity={20} />
          <OpenRunCard dayLabel="Sun" title="Open Run (cap 25, £5 non‑members)" venue="The Park Centre, Knowle, Bristol" time="13:00–15:00" weekday={0} startHour={13} startMinute={0} capacity={25} />
        </div>
        <div className="text-sm text-foreground/70">Tuesdays are members' training (A & B squads) at Ashton Park School, 18:30–21:30.</div>
      </section>
    </div>
  );
}


