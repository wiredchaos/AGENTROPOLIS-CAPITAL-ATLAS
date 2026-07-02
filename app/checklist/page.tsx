import { DocumentChecklist } from "@/components/DocumentChecklist";
import { RiskWarningBanner } from "@/components/RiskWarningBanner";

export default function ChecklistPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-4 p-4">
      <h1 className="text-2xl font-semibold">Document Readiness Checklist</h1>
      <DocumentChecklist />
      <RiskWarningBanner />
    </main>
  );
}
