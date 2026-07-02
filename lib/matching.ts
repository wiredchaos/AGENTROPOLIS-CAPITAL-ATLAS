import { BusinessProfile, CapitalMatch, FundingProgram } from "@/lib/types";

export function scoreProgram(profile: BusinessProfile, program: FundingProgram): CapitalMatch {
  let score = 0;
  const reasons: string[] = [];

  const jurisdictions = [profile.state, profile.county, profile.city, profile.tribalAffiliation].filter(Boolean);
  const jurisdictionHits = program.jurisdictions.filter((j) => jurisdictions.includes(j)).length;
  if (jurisdictionHits > 0) {
    score += 20 + jurisdictionHits * 4;
    reasons.push("Jurisdiction match");
  }

  if (program.businessStages.includes(profile.startupOrExisting)) {
    score += 10;
    reasons.push("Business stage fit");
  }

  if (program.eligibleIndustries.includes("All") || program.eligibleIndustries.includes(profile.industry)) {
    score += 10;
    reasons.push("Industry fit");
  }

  if (!program.minCreditScore || parseInt(profile.creditScoreRange.split("-")[0], 10) >= program.minCreditScore) {
    score += 8;
    reasons.push("Credit score fit");
  }

  if (!program.minAnnualRevenue || profile.annualRevenue >= program.minAnnualRevenue) {
    score += 8;
    reasons.push("Revenue fit");
  }

  if (program.requiresCollateral === undefined || program.requiresCollateral === profile.collateralAvailable) {
    score += 8;
    reasons.push("Collateral fit");
  }

  if (
    program.useOfFundsTags.some((tag) =>
      profile.useOfFunds.toLowerCase().includes(tag.toLowerCase()),
    )
  ) {
    score += 8;
    reasons.push("Use-of-funds alignment");
  }

  if ((profile.ruralUrban === "rural" && program.supportsRural) || (profile.ruralUrban === "urban" && program.supportsUrban)) {
    score += 8;
    reasons.push("Rural/urban status match");
  }

  if (profile.businessPlanAvailable && profile.bankStatementsAvailable) {
    score += 6;
    reasons.push("Document readiness");
  }

  if (profile.ownership.minorityOwned || profile.ownership.womanOwned || profile.ownership.veteranOwned) {
    score += 6;
    reasons.push("SEDI-related profile factors");
  }

  return { program, score: Math.min(score, 100), reasons };
}

export function rankPrograms(profile: BusinessProfile, programs: FundingProgram[]): CapitalMatch[] {
  return programs.map((program) => scoreProgram(profile, program)).sort((a, b) => b.score - a.score);
}
