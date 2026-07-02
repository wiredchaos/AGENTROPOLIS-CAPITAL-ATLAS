import { Card } from "@/components/ui/card";

export function OpenCorePricingSection() {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      <Card>
        <h3 className="text-lg font-semibold text-white">Open Core (Community)</h3>
        <ul className="mt-3 space-y-2 text-sm text-zinc-200">
          <li>Core framework + matching engine</li>
          <li>California launch dataset</li>
          <li>Dashboard + intake + checklist modules</li>
        </ul>
      </Card>
      <Card>
        <h3 className="text-lg font-semibold text-white">Premium Hosted Services</h3>
        <ul className="mt-3 space-y-2 text-sm text-zinc-200">
          <li>Nationwide funding database updates</li>
          <li>AI business plans + financial projections</li>
          <li>Application packets, vaults, tracking, white-label</li>
        </ul>
      </Card>
    </section>
  );
}
