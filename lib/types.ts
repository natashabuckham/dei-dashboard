export interface SearchResult {
  id: number;
  title: string;
  description: string;
}

export interface SearchBarProps {
  onSelect?: (result: SearchResult) => void;
  placeholder?: string;
  minSearchLength?: number;
  debounceMs?: number;
}

export interface CompanyData {
  EmployerName: string;
  overview?: string;
  EmployerId: number;
  Address: string;
  DiffMeanHourlyPercent: number;
  DiffMedianHourlyPercent: number;
  CompanyLinkToGPGInfo: string;
  EmployerSize: string;
  CompanyName: string;
  Year: string;
  ethnicityRanking?: 5;
  genderRanking?: 10;
  lgbtqRanking?: 2;
  disabilityRanking?: 7;
  ethnicityStats?: EthnicityStats;
  genderStats?: GenderStats;
  lgbtqStats?: LGBTQStats;
  disabilityStats?: DisabilityStats;
}

export interface EthnicityStats {
  percentageEmployees?: number;
  employeeNetwork?: boolean;
  prayerRoom?: boolean;
  holidays?: boolean;
  culturalTraining?: boolean;
  mentoringProgram?: boolean;
  culturalCelebrations?: boolean;
}

export interface GenderStats {
  percentageEmployees?: number;
  payGap?: number;
  employeeNetwork?: boolean;
  equalMatPatLeave?: boolean;
  returnToWorkSupport?: boolean;
  womenInLeadership?: number;
  mentorshipProgram?: boolean;
}

export interface LGBTQStats {
  percentageEmployees?: number;
  employeeNetwork?: boolean;
  pronounPolicy?: boolean;
  genderNeutralBathrooms?: boolean;
  partnerBenefits?: boolean;
  transitionSupport?: boolean;
  prideParticipation?: boolean;
}

export interface DisabilityStats {
  percentageEmployees?: number;
  employeeNetwork?: boolean;
  workplaceAdjustments?: boolean;
  mentalHealthSupport?: boolean;
  disabilityTraining?: boolean;
  flexibleWorking?: boolean;
  disabilityConfident?: boolean;
}

export type Database = CompanyData[];
