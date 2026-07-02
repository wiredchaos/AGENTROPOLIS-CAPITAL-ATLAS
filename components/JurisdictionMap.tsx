export function JurisdictionMap() {
  return (
    <div className="rounded-xl border border-cyan-400/30 bg-black/50 p-4">
      <p className="mb-3 text-sm text-cyan-200">Jurisdiction Layers</p>
      <svg viewBox="0 0 480 180" className="h-40 w-full">
        <path d="M10 150 C120 40, 220 170, 320 70 S460 130,470 40" stroke="#22d3ee" strokeWidth="2" fill="none" />
        <path d="M20 110 C140 10, 220 120, 330 30 S430 90,470 10" stroke="#ef4444" strokeWidth="1.5" fill="none" />
        {['Federal','State','County','City','Tribal','Rural'].map((l, i) => (
          <text key={l} x={20 + i * 74} y={170 - (i % 2) * 20} fill="#e4e4e7" fontSize="12">
            {l}
          </text>
        ))}
      </svg>
    </div>
  );
}
