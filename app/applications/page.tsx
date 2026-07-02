import { RiskWarningBanner } from "@/components/RiskWarningBanner";

export default function ApplicationsPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-4 p-4">
      <h1 className="text-2xl font-semibold">Application Tracker</h1>
      <p className="text-zinc-300">Placeholder for timelines, deadlines, and packet status.</p>
      <RiskWarningBanner />
    </main>
  );
}
