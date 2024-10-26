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

interface ethnicityStats {
  percentageEmployees?: string;
  employeeNetwork?: boolean;
  prayerRoom?: boolean;
  holidays?: boolean;
}
interface genderStats {
  percentageEmployees?: string;
  payGap?: boolean;
  employeeNetwork?: boolean;
  equalMatPatLeave?: boolean;
}
interface lgbtqStats {
  percentageEmployees?: string;
  employeeNetwork?: boolean;
  pronounPolicy?: boolean;
  genderNeutralBathrooms?: boolean;
}

interface disabilityStats {
  percentageEmployees?: string;
  employeeNetwork?: boolean;
  disabilityTraining?: boolean;
  mentalHealthSupport?: boolean;
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
  ethnicityStats?: ethnicityStats;
  genderStats?: genderStats;
  lgbtqStats?: lgbtqStats;
  disabilityStats?: disabilityStats;
}

export type Database = CompanyData[];
