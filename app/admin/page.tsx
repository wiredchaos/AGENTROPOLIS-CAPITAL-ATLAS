import { AdminProgramForm } from "@/components/AdminProgramForm";
import { RiskWarningBanner } from "@/components/RiskWarningBanner";

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-4 p-4">
      <h1 className="text-2xl font-semibold">Admin Program Manager</h1>
      <AdminProgramForm />
      <RiskWarningBanner />
    </main>
  );
}
