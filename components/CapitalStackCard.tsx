import { Card } from "@/components/ui/card";

export function CapitalStackCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-zinc-200">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </Card>
  );
}
