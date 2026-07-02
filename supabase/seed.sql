insert into funding_programs (id, name, capital_type, description, jurisdiction_scope)
values
  ('ca-ssbci', 'California SSBCI', 'SSBCI', 'State credit support for eligible small businesses.', array['California']),
  ('ca-ibank', 'California IBank Small Business Finance Center', 'Loan guarantees', 'State guarantee and enhancement tools.', array['California']),
  ('ca-calcap', 'CalCAP', 'Collateral support', 'Lender loss reserve support.', array['California']),
  ('sba-7a', 'SBA 7(a)', 'SBA 7(a)', 'General purpose SBA-backed lending.', array['Federal','California']),
  ('sba-504', 'SBA 504', 'SBA 504', 'Fixed asset expansion financing.', array['Federal','California']),
  ('sba-microloan', 'SBA Microloan', 'SBA Microloan', 'Small-dollar lending through intermediaries.', array['Federal','California']),
  ('cdfi-placeholder', 'CDFI Placeholder Program', 'CDFI', 'Placeholder CDFI opportunity.', array['California']),
  ('county-grant-placeholder', 'County Grant Placeholder', 'County grants', 'Placeholder county grant.', array['County']),
  ('city-grant-placeholder', 'City Grant Placeholder', 'City grants', 'Placeholder city grant.', array['City']),
  ('procurement-cert-placeholder', 'Procurement Certification Placeholder', 'Procurement certifications', 'Placeholder certification pathway.', array['Federal','State','County','City'])
on conflict (id) do nothing;
