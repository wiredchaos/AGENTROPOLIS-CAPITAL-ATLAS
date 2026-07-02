import { BusinessProfileForm } from "@/components/BusinessProfileForm";
import { RiskWarningBanner } from "@/components/RiskWarningBanner";

export default function IntakePage() {
  return (
    <main className="mx-auto max-w-6xl space-y-4 p-4">
      <h1 className="text-2xl font-semibold">Capital Scan Intake</h1>
      <p className="text-sm text-zinc-300">Capture core business profile signals for jurisdiction-based capital matching.</p>
      <BusinessProfileForm />
      <RiskWarningBanner />
    </main>
  );
}
