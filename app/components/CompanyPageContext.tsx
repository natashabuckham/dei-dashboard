"use client";

import { useCompany } from "@/context/CompanyContext";
import { GenderStats } from "./stats/GenderStats";
import { EthnicityStats } from "./stats/EthnicityStats";
import { LGBTQIAStats } from "./stats/LGBTQIAStats";
import { DisabilityStats } from "./stats/DisabilityStats";
import PayGapBarChart from "./charts/PayGapBarChart";
import Image from "next/image";

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
        {" "}
        {formattedCompanyName}
      </h1>
      <div className="text-center p-4">
        <p>{companyData.overview}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 h-[calc(100vh-200px)]">
        {/* House Container */}
        <div className="w-full md:w-1/2 h-40 md:h-full flex items-center justify-center">
          <Image
            src="/house-good.svg"
            alt="House Good"
            className="rounded-lg object-contain"
            layout="responsive"
            width={200}
            height={200}
          />
        </div>

        {/* Stats Section */}
        <div className="flex flex-col space-y-4 w-full md:w-1/2 h-full overflow-y-auto">
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
