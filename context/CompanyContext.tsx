"use client";

import { CompanyData } from "@/lib/types";
import { formatCompanyName } from "@/utils/companyUtils";
import { createContext, useContext } from "react";
import { toast } from "react-toastify";

interface CompanyContextType {
  companyName: string;
  formattedCompanyName: string;
  historicalData2122?: CompanyData | undefined;
  historicalData2223?: CompanyData | undefined;
  companyData: CompanyData;
  reportMissingData: (metric: string) => void;
}

interface CompanyProviderProps {
  children: React.ReactNode;
  companyData: CompanyData;
  historicalData2122?: CompanyData;
  historicalData2223?: CompanyData;
}

const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

export function CompanyProvider({
  children,
  companyData,
  historicalData2122,
  historicalData2223,
}: CompanyProviderProps) {
  const reportMissingData = () => {
    toast.success("Data Submitted!");
  };

  return (
    <CompanyContext.Provider
      value={{
        companyName: companyData.EmployerName,
        formattedCompanyName: formatCompanyName(companyData.EmployerName),
        companyData,
        reportMissingData,
        historicalData2122,
        historicalData2223,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
}

export function useCompany() {
  const context = useContext(CompanyContext);
  if (context === undefined) {
    throw new Error("useCompany must be used within a CompanyProvider");
  }
  return context;
}
