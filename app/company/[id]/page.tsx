// app/company/[id]/page.tsx
import path from "path";
import fs from "fs";
import { CompanyData } from "@/lib/types";
import { CompanyProvider } from "@/context/CompanyContext";
import CompanyPageContext from "@/app/components/CompanyPageContext";

const fetchData = async (year: string = "") => {
  const fileName = year ? `PayGapData${year}.json` : "PayGapData.json";
  const filePath = path.join(process.cwd(), "/lib/database/", fileName);
  const jsonData = await fs.promises.readFile(filePath, "utf8");
  const database: CompanyData[] = JSON.parse(jsonData);
  return database;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Page(props: any) {
  const id = await props.params.id;

  const [currentData, data2122, data2223] = await Promise.all([
    fetchData(),
    fetchData("2122"),
    fetchData("2223"),
  ]);

  const companyData = currentData.find(
    (item: CompanyData) => item.EmployerId.toString() === id,
  );

  const historicalData2122 = data2122?.find(
    (item: CompanyData) => item.EmployerId.toString() === id,
  );

  const historicalData2223 = data2223?.find(
    (item: CompanyData) => item.EmployerId.toString() === id,
  );

  if (!companyData) {
    return <p>Company not found</p>;
  }

  return (
    <CompanyProvider
      companyData={companyData}
      historicalData2122={historicalData2122}
      historicalData2223={historicalData2223}
    >
      <div className="max-w-6xl mx-auto p-4 min-h-screen">
        <CompanyPageContext />
      </div>
    </CompanyProvider>
  );
}
