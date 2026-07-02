const fields = [
  "Business name",
  "State",
  "County",
  "City",
  "Tribal affiliation",
  "Rural or urban",
  "Industry",
  "NAICS code",
  "Entity type",
  "Years in business",
  "Annual revenue",
  "Monthly revenue",
  "Credit score range",
  "Funding amount needed",
  "Use of funds",
  "Collateral available",
  "Employees",
  "Woman-owned",
  "Minority-owned",
  "Veteran-owned",
  "Disabled-owned",
  "Nonprofit",
  "Startup or existing business",
  "Existing debt",
  "Tax compliance status",
  "Bank statements available",
  "Business plan available",
];

export function BusinessProfileForm() {
  return (
    <form className="grid gap-3 md:grid-cols-2">
      {fields.map((field) => (
        <label key={field} className="grid gap-1 text-sm text-zinc-200">
          {field}
          <input
            className="rounded-md border border-white/10 bg-black/50 px-3 py-2 text-white outline-none ring-cyan-500/40 focus:ring"
            placeholder={field}
          />
        </label>
      ))}
    </form>
  );
}
