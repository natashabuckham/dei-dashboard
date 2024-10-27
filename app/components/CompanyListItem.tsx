const genderPayHelperFunction = (payGap: number) => {
  const payGapSign = Math.sign(payGap);
  if (payGapSign === -1) {
    return `${payGap * -1}% higher than`;
  }
  if (payGapSign === 0) {
    return `equal to`;
  }
  return `${payGap}% lower than`;
};

function CompanyListItem({
  dataPoint,
  dataCategory,
  specificStat,
}: {
  dataPoint: string | boolean | number | undefined;
  dataCategory: string;
  specificStat: string;
}) {
  if (dataPoint == undefined) {
    return <span className="text-sm text-gray-500">Not Reported</span>;
  }

  if (specificStat === "payGap") {
    dataPoint = genderPayHelperFunction(dataPoint as number);
  }

  // const listItemTextMap = [
  //   {
  //     category: "lgbtqiaStats",
  //     content: {
  //       percentageEmployees: `${dataPoint}% are from an LGBTQIA+ background`,
  //       pronounPolicy: `They ${dataPoint ? `do` : `don't`} have a pronoun policy`,
  //       employeeNetwork: `They ${dataPoint ? `do` : `don't`} have an employee network for LGBTQIA+ employees`,
  //       genderNeutralBathrooms: `They ${dataPoint ? `do` : `don't`} have gender neutral bathrooms`,
  //     },
  //   },
  //   {
  //     category: "ethnicityStats",
  //     content: {
  //       percentageEmployees: `${dataPoint}% of employees are from a BAME background`,
  //       holidays: `They ${dataPoint ? `do` : `don't`} allow flexible working for religious reasons`,
  //       employeeNetwork: `They ${dataPoint ? `do` : `don't`} have an employee network for staff from BAME backgrounds`,
  //       prayerRoom: `They ${dataPoint ? `do` : `don't`} have a prayer room`,
  //     },
  //   },
  //   {
  //     category: "genderStats",
  //     content: {
  //       percentageEmployees: `${dataPoint}% of employees are women`,
  //       payGap: `Women's median hourly pay is ${dataPoint} men’s`,
  //       employeeNetwork: `They ${dataPoint ? `do` : `don't`} have an employee network for women`,
  //       equalMatPatLeave: `They ${dataPoint ? `do` : `don't`} have equal maternity and paternity leave`,
  //     },
  //   },
  //   {
  //     category: "disabilityStats",
  //     content: {
  //       percentageEmployees: `${dataPoint}% of employees report they have a disability`,
  //       disabilityTraining: `They ${dataPoint ? `do` : `don't`} provide disability training`,
  //       employeeNetwork: `They ${dataPoint ? `do` : `don't`}  have an employee network for employees with disabilities`,
  //       mentalHealthSupport: `They ${dataPoint ? `do` : `don't`} provide mental health support`,
  //     },
  //   },
  // ];
  const listItemTextMapSlimline = [
    {
      category: "lgbtqiaStats",
      content: {
        percentageEmployees: `${dataPoint}%`,
        pronounPolicy: `${dataPoint ? `In place ✅` : `No policy in place ❌`}`,
        employeeNetwork: `${dataPoint ? `Available ✅` : `No network available ❌`}`,
        genderNeutralBathrooms: `${dataPoint ? `Available ✅` : `Not available ❌`}`,
      },
    },
    {
      category: "ethnicityStats",
      content: {
        percentageEmployees: `${dataPoint}%`,
        holidays: `${dataPoint ? `Supported ✅` : `Not supported ❌`}`,
        employeeNetwork: `${dataPoint ? `Available ✅` : `No network available ❌`}`,
        prayerRoom: `${dataPoint ? `Available ✅` : `No prayer spaces available ❌`}`,
      },
    },
    {
      category: "genderStats",
      content: {
        percentageEmployees: `${dataPoint}%`,
        payGap: `Women's median hourly pay is ${dataPoint} men’s`,
        employeeNetwork: `${dataPoint ? `Available ✅` : `No network available ❌`}`,
        equalMatPatLeave: `${dataPoint ? `Equal policy ✅` : `Not equal policy ❌`}`,
      },
    },
    {
      category: "disabilityStats",
      content: {
        percentageEmployees: `${dataPoint}%`,
        disabilityTraining: `${dataPoint ? `Provided ✅` : `Not provided ❌`}`,
        employeeNetwork: `${dataPoint ? `Available ✅` : `No network available ❌`}`,
        mentalHealthSupport: `${dataPoint ? `Available ✅` : `No support available ❌`}`,
        workplaceAdjustments: `${dataPoint ? `Provided ✅` : `Not provided ❌`}`,
      },
    },
  ];

  const categoryContent = listItemTextMapSlimline.filter(
    (item) => item?.category == dataCategory,
  );

  if (!categoryContent)
    return <span className="text-sm text-gray-500">Data unavailable</span>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const textContent: any =
    // @ts-expect-error - to do
    categoryContent[0].content[specificStat as string];

  return <span className="text-sm text-gray-500">{textContent}</span>;
}

export default CompanyListItem;
