const docs = [
  "Business plan",
  "Tax returns",
  "Bank statements",
  "Financial projections",
  "Ownership documentation",
  "Use-of-funds narrative",
];

export function DocumentChecklist() {
  return (
    <div className="grid gap-2">
      {docs.map((doc) => (
        <label key={doc} className="flex items-center gap-3 rounded border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200">
          <input type="checkbox" className="accent-cyan-400" />
          {doc}
        </label>
      ))}
    </div>
  );
}
