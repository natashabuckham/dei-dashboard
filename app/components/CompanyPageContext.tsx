"use client";

import { useCompany } from "@/context/CompanyContext";
import { GenderStats } from "./stats/GenderStats";
import { EthnicityStats } from "./stats/EthnicityStats";
import { LGBTQIAStats } from "./stats/LGBTQIAStats";
import { DisabilityStats } from "./stats/DisabilityStats";
import PayGapBarChart from "./charts/PayGapBarChart";

function CompanyPageContext() {
  const {
    formattedCompanyName,
    companyData,
    historicalData2122,
    historicalData2223,
  } = useCompany();

  return (
    <div className="max-w-6xl mx-auto p-4 min-h-screen">
      <h1 className="text-center p-4 text-3xl font-bold">
        {/* Check if the company is "Angel Corp" and display the image instead */}
        {formattedCompanyName === "Angel Corp" ? (
          <img
            src="/angel-corp.svg"
            alt="Angel Corp Logo"
            className="mx-auto w-1/2 h-auto"
          />
        ) : (
          formattedCompanyName
        )}
      </h1>
      <div className="text-center p-4">
        <p>{companyData.overview}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 h-[calc(100vh-200px)]">
        {/* House Container */}
        <div className="w-full md:w-1/2 h-32 md:h-full flex flex-col md:flex-row items-center justify-start md:justify-center">
          <img
            src="/house-good.svg"
            alt="House Good"
            className="rounded-lg object-contain w-3/4 h-28 md:w-auto h-auto md:h-full"
          />
        </div>

        {/* Stats Section */}
        <div className="flex flex-col space-y-4 w-full md:w-1/2 h-full overflow-y-auto bg-white">
          <GenderStats />

          <EthnicityStats />

          <LGBTQIAStats />

          <DisabilityStats />
        </div>
        {/* Graph*/}
      </div>

      <div className="text-center mt-16 mb-16">
        <h2 className="text-center p-4 text-3xl font-bold">
          Gender Pay Gap Over Time
        </h2>
        <PayGapBarChart
          companyData={companyData}
          historicalData2122={historicalData2122}
          historicalData2223={historicalData2223}
        />
      </div>

      <div className="text-center mt-16 mb-16">
        <h2 className="text-center p-4 text-3xl font-bold">Ask a question</h2>
        <p className="text-sm font-medium">
          Not found what you are looking for? Ask an employee anonymously
        </p>
        <button className="m-4 bg-white hover:bg-gray-200 dark:bg-gray-800 p-5 rounded-xl border border-black dark:border-gray-700">
          Ask a question
        </button>
      </div>
    </div>
  );
}

export default CompanyPageContext;
