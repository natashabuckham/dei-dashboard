import { CompanyData } from "@/lib/types";

type ExceptionMap = {
  [key: string]: string;
};

export const cleanCompanyName = (name: string): string => {
  return (
    name
      // Remove quotes and apostrophes
      .replace(/['""`]/g, "")
      // Convert "AND" to "/" for university names
      .replace(/'\s+AND\s+'/, " / ")
      // Remove LIMITED or LTD from the end, including potential periods
      .replace(/\s+(LIMITED|LTD)\.?$/i, "")
      // Remove extra whitespace and trim
      .replace(/\s+/g, " ")
      .trim()
  );
};

export const formatCompanyName = (name: string): string => {
  // First clean the name
  const cleanedName = cleanCompanyName(name);

  // Handle special cases before capitalization
  const exceptions = ["UK", "USA", "LLC", "PLC"];
  const exceptionMap: ExceptionMap = exceptions.reduce(
    (acc, curr) => ({
      ...acc,
      [curr.toLowerCase()]: curr,
    }),
    {},
  );

  return cleanedName
    .toLowerCase()
    .split(" ")
    .map((word) => {
      if (exceptionMap[word.toLowerCase()]) {
        return exceptionMap[word.toLowerCase()];
      }

      if (word.includes("-")) {
        return word
          .split("-")
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join("-");
      }

      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

export type CleanedCompanyData = {
  EmployerId: number;
  EmployerName: string;
  CleanedName: string;
};

// Optional: Helper to process all companies
export const processCompanies = (
  companies: CompanyData[],
): CleanedCompanyData[] => {
  return companies.map((company) => ({
    ...company,
    CleanedName: formatCompanyName(company.EmployerName),
  }));
};
