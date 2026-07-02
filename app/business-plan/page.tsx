import { AIPlanGenerator } from "@/components/AIPlanGenerator";
import { RiskWarningBanner } from "@/components/RiskWarningBanner";

export default function BusinessPlanPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-4 p-4">
      <h1 className="text-2xl font-semibold">AI Business Plan Generator</h1>
      <AIPlanGenerator />
      <RiskWarningBanner />
    </main>
  );
}
