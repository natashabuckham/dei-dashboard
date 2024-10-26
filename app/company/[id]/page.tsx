import path from "path";
import fs from "fs";
import { CompanyData } from "../../../lib/types";
import CompanyListItem from "../../components/CompanyListItem";

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
    return <p>Company not found</p>;
  }

  const { genderStats, ethnicityStats, disabilityStats, lgbtqiaStats } =
    companyData;

  return (
    <div className="max-w-6xl mx-auto p-4 min-h-screen">
      <h1 className="text-center p-4 text-3xl font-bold">
        {companyData.EmployerName}
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
          <div className="statsBox ethnicityStats">
            <h3 className="text-2xl font-semibold mb-2 text-center">
              Ethnicity
            </h3>
            <ul className="space-y-2">
              <CompanyListItem
                dataPoint={ethnicityStats?.percentageEmployees}
                dataCategory={"ethnicityStats"}
                specificStat={"percentageEmployees"}
              />
              <CompanyListItem
                dataPoint={ethnicityStats?.employeeNetwork}
                dataCategory={"ethnicityStats"}
                specificStat={"employeeNetwork"}
              />
              <CompanyListItem
                dataPoint={ethnicityStats?.prayerRoom}
                dataCategory={"ethnicityStats"}
                specificStat={"prayerRoom"}
              />
              <CompanyListItem
                dataPoint={ethnicityStats?.holidays}
                dataCategory={"ethnicityStats"}
                specificStat={"holidays"}
              />
            </ul>
          </div>

          <div className="statsBox genderStats">
            <h3 className="text-center text-2xl font-semibold mb-2">Gender</h3>
            <ul className="space-y-2">
              <CompanyListItem
                dataPoint={genderStats?.percentageEmployees}
                dataCategory={"genderStats"}
                specificStat={"percentageEmployees"}
              />
              <CompanyListItem
                dataPoint={genderStats?.payGap}
                dataCategory={"genderStats"}
                specificStat={"payGap"}
              />
              <CompanyListItem
                dataPoint={genderStats?.employeeNetwork}
                dataCategory={"genderStats"}
                specificStat={"employeeNetwork"}
              />
              <CompanyListItem
                dataPoint={genderStats?.equalMatPatLeave}
                dataCategory={"genderStats"}
                specificStat={"equalMatPatLeave"}
              />
            </ul>
          </div>

          <div className="statsBox lgbtqStats">
            <h3 className="text-center text-2xl font-semibold mb-2">
              LGBTQIA+
            </h3>
            <ul className="space-y-2">
              <CompanyListItem
                dataPoint={lgbtqiaStats?.percentageEmployees}
                dataCategory={"genderStats"}
                specificStat={"percentageEmployees"}
              />
              <CompanyListItem
                dataPoint={lgbtqiaStats?.employeeNetwork}
                dataCategory={"lgbtqiaStats"}
                specificStat={"employeeNetwork"}
              />
              <CompanyListItem
                dataPoint={lgbtqiaStats?.pronounPolicy}
                dataCategory={"lgbtqiaStats"}
                specificStat={"pronounPolicy"}
              />
              <CompanyListItem
                dataPoint={lgbtqiaStats?.genderNeutralBathrooms}
                dataCategory={"lgbtqiaStats"}
                specificStat={"genderNeutralBathrooms"}
              />
            </ul>
          </div>

          <div className="statsBox disabilityStats">
            <h3 className="text-center text-2xl font-semibold mb-2">
              Disabilities
            </h3>
            <ul className="space-y-2">
              <CompanyListItem
                dataPoint={disabilityStats?.percentageEmployees}
                dataCategory={"disabilityStats"}
                specificStat={"percentageEmployees"}
              />
              <CompanyListItem
                dataPoint={disabilityStats?.employeeNetwork}
                dataCategory={"disabilityStats"}
                specificStat={"employeeNetwork"}
              />
              <CompanyListItem
                dataPoint={disabilityStats?.disabilityTraining}
                dataCategory={"disabilityStats"}
                specificStat={"disabilityTraining"}
              />
              <CompanyListItem
                dataPoint={disabilityStats?.mentalHealthSupport}
                dataCategory={"disabilityStats"}
                specificStat={"mentalHealthSupport"}
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
