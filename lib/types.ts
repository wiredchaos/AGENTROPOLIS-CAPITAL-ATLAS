export const REQUIRED_DISCLAIMER =
  "Capital Atlas provides guidance and application preparation support. Funding approval depends on lender, program, jurisdiction, underwriting, and documentation requirements.";

export type RuralUrban = "rural" | "urban";

export type OwnershipStatus = {
  womanOwned: boolean;
  minorityOwned: boolean;
  veteranOwned: boolean;
  disabledOwned: boolean;
  nonprofit: boolean;
};

export type BusinessProfile = {
  businessName: string;
  state: string;
  county: string;
  city: string;
  tribalAffiliation: string;
  ruralUrban: RuralUrban;
  industry: string;
  naicsCode: string;
  entityType: string;
  yearsInBusiness: number;
  annualRevenue: number;
  monthlyRevenue: number;
  creditScoreRange: string;
  fundingAmountNeeded: number;
  useOfFunds: string;
  collateralAvailable: boolean;
  employees: number;
  ownership: OwnershipStatus;
  startupOrExisting: "startup" | "existing";
  existingDebt: boolean;
  taxComplianceStatus: "compliant" | "not_compliant";
  bankStatementsAvailable: boolean;
  businessPlanAvailable: boolean;
};

export type FundingProgram = {
  id: string;
  name: string;
  capitalType: string;
  description: string;
  jurisdictions: string[];
  eligibleIndustries: string[];
  businessStages: Array<"startup" | "existing">;
  minCreditScore?: number;
  minAnnualRevenue?: number;
  requiresCollateral?: boolean;
  supportsRural?: boolean;
  supportsUrban?: boolean;
  useOfFundsTags: string[];
  readinessDocs: string[];
};

export type CapitalMatch = {
  program: FundingProgram;
  score: number;
  reasons: string[];
};
