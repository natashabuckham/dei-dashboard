import React from "react";

const CompanyProfile = () => {
  const angelCorp = {
    companyName: "Angel Corp",
    overview:
      "Angel Corp provides a great employee experience for most groups. They have excellent provisions for BAME people, people with disabilities, and women. They are falling behind on LGBTQ+ inclusion.",
    ethnicityRanking: 5,
    genderRanking: 10,
    lgbtqRanking: 2,
    disabilityRanking: 7,
    ethnicityStats: {
      percentageEmployees: 10,
      employeeNetwork: true,
      prayerRoom: true,
      holidays: true,
    },
    genderStats: {
      percentageEmployees: 50,
      payGap: 0,
      employeeNetwork: true,
      equalMatPatLeave: true,
    },
    lgbtqStats: {
      percentageEmployees: 2,
      employeeNetwork: false,
      pronounPolicy: false,
      genderNeutralBathrooms: false,
    },
    disabilityStats: {
      percentageEmployees: 15,
      employeeNetwork: true,
      disabilityTraining: true,
      mentalHealthSupport: true,
    },
  };

  return (
    <div className="max-w-6xl mx-auto p-4 min-h-screen">
      <h1 className="text-center p-4 text-3xl font-bold">
        {angelCorp.companyName}
      </h1>
      <div className="text-center p-4">
        <p>{angelCorp.overview}</p>
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
              <li className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow">
                <strong>
                  {angelCorp.ethnicityStats.percentageEmployees}%{" "}
                </strong>
                of employees are from a BAME background
              </li>
              <li className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow">
                {angelCorp.companyName}{" "}
                {angelCorp.ethnicityStats.employeeNetwork ? `do` : `don't`} have
                an employee network for staff from BAME backgrounds
              </li>
              <li className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow">
                They {angelCorp.ethnicityStats.prayerRoom ? `do` : `don't`} have
                a prayer room and{" "}
                {angelCorp.ethnicityStats.holidays ? `do` : `don't`} allow
                flexible working for religious reasons
              </li>
            </ul>
          </div>

          <div className="statsBox genderStats">
            <h3 className="text-center text-2xl font-semibold mb-2">Gender</h3>
            <ul className="space-y-2">
              <li className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow">
                {angelCorp.genderStats.percentageEmployees}% of employees are
                women
              </li>
              <li className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow">
                The gender pay gap is {angelCorp.genderStats.payGap}%
              </li>
              <li className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow">
                {angelCorp.companyName}{" "}
                {angelCorp.genderStats.employeeNetwork ? `do` : `don't`} have an
                employee network for women
              </li>
              <li className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow">
                They {angelCorp.genderStats.equalMatPatLeave ? `do` : `don't`}{" "}
                have equal maternity and paternity leave
              </li>
            </ul>
          </div>

          <div className="statsBox lgbtqStats">
            <h3 className="text-center text-2xl font-semibold mb-2">
              LGBTQIA+
            </h3>
            <ul className="space-y-2">
              <li className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow">
                {angelCorp.lgbtqStats.percentageEmployees}% are from an LGBTQIA+
                background
              </li>
              <li className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow">
                {angelCorp.companyName}{" "}
                {angelCorp.lgbtqStats.employeeNetwork ? `do` : `don't`} have an
                employee network for LGBTQIA+ employees
              </li>
              <li className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow">
                They {angelCorp.lgbtqStats.pronounPolicy ? `do` : `don't`} have
                a pronoun policy and they{" "}
                {angelCorp.lgbtqStats.genderNeutralBathrooms ? `do` : `don't`}{" "}
                have gender neutral bathrooms
              </li>
            </ul>
          </div>

          <div className="statsBox disabilityStats">
            <h3 className="text-center text-2xl font-semibold mb-2">
              Disabilities
            </h3>
            <ul className="space-y-2">
              <li className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow">
                {angelCorp.disabilityStats.percentageEmployees}% of employees
                report they have a disability
              </li>
              <li className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow">
                {angelCorp.companyName}{" "}
                {angelCorp.disabilityStats.employeeNetwork ? `do` : `don't`}{" "}
                have an employee network for employees with disabilities
              </li>
              <li className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow">
                They{" "}
                {angelCorp.disabilityStats.disabilityTraining ? `do` : `don't`}{" "}
                provide disability training and they{" "}
                {angelCorp.disabilityStats.mentalHealthSupport ? `do` : `don't`}{" "}
                provide mental health support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
