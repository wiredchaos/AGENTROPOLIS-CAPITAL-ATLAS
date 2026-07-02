export function AdminProgramForm() {
  return (
    <form className="grid gap-3 md:grid-cols-2">
      {['Program name', 'Capital type', 'Jurisdiction', 'Industry', 'Eligibility notes'].map((field) => (
        <label key={field} className="grid gap-1 text-sm text-zinc-200">
          {field}
          <input className="rounded-md border border-white/10 bg-black/50 px-3 py-2" placeholder={field} />
        </label>
      ))}
      <button className="rounded-md border border-cyan-400/40 bg-cyan-500/20 px-4 py-2 text-sm text-cyan-100 md:col-span-2">
        Save Program (Placeholder)
      </button>
    </form>
  );
}
