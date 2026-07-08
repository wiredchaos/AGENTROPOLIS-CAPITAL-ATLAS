# Cloudflare Launch Notes

Capital Atlas by AGENTROPOLIS is Cloudflare-first.

## Primary services

- Cloudflare Pages for the frontend
- Cloudflare Workers for API routes and edge workflows
- Cloudflare D1 for lightweight funding-program data
- Cloudflare R2 for document storage and generated packets
- Cloudflare Turnstile for public-form bot protection
- Workers AI as an optional model provider

## Local development

Use Wrangler for local Cloudflare development.

```bash
npm install
npm run dev
```

## Recommended environment values

Create local development variables for:

- Supabase URL and anon key, if Supabase is used
- Supabase service role key, server-side only
- AI provider key, server-side only
- AI provider base URL
- AI model name
- Cloudflare account ID
- Cloudflare D1 database ID
- Cloudflare R2 bucket name
- Turnstile site key
- Turnstile secret key

Do not commit real keys, tokens, secrets, or customer documents.

## Safety note

Capital Atlas provides guidance and application preparation support. Funding approval depends on lender, program, jurisdiction, underwriting, and documentation requirements.
