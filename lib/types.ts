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
  EmployerId: number;
  Address: string;
  DiffMeanHourlyPercent: number;
  DiffMedianHourlyPercent: number;
  CompanyLinkToGPGInfo: string;
  EmployerSize: string;
  CompanyName: string;
  Year: string;
}
