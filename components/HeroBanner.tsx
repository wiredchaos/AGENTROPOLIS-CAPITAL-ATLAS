import { Button } from "@/components/ui/button";

const labels = [
  "Federal",
  "State",
  "County",
  "City",
  "Tribal",
  "Rural",
  "SSBCI",
  "SBA",
  "CDFI",
  "Grants",
  "Tax Credits",
  "Procurement",
];

export function HeroBanner() {
  return (
    <section className="relative rounded-2xl border border-white/10 bg-black/50 p-8 md:p-12">
      <p className="mb-2 text-xs tracking-[0.3em] text-cyan-300">EVERY JURISDICTION. EVERY OPPORTUNITY.</p>
      <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">Capital Atlas by AGENTROPOLIS</h1>
      <p className="mt-4 max-w-3xl text-zinc-200">
        AI-powered capital navigation across federal, state, county, city, tribal, and rural jurisdictions.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href="/intake">Start Capital Scan</Button>
        <Button href="/programs" variant="secondary">
          Explore California Programs
        </Button>
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {labels.map((label, i) => (
          <span
            key={label}
            className="animate-pulse rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-zinc-200"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
