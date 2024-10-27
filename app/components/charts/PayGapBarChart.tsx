import * as React from "react";
import path from "path";
import fs from "fs";
import { BarChart } from "@mui/x-charts/BarChart";
import { CompanyData } from "@/lib/types";

const calcPoundEquiv = (payGapPercentage: number) => {
  return 100 - payGapPercentage;
};

const fetchData = async (year: string) => {
  const filePath = path.join(
    process.cwd(),
    "/lib/database/",
    `PayGapData${year}.json`,
  );

  const jsonData = await fs.promises.readFile(filePath, "utf8");
  const database: CompanyData[] = JSON.parse(jsonData);
  return database;
};

const PayGapBarChart = async ({
  companyData,
}: {
  companyData: CompanyData;
}) => {
  let payGap2122;
  let payGap2223;
  let mensPay2122;
  let mensPay2223;
  const payGap2324Percentage = Math.round(companyData.DiffMedianHourlyPercent);
  const payGap2324 = calcPoundEquiv(payGap2324Percentage);
  const mensPay2324 = 100;

  const data2122 = await fetchData("2122");
  const data2223 = await fetchData("2223");

  if (!data2122) {
    payGap2122 = 0;
    mensPay2122 = 0;
  }

  if (!data2223) {
    payGap2122 = 0;
    mensPay2223 = 0;
  }

  const payGap2122Percentage = data2122.find(
    (item: CompanyData) => item.EmployerId == companyData.EmployerId,
  )?.DiffMedianHourlyPercent;
  if (!payGap2122Percentage) {
    payGap2122 = 0;
    mensPay2122 = 0;
  } else {
    mensPay2122 = 100;
    payGap2122 = calcPoundEquiv(Math.round(payGap2122Percentage));
  }

  const payGap2223Percentage = data2223.find(
    (item: CompanyData) => item.EmployerId == companyData.EmployerId,
  )?.DiffMedianHourlyPercent;
  if (!payGap2223Percentage) {
    payGap2223 = 0;
    mensPay2223 = 0;
  } else {
    mensPay2223 = 100;
    payGap2223 = calcPoundEquiv(Math.round(payGap2223Percentage));
  }

  return (
    <>
      <p className="text-sm font-medium p-4">
        In this organisation, women earn {payGap2324}p for every £1 that men
        earn when comparing median hourly pay (23-24 data).
      </p>
      <BarChart
        series={[
          {
            data: [payGap2122, payGap2223, payGap2324],
            label: "Women's pay",
            id: "Women's pay",
          },
          {
            data: [mensPay2122, mensPay2223, mensPay2324],
            label: "Men's pay",
            id: "Men's pay",
          },
        ]}
        height={290}
        xAxis={[{ data: ["21-22", "22-23", "23-24"], scaleType: "band" }]}
        margin={{ top: 60, bottom: 30, left: 40, right: 10 }}
      />
    </>
  );
};
export default PayGapBarChart;
