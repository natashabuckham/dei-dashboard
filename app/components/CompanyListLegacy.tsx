import CompanyListItem from "../components/CompanyListItem";

const CompanyListLegacy = async ({ params }: { params: any }) => {
  return (
    <div>
      <div className="statsBox ethnicityStats">
        <h3 className="text-2xl font-semibold mb-2 text-center">Ethnicity</h3>
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
            dataPoint={companyData.DiffMedianHourlyPercent}
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
        <h3 className="text-center text-2xl font-semibold mb-2">LGBTQIA+</h3>
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
  );
};
