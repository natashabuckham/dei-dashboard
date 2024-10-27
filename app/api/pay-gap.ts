import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { CompanyData } from "@/lib/types";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const year = searchParams.get("year");
    const employerId = searchParams.get("employerId");

    const filePath = path.join(
      process.cwd(),
      "/lib/database/",
      `PayGapData${year}.json`,
    );

    const jsonData = await fs.promises.readFile(filePath, "utf8");
    const database: CompanyData[] = JSON.parse(jsonData);

    if (employerId) {
      const companyData = database.find(
        (item) => item.EmployerId.toString() === employerId,
      );
      return NextResponse.json({ data: companyData });
    }

    return NextResponse.json({ data: database });
  } catch (error: unknown) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
