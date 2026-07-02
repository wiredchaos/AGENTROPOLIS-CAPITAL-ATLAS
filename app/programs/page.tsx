import { ProgramTypeBadge } from "@/components/ProgramTypeBadge";
import { californiaPrograms } from "@/data/programs";
import Link from "next/link";

export default function ProgramsPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-4 p-4">
      <h1 className="text-2xl font-semibold">Program Database</h1>
      <div className="grid gap-3">
        {californiaPrograms.map((program) => (
          <Link
            key={program.id}
            href={`/programs/${program.id}`}
            className="rounded-lg border border-white/10 bg-black/45 p-4 transition hover:border-cyan-400/50"
          >
            <div className="mb-2 flex items-center justify-between">
              <h2 className="font-medium text-white">{program.name}</h2>
              <ProgramTypeBadge type={program.capitalType} />
            </div>
            <p className="text-sm text-zinc-300">{program.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
