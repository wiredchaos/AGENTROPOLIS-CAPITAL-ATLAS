import { californiaPrograms } from "@/data/programs";
import { demoProfile } from "@/lib/demo-profile";
import { rankPrograms } from "@/lib/matching";

export function CapitalScanDemo() {
  const top = rankPrograms(demoProfile, californiaPrograms).slice(0, 3);

  return (
    <div className="space-y-3 rounded-xl border border-white/10 bg-black/40 p-4">
      <p className="text-sm text-cyan-200">Capital Scan Demo</p>
      {top.map((result) => (
        <div key={result.program.id} className="rounded border border-white/10 px-3 py-2">
          <div className="flex items-center justify-between">
            <p className="text-sm text-white">{result.program.name}</p>
            <p className="text-xs text-cyan-300">{result.score}%</p>
          </div>
          <p className="mt-1 text-xs text-zinc-300">{result.reasons.slice(0, 2).join(" • ")}</p>
        </div>
      ))}
    </div>
  );
}
