interface payGapDataEntry {
    EmployerName: string;
    EmployerId: number;
    Address: string;
    DiffMeanHourlyPercent: string;
    DiffMedianHourlyPercent: string;
    CompanyLinkToGPGInfo: string;
    EmployerSize: string;
    CompanyName: string;
    Year: string;
}[]

type payGapData = payGapDataEntry[]