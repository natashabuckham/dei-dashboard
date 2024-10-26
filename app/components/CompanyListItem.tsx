// const getTextMapping = ({ myStat, category }: { myStat: string | boolean | number }) => {

//   return ();

function CompanyListItem({
  dataPoint,
  dataCategory,
  specificStat,
}: {
  dataPoint: string | boolean | number | undefined;
  dataCategory: string;
  specificStat: string;
}) {
  if (!dataPoint) return <li>Data not available</li>;

  const mapping = [
    {
      category: "genderStats",
      content: {
        percentageEmployees: `${dataPoint}% of employees are women`,
        payGap: `The gender pay gap is ${dataPoint}`,
        employeeNetwork: `They ${dataPoint ? `do` : `don't`} ${dataPoint}`,
      },
    },
  ];
  //   const myStatCategory = mapping[dataCategory];

  const output = mapping.filter((entry) => entry.category == dataCategory);
  const myContent: string = output[0].content[specificStat as string];
  console.log("content", typeof myContent);

  return <li>{myContent}</li>;
}

export default CompanyListItem;
