import path from "path";
import fs from "fs";
import { CompanyData } from "../../../lib/types";
// import CompanyListItem from "../../components/CompanyListItem";

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
              {/* <li className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow">
                <strong>
                  {companyData.ethnicityStats.percentageEmployees}%{" "}
                </strong>
                of employees are from a BAME background
              </li>
              <li className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow">
                {companyData.EmployerName}{" "}
                {companyData.ethnicityStats.employeeNetwork ? `do` : `don't`}{" "}
                have an employee network for staff from BAME backgrounds
              </li>
              <li className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow">
                They {companyData.ethnicityStats.prayerRoom ? `do` : `don't`}{" "}
                have a prayer room and{" "}
                {companyData.ethnicityStats.holidays ? `do` : `don't`} allow
                flexible working for religious reasons
              </li> */}
            </ul>
          </div>

          <div className="statsBox genderStats">
            <h3 className="text-center text-2xl font-semibold mb-2">Gender</h3>
            <ul className="space-y-2">
              {/* <li className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow">
                {companyData.genderStats.percentageEmployees}% of employees are
                women
              </li>
              <li className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow">
                The gender pay gap is {companyData.genderStats.payGap}%
              </li>
              <li className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow">
                {companyData.employerName}{" "}
                {companyData.genderStats.employeeNetwork ? `do` : `don't`} have
                an employee network for women
              </li>
              <li className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow">
                They {companyData.genderStats.equalMatPatLeave ? `do` : `don't`}{" "}
                have equal maternity and paternity leave
              </li> */}
            </ul>
          </div>

          <div className="statsBox lgbtqStats">
            <h3 className="text-center text-2xl font-semibold mb-2">
              LGBTQIA+
            </h3>
            <ul className="space-y-2">
              {/* <li className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow">
                {companyData.lgbtqStats.percentageEmployees}% are from an
                LGBTQIA+ background
              </li>
              <li className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow">
                {companyData.employerName}{" "}
                {companyData.lgbtqStats.employeeNetwork ? `do` : `don't`} have
                an employee network for LGBTQIA+ employees
              </li>
              <li className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow">
                They {companyData.lgbtqStats.pronounPolicy ? `do` : `don't`}{" "}
                have a pronoun policy and they{" "}
                {companyData.lgbtqStats.genderNeutralBathrooms ? `do` : `don't`}{" "}
                have gender neutral bathrooms
              </li> */}
            </ul>
          </div>

          <div className="statsBox disabilityStats">
            <h3 className="text-center text-2xl font-semibold mb-2">
              Disabilities
            </h3>
            <ul className="space-y-2">
              {/* <li className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow">
                {companyData.disabilityStats.percentageEmployees}% of employees
                report they have a disability
              </li>
              <li className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow">
                {companyData.employerName}{" "}
                {companyData.disabilityStats.employeeNetwork ? `do` : `don't`}{" "}
                have an employee network for employees with disabilities
              </li>
              <li className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow">
                They{" "}
                {companyData.disabilityStats.disabilityTraining
                  ? `do`
                  : `don't`}{" "}
                provide disability training and they{" "}
                {companyData.disabilityStats.mentalHealthSupport
                  ? `do`
                  : `don't`}{" "}
                provide mental health support
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
