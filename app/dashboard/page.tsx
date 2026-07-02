import { DashboardSidebar } from "@/components/DashboardSidebar";
import { RiskWarningBanner } from "@/components/RiskWarningBanner";
import { Card } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <main className="mx-auto grid min-h-screen max-w-6xl gap-4 p-4 md:grid-cols-[260px_1fr]">
      <DashboardSidebar />
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold">Funding Readiness Dashboard</h1>
        <div className="grid gap-4 md:grid-cols-3">
          <Card><p className="text-sm text-zinc-300">Active scans</p><p className="text-3xl font-bold">03</p></Card>
          <Card><p className="text-sm text-zinc-300">High-fit matches</p><p className="text-3xl font-bold">11</p></Card>
          <Card><p className="text-sm text-zinc-300">Ready documents</p><p className="text-3xl font-bold">67%</p></Card>
        </div>
        <RiskWarningBanner />
      </section>
    </main>
  );
}
