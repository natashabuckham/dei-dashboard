import path from "path";
import fs from "fs";
import { CompanyData } from "../../../lib/types";
// import CompanyListItem from "../../components/CompanyListItem";
import { formatCompanyName } from "@/utils/companyUtils";
import { EthnicityStats } from "@/app/components/stats/EthnicityStats";
import { GenderStats } from "@/app/components/stats/GenderStats";
import { LGBTQStats } from "@/app/components/stats/LGBTQStats";
import { DisabilityStats } from "@/app/components/stats/DisabilityStats";

const fetchData = async () => {
  const filePath = path.join(
    process.cwd(),
    "/lib/database/",
    "PayGapData.json",
  );

  const jsonData = await fs.promises.readFile(filePath, "utf8");
  const database: CompanyData[] = JSON.parse(jsonData);
  return database;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CompanyProfile = async ({ params }: { params: any }) => {
  const { id } = await params;
  const data = await fetchData();

  // Handle if object not found
  const companyData = data.find((item: CompanyData) => item.EmployerId == id);
  if (!companyData) {
    return <p>Object not found</p>;
  }

  // const { genderStats } = companyData.genderStats;
  //       <CompanyListItem
  //         dataPoint={companyData.genderStats?.percentageEmployees}
  //         dataCategory={"genderStats"}
  //         specificStat={"percentageEmployees"}
  //       />

  return (
    <div className="max-w-6xl mx-auto p-4 min-h-screen">
      <h1 className="text-center p-4 text-3xl font-bold">
        {formatCompanyName(companyData.EmployerName)}
      </h1>
      <div className="text-center p-4">
        <p>{companyData.overview}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 h-[calc(100vh-200px)]">
        {/* House Container */}
        <div className="w-full md:w-1/2 h-full">
          <div className="grid grid-cols-2 gap-4 w-full h-full">
            <div className="bg-orange-500 rounded-lg"></div>
            <div className="bg-green-600 rounded-lg"></div>
            <div className="bg-red-500 rounded-lg"></div>
            <div className="bg-green-400 rounded-lg"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col space-y-4 w-full md:w-1/2 h-full overflow-y-auto">
          <EthnicityStats companyData={companyData} />

          <GenderStats companyData={companyData} />

          <LGBTQStats companyData={companyData} />

          <DisabilityStats companyData={companyData} />
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
