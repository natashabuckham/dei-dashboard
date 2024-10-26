import companiesData from "./database/PayGapData.json";

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

export const companies = companiesData as CompanyData[];
