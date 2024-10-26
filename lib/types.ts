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

export interface payGapDataEntry {
    EmployerName: string;
    EmployerId: number;
    Address: string;
    DiffMeanHourlyPercent: string;
    DiffMedianHourlyPercent: string;
    CompanyLinkToGPGInfo: string;
    EmployerSize: string;
    CompanyName: string;
    Year: string;
}[]

export type payGapData = payGapDataEntry[]