create table if not exists users (
  id uuid primary key,
  email text unique not null,
  full_name text,
  created_at timestamptz default now()
);

create table if not exists business_profiles (
  id uuid primary key,
  user_id uuid references users(id),
  business_name text not null,
  state text,
  county text,
  city text,
  tribal_affiliation text,
  rural_or_urban text,
  industry text,
  naics_code text,
  entity_type text,
  years_in_business int,
  annual_revenue numeric,
  monthly_revenue numeric,
  credit_score_range text,
  funding_amount_needed numeric,
  use_of_funds text,
  collateral_available boolean,
  employees int,
  woman_owned boolean,
  minority_owned boolean,
  veteran_owned boolean,
  disabled_owned boolean,
  nonprofit boolean,
  startup_or_existing text,
  existing_debt boolean,
  tax_compliance_status text,
  bank_statements_available boolean,
  business_plan_available boolean,
  created_at timestamptz default now()
);

create table if not exists funding_programs (
  id text primary key,
  name text not null,
  capital_type text not null,
  description text,
  jurisdiction_scope text[],
  active boolean default true,
  created_at timestamptz default now()
);

create table if not exists jurisdictions (
  id uuid primary key,
  name text not null,
  jurisdiction_type text not null,
  parent_id uuid references jurisdictions(id)
);

create table if not exists capital_matches (
  id uuid primary key,
  profile_id uuid references business_profiles(id),
  funding_program_id text references funding_programs(id),
  score numeric,
  reasons jsonb,
  created_at timestamptz default now()
);

create table if not exists documents (
  id uuid primary key,
  profile_id uuid references business_profiles(id),
  doc_type text,
  status text,
  uri text,
  created_at timestamptz default now()
);

create table if not exists business_plans (
  id uuid primary key,
  profile_id uuid references business_profiles(id),
  content text,
  model text,
  created_at timestamptz default now()
);

create table if not exists financial_projections (
  id uuid primary key,
  profile_id uuid references business_profiles(id),
  assumptions jsonb,
  projection jsonb,
  created_at timestamptz default now()
);

create table if not exists applications (
  id uuid primary key,
  profile_id uuid references business_profiles(id),
  funding_program_id text references funding_programs(id),
  status text,
  submitted_at timestamptz,
  deadline_at timestamptz
);

create table if not exists tasks (
  id uuid primary key,
  application_id uuid references applications(id),
  title text,
  due_at timestamptz,
  status text
);

create table if not exists admin_notes (
  id uuid primary key,
  profile_id uuid references business_profiles(id),
  note text,
  created_by uuid references users(id),
  created_at timestamptz default now()
);
