import { REQUIRED_DISCLAIMER } from "@/lib/types";

export function RiskWarningBanner() {
  return (
    <div className="rounded-lg border border-amber-400/40 bg-amber-500/10 p-3 text-sm text-amber-100">{REQUIRED_DISCLAIMER}</div>
  );
}
