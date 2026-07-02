# capital-atlas-by-agentropolis

Capital Atlas by AGENTROPOLIS is an AI-powered capital navigation platform that maps funding opportunities by jurisdiction.

**Tagline:** Every jurisdiction. Every opportunity.

## Product overview

Capital Atlas Community is the open-source foundation for jurisdiction-based capital discovery.

Public open-core modules:
- Core framework (Next.js App Router + TypeScript)
- Futuristic command-center landing page
- Capital intake flow
- Match ranking logic
- Sample datasets
- California launch module
- Funding readiness dashboard

## Open-core model

Open-source community core includes routing, UI framework, matching logic, and seed data.
Premium hosted services may include:
- Nationwide funding database updates
- AI business plans
- Financial projections
- Application packets and document vaults
- Deadline tracking and white-label licensing
- Agentropolis integrations

## Tech stack

- Next.js 14+ App Router (currently Next.js 16)
- TypeScript
- TailwindCSS
- shadcn/ui-ready component structure
- Supabase-ready schema + seeds
- OpenAI-compatible provider abstraction
- Vercel-ready deployment scripts

## Setup instructions

```bash
npm install
npm run dev
```

Build and lint:

```bash
npm run lint
npm run build
```

## Environment variables

Copy `.env.example` to `.env.local` and provide:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `OPENAI_API_KEY`
- `AI_PROVIDER_BASE_URL`
- `AI_MODEL`

## Database notes

Supabase SQL files are in:
- `/home/runner/work/AGENTROPOLIS-CAPITAL-ATLAS/AGENTROPOLIS-CAPITAL-ATLAS/supabase/schema.sql`
- `/home/runner/work/AGENTROPOLIS-CAPITAL-ATLAS/AGENTROPOLIS-CAPITAL-ATLAS/supabase/seed.sql`

Included tables:
- users
- business_profiles
- funding_programs
- jurisdictions
- capital_matches
- documents
- business_plans
- financial_projections
- applications
- tasks
- admin_notes

## Seed data

California starter entries are included for:
- California SSBCI
- California IBank Small Business Finance Center
- CalCAP
- SBA 7(a)
- SBA 504
- SBA Microloan
- CDFI placeholder
- County grant placeholder
- City grant placeholder
- Procurement certification placeholder

## License

Apache License 2.0.

## Disclaimer

Capital Atlas provides guidance and application preparation support. Funding approval depends on lender, program, jurisdiction, underwriting, and documentation requirements.
