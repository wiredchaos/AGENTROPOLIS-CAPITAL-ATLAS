export function EligibilityScore({ score }: { score: number }) {
  const color = score >= 80 ? "text-emerald-300" : score >= 60 ? "text-amber-300" : "text-red-300";
  return <span className={`text-sm font-semibold ${color}`}>Eligibility score: {score}%</span>;
}
