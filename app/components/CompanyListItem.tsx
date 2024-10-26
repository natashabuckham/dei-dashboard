function CompanyListItem({
  dataPoint,
  dataCategory,
  specificStat,
}: {
  dataPoint: string | boolean | number | undefined;
  dataCategory: string;
  specificStat: string;
}) {
  if (dataPoint == undefined)
    return (
      <li className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow">
        Data not available
      </li>
    );

  const listItemTextMap = [
    {
      category: "lgbtqiaStats",
      content: {
        percentageEmployees: `${dataPoint}% are from an LGBTQIA+ background`,
        pronounPolicy: `They ${dataPoint ? `do` : `don't`} have a pronoun policy`,
        employeeNetwork: `They ${dataPoint ? `do` : `don't`} have an employee network for LGBTQIA+ employees`,
        genderNeutralBathrooms: `They ${dataPoint ? `do` : `don't`} have gender neutral bathrooms`,
      },
    },
    {
      category: "ethnicityStats",
      content: {
        percentageEmployees: `${dataPoint}% of employees are from a BAME background`,
        holidays: `They ${dataPoint ? `do` : `don't`} allow flexible working for religious reasons`,
        employeeNetwork: `They ${dataPoint ? `do` : `don't`} have an employee network for staff from BAME backgrounds`,
        prayerRoom: `They ${dataPoint ? `do` : `don't`} have a prayer room`,
      },
    },
    {
      category: "genderStats",
      content: {
        percentageEmployees: `${dataPoint}% of employees are women`,
        payGap: `The gender pay gap is ${dataPoint}`,
        employeeNetwork: `They ${dataPoint ? `do` : `don't`} have an employee network for women`,
        equalMatPatLeave: `They ${dataPoint ? `do` : `don't`} have equal maternity and paternity leave`,
      },
    },
    {
      category: "disabilityStats",
      content: {
        percentageEmployees: `${dataPoint}% of employees report they have a disability`,
        disabilityTraining: `They ${dataPoint ? `do` : `don't`} provide disability training`,
        employeeNetwork: `They ${dataPoint ? `do` : `don't`}  have an employee network for employees with disabilities`,
        mentalHealthSupport: `They ${dataPoint ? `do` : `don't`} provide mental health support`,
      },
    },
  ];

  const categoryContent = listItemTextMap.filter(
    (item) => item?.category == dataCategory,
  );

  if (!categoryContent)
    return (
      <li className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow">
        Data unavailable
      </li>
    );
  const textContent: string =
    // @ts-expect-error - to do
    categoryContent[0].content[specificStat as string];

  return (
    <li className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow">
      {textContent}
    </li>
  );
}

export default CompanyListItem;
