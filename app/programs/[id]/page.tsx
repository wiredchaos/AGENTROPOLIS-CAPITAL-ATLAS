import { ProgramTypeBadge } from "@/components/ProgramTypeBadge";
import { californiaPrograms } from "@/data/programs";
import { notFound } from "next/navigation";

export default async function ProgramDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const program = californiaPrograms.find((item) => item.id === id);

  if (!program) return notFound();

  return (
    <main className="mx-auto max-w-4xl space-y-4 p-4">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-2xl font-semibold">{program.name}</h1>
        <ProgramTypeBadge type={program.capitalType} />
      </div>
      <p className="text-zinc-200">{program.description}</p>
      <section className="rounded-lg border border-white/10 bg-black/45 p-4">
        <h2 className="mb-2 font-medium text-white">Readiness Documents</h2>
        <ul className="space-y-1 text-sm text-zinc-300">
          {program.readinessDocs.map((doc) => (
            <li key={doc}>• {doc}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
