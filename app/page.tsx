import { AnimatedGridBackground } from "@/components/AnimatedGridBackground";
import { CapitalScanDemo } from "@/components/CapitalScanDemo";
import { CapitalStackCard } from "@/components/CapitalStackCard";
import { DocumentChecklist } from "@/components/DocumentChecklist";
import { HeroBanner } from "@/components/HeroBanner";
import { JurisdictionMap } from "@/components/JurisdictionMap";
import { OpenCorePricingSection } from "@/components/OpenCorePricingSection";
import { RiskWarningBanner } from "@/components/RiskWarningBanner";

const capitalTypes = [
  "SSBCI",
  "SBA 7(a)",
  "SBA 504",
  "SBA Microloan",
  "CDFI",
  "USDA Rural Development",
  "State grants",
  "County grants",
  "City grants",
  "Tax credits",
  "Procurement certifications",
  "Venture capital",
  "Loan guarantees",
  "Collateral support",
  "Loan participation",
  "Technical assistance",
];

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-6 px-4 py-6 md:px-6">
      <AnimatedGridBackground />
      <HeroBanner />

      <section className="grid gap-4 md:grid-cols-2">
        <CapitalStackCard
          title="What Capital Atlas Does"
          items={[
            "Maps federal-to-local capital pathways by jurisdiction",
            "Scores eligibility fit and readiness in one command-center workflow",
            "Guides document prep for faster application cycles",
          ]}
        />
        <JurisdictionMap />
      </section>

      <section>
        <CapitalStackCard title="Capital Opportunity Types" items={capitalTypes} />
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <CapitalStackCard
          title="California Launch Module"
          items={[
            "California SSBCI",
            "IBank Small Business Finance Center",
            "CalCAP",
            "SBA 7(a), 504, Microloan",
          ]}
        />
        <CapitalScanDemo />
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <CapitalStackCard
          title="AI Business Plan & Projections"
          items={[
            "OpenAI-compatible provider abstraction",
            "Draft narrative + assumptions",
            "Export-ready projection scaffolds",
          ]}
        />
        <div className="rounded-xl border border-white/10 bg-black/40 p-4">
          <p className="mb-3 text-sm text-cyan-200">Document Readiness Checklist</p>
          <DocumentChecklist />
        </div>
      </section>

      <OpenCorePricingSection />
      <RiskWarningBanner />

      <footer className="rounded-xl border border-cyan-400/25 bg-cyan-500/10 p-5 text-center">
        <p className="text-xl font-semibold text-white">Ready to scan your capital landscape?</p>
        <p className="mt-1 text-sm text-cyan-100">Start with California programs or run a full intake in minutes.</p>
      </footer>
    </main>
  );
}
