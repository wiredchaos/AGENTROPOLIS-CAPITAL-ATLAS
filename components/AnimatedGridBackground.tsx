export function AnimatedGridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.18),transparent_35%),radial-gradient(circle_at_75%_10%,rgba(239,68,68,0.2),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      <div className="absolute -inset-[20%] animate-pulse bg-[conic-gradient(from_90deg_at_50%_50%,rgba(34,211,238,0.15),transparent,rgba(239,68,68,0.15),transparent)]" />
    </div>
  );
}
