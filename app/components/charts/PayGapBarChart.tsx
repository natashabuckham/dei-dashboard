import * as React from "react";

import { BarChart } from "@mui/x-charts/BarChart";
import { CompanyData } from "@/lib/types";

const calcPoundEquiv = (payGapPercentage: number) => {
  return 100 - payGapPercentage;
};

interface PayGapBarChartProps {
  companyData: CompanyData;
  historicalData2122?: CompanyData;
  historicalData2223?: CompanyData;
}

const PayGapBarChart = ({
  companyData,
  historicalData2122,
  historicalData2223,
}: PayGapBarChartProps) => {
  const payGap2324Percentage = Math.round(companyData.DiffMedianHourlyPercent);
  const payGap2324 = calcPoundEquiv(payGap2324Percentage);
  const mensPay2324 = 100;

  const payGap2122 = historicalData2122
    ? calcPoundEquiv(Math.round(historicalData2122.DiffMedianHourlyPercent))
    : 0;
  const mensPay2122 = historicalData2122 ? 100 : 0;

  const payGap2223 = historicalData2223
    ? calcPoundEquiv(Math.round(historicalData2223.DiffMedianHourlyPercent))
    : 0;
  const mensPay2223 = historicalData2223 ? 100 : 0;

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
