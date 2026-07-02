import { RiskWarningBanner } from "@/components/RiskWarningBanner";

export default function DocumentsPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-4 p-4">
      <h1 className="text-2xl font-semibold">Document Vault</h1>
      <p className="text-zinc-300">Placeholder for secure document storage integrations.</p>
      <RiskWarningBanner />
    </main>
  );
}
