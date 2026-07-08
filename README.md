# Capital Atlas by AGENTROPOLIS

**Every jurisdiction. Every opportunity.**

Capital Atlas by AGENTROPOLIS is an open-core AI capital navigation platform that maps funding opportunities by jurisdiction. It helps businesses discover and prepare for SSBCI, SBA loans, CDFI capital, grants, tax credits, procurement certifications, venture programs, local revolving loan funds, and technical assistance across federal, state, county, city, tribal, rural, and special-district layers.

## Status

This repo is public and Cloudflare-first.

- Primary launch target: **Cloudflare Pages + Workers**
- Optional database layer: **Cloudflare D1** or **Supabase**
- File storage: **Cloudflare R2**
- Bot protection: **Cloudflare Turnstile**
- AI layer: **Workers AI optional** plus OpenAI-compatible BYOK providers

## What this repo should include

- Cinematic dynamic landing page inspired by `agentropolis.dev`
- Capital scan intake flow
- Jurisdiction-based matching engine
- California launch module
- Sample funding-program dataset
- Funding readiness dashboard
- Document-readiness checklist
- Cloudflare deployment configuration
- OpenAI-compatible AI provider abstraction

## Open-core model

Capital Atlas Community is the open-source foundation for jurisdiction-based capital discovery.

The public repo includes the core framework, UI, intake flow, matching logic, sample datasets, and California launch module.

Premium hosted services may include updated nationwide funding databases, AI business plans, financial projections, application packets, document vaults, deadline tracking, white-label licensing, and Agentropolis integrations.

## Tech stack

- Next.js 14+ App Router
- TypeScript
- TailwindCSS
- shadcn/ui-ready component patterns
- Cloudflare Pages
- Cloudflare Workers
- Cloudflare D1 or Supabase
- Cloudflare R2
- Cloudflare Turnstile
- Workers AI optional
- OpenAI-compatible AI provider abstraction

## Planned routes

- `/` - cinematic landing page
- `/dashboard` - funding readiness dashboard
- `/intake` - capital scan intake
- `/matches` - funding matches
- `/programs` - funding program database
- `/programs/[id]` - funding program detail
- `/business-plan` - AI business-plan generator placeholder
- `/projections` - financial projection placeholder
- `/checklist` - document readiness checklist
- `/documents` - document vault placeholder
- `/applications` - application tracker placeholder
- `/admin` - admin program manager placeholder

## Cloudflare deployment plan

1. Build the frontend for Cloudflare Pages.
2. Use Workers for API routes and edge workflows.
3. Use D1 for lightweight public funding-program data, match metadata, and application tracking.
4. Use Supabase optionally for auth, hosted Postgres, or advanced relational workflows.
5. Use R2 for uploaded documents and generated funding packets.
6. Use Turnstile on public forms.
7. Use Workers AI optionally while preserving BYOK OpenAI-compatible providers.

## Environment variables

Create `.dev.vars` locally using `.dev.vars.example` as the template.

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
OPENAI_API_KEY=
AI_PROVIDER_BASE_URL=
AI_MODEL=
CLOUDFLARE_ACCOUNT_ID=
CLOUDFLARE_API_TOKEN=
CLOUDFLARE_D1_DATABASE_ID=
CLOUDFLARE_R2_BUCKET=
TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
```

## Suggested database tables

- `users`
- `business_profiles`
- `funding_programs`
- `jurisdictions`
- `capital_matches`
- `documents`
- `business_plans`
- `financial_projections`
- `applications`
- `tasks`
- `admin_notes`

## Starter California seed data

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

## Safety disclaimer

Capital Atlas provides guidance and application preparation support. Funding approval depends on lender, program, jurisdiction, underwriting, and documentation requirements.

Capital Atlas does not guarantee funding, loan approval, grant awards, government contracts, tax credits, or investment outcomes.

## License

Licensed under the Apache License 2.0. See `LICENSE` for details.
