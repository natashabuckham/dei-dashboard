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
  const exceptionMap = exceptions.reduce(
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
      // Check if word is in our exceptions
      if (exceptionMap[word.toLowerCase()]) {
        return exceptionMap[word.toLowerCase()];
      }
      // Handle hyphenated words
      if (word.includes("-")) {
        return word
          .split("-")
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join("-");
      }
      // Default capitalization
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

// Optional: Type for search results with cleaned names
export type CleanedCompanyData = {
  EmployerId: number;
  EmployerName: string;
  CleanedName: string;
  // ... other fields from CompanyData
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
