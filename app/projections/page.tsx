import { ProjectionGenerator } from "@/components/ProjectionGenerator";
import { RiskWarningBanner } from "@/components/RiskWarningBanner";

export default function ProjectionsPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-4 p-4">
      <h1 className="text-2xl font-semibold">Financial Projection Generator</h1>
      <ProjectionGenerator />
      <RiskWarningBanner />
    </main>
  );
}
