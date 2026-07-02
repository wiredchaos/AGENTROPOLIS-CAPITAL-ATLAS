import Link from "next/link";

const links = [
  ["Dashboard", "/dashboard"],
  ["Intake", "/intake"],
  ["Matches", "/matches"],
  ["Programs", "/programs"],
  ["Checklist", "/checklist"],
  ["Applications", "/applications"],
  ["Admin", "/admin"],
] as const;

export function DashboardSidebar() {
  return (
    <aside className="rounded-xl border border-white/10 bg-black/40 p-4">
      <p className="mb-3 text-sm tracking-[0.2em] text-cyan-300">CAPITAL OS</p>
      <nav className="space-y-2">
        {links.map(([label, href]) => (
          <Link key={href} href={href} className="block rounded px-3 py-2 text-sm text-zinc-200 transition hover:bg-white/10">
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
