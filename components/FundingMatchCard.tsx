import { EligibilityScore } from "@/components/EligibilityScore";
import { ProgramTypeBadge } from "@/components/ProgramTypeBadge";
import { Card } from "@/components/ui/card";
import { CapitalMatch } from "@/lib/types";

export function FundingMatchCard({ match }: { match: CapitalMatch }) {
  return (
    <Card className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-white">{match.program.name}</h3>
        <ProgramTypeBadge type={match.program.capitalType} />
      </div>
      <p className="text-sm text-zinc-200">{match.program.description}</p>
      <EligibilityScore score={match.score} />
      <div className="flex flex-wrap gap-2 text-xs text-zinc-300">
        {match.reasons.map((reason) => (
          <span key={reason} className="rounded border border-white/10 px-2 py-1">
            {reason}
          </span>
        ))}
      </div>
    </Card>
  );
}
