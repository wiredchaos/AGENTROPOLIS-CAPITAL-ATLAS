import { FundingMatchCard } from "@/components/FundingMatchCard";
import { californiaPrograms } from "@/data/programs";
import { demoProfile } from "@/lib/demo-profile";
import { rankPrograms } from "@/lib/matching";

export default function MatchesPage() {
  const matches = rankPrograms(demoProfile, californiaPrograms);

  return (
    <main className="mx-auto max-w-6xl space-y-4 p-4">
      <h1 className="text-2xl font-semibold">Funding Matches</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {matches.map((match) => (
          <FundingMatchCard key={match.program.id} match={match} />
        ))}
      </div>
    </main>
  );
}
