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
    return <p>Object not found</p>;
  }

  const { genderStats } = companyData.genderStats;

  return (
    <div>
      <h1 className="text-center p-4">{companyData.CompanyName}</h1>
      <div className="text-center p-4">
        <p>Company Overview: {companyData.overview}</p>
      </div>
      <div className="grid grid-cols-2">
        <div className="houseContainer">
          <div className="grid grid-cols-2 gap-4 w-64 h-64">
            <div className="bg-orange-500 rounded-lg w-full h-full"></div>
            <div className="bg-green-600 rounded-lg w-full h-full"></div>
            <div className="bg-red-500 rounded-lg w-full h-full"></div>
            <div className="bg-green-400 rounded-lg w-full h-full"></div>
          </div>
        </div>
        <div className="statsBox ethnicityStats">
          <h3>Ethnicity</h3>
          {/* <ul>
            <li>
              {companyData.ethnicityStats.percentageEmployees}% of employees are
              from a BAME background
            </li>
            <li>
              {companyData.CompanyName}{" "}
              {companyData.ethnicityStats.employeeNetwork ? `do` : `don't`} have
              an employee network for staff from BAME backgrounds
            </li>
            <li>
              They {companyData.ethnicityStats.prayerRoom ? `do` : `don't`} have
              a prayer room and{" "}
              {companyData.ethnicityStats.holidays ? `do` : `don't`} allow
              flexible working for religious reasons
            </li>
          </ul> */}
        </div>

        <div className="statsBox genderStats">
          <h3>Gender</h3>
          {/* <ul>
            <li>
              {companyData.genderStats.percentageEmployees}% of employees are
              women
            </li>
            <li>The gender pay gap is {companyData.genderStats.payGap}%</li>
            <li>
              {companyData.CompanyName}{" "}
              {companyData.genderStats.employeeNetwork ? `do` : `don't`} have an
              employee network for women
            </li>
            <li>
              They {companyData.genderStats.equalMatPatLeave ? `do` : `don't`}{" "}
              have equal maternity and paternity leave
            </li>
          </ul> */}
        </div>

        <div className="statsBox lgbtqStats">
          <h3>LGBTQIA+</h3>
          {/* <ul>
            <li>
              {companyData.lgbtqStats.percentageEmployees}% are from an LGBTQIA+
              background
            </li>
            <li>
              {companyData.CompanyName}{" "}
              {companyData.lgbtqStats.employeeNetwork ? `do` : `don't`} have an
              employee network for LGBTQIA+ employees
            </li>
            <li>
              They {companyData.lgbtqStats.pronounPolicy ? `do` : `don't`} have
              a pronoun policy and they{" "}
              {companyData.lgbtqStats.genderNeutralBathrooms ? `do` : `don't`}{" "}
              have gender neutral bathrooms
            </li>
          </ul> */}
        </div>

        <div className="statsBox disabilityStats">
          <h3>Disabilities</h3>
          {/* <ul>
            <li>
              {companyData.disabilityStats.percentageEmployees}% of employees
              report they have a disability
            </li>
            <li>
              {companyData.CompanyName}{" "}
              {companyData.disabilityStats.employeeNetwork ? `do` : `don't`}{" "}
              have an employee network for employees with disability
            </li>
            <li>
              They{" "}
              {companyData.disabilityStats.disabilityTraining ? `do` : `don't`}{" "}
              provide disability training and they{" "}
              {companyData.disabilityStats.mentalHealthSupport ? `do` : `don't`}{" "}
              provide mental health support
            </li>
          </ul> */}
        </div>
      </div>
      <CompanyListItem
        dataPoint={companyData.genderStats?.percentageEmployees}
        dataCategory={"genderStats"}
        specificStat={"percentageEmployees"}
      />
    </div>
  );
};

export default CompanyProfile;
