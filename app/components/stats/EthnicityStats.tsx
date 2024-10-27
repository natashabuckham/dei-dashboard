import { StatsBox } from "./StatsBox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CompanyData } from "@/lib/types";
import CompanyListItem from "../CompanyListItem";

interface EthnicityStatsProps {
  companyData: CompanyData;
}

export const EthnicityStats = ({ companyData }: EthnicityStatsProps) => {
  // change to show more categories
  const showAdditionalStats = false;
  return (
    <StatsBox
      title="Ethnicity & Cultural Inclusion"
      footerText="UK employers are not legally required to publish diversity data"
    >
      <li className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
        <Accordion type="single" collapsible>
          <AccordionItem value="percentageEmployees" className="border-0">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center justify-between w-full pr-4">
                <span className="text-sm font-medium">Workforce Diversity</span>
                {companyData.ethnicityStats?.percentageEmployees ? (
                  <span className="text-lg font-semibold text-primary">
                    {companyData.ethnicityStats.percentageEmployees}%
                  </span>
                ) : (
                  <span className="text-sm text-gray-500">Not reported</span>
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                The percentage of employees from ethnic minority backgrounds.
                While reporting isn&apos;t mandatory in the UK, tracking this
                data helps organizations understand their diversity profile and
                set meaningful inclusion goals.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </li>

      <li className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
        <Accordion type="single" collapsible>
          <AccordionItem value="employeeNetwork" className="border-0">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center justify-between w-full pr-4">
                <span className="text-sm font-medium">Staff Network</span>
                <CompanyListItem
                  dataPoint={companyData.ethnicityStats?.employeeNetwork}
                  dataCategory={"ethnicityStats"}
                  specificStat={"employeeNetwork"}
                />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                Employee resource groups that celebrate different cultures and
                ethnicities, providing networking, mentoring, and professional
                development opportunities while promoting cultural awareness.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="prayerRoom" className="border-0">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center justify-between w-full pr-4">
                <span className="text-sm font-medium">Prayer Spaces</span>
                <CompanyListItem
                  dataPoint={companyData.ethnicityStats?.prayerRoom}
                  dataCategory={"ethnicityStats"}
                  specificStat={"prayerRoom"}
                />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                Dedicated, quiet spaces for prayer and reflection, demonstrating
                respect for religious practices and supporting employees of all
                faiths in the workplace.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="holidays" className="border-0">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center justify-between w-full pr-4">
                <span className="text-sm font-medium">
                  Religious Observance
                </span>
                <CompanyListItem
                  dataPoint={companyData.ethnicityStats?.holidays}
                  dataCategory={"ethnicityStats"}
                  specificStat={"holidays"}
                />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                Flexible policies allowing employees to observe religious
                holidays and festivals, including accommodations for fasting
                periods like Ramadan.
              </p>
            </AccordionContent>
          </AccordionItem>
          {/* {showAdditionalStats && (
            <>
              <AccordionItem value="culturalAwareness" className="border-0">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center justify-between w-full pr-4">
                    <span className="text-sm font-medium">
                      Cultural Training
                    </span>
                    <span className="text-sm text-gray-500">
                      {companyData.ethnicityStats?.culturalTraining
                        ? "Available"
                        : "Not reported"}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                    Training programs that promote cultural awareness, address
                    unconscious bias, and develop inclusive leadership skills
                    across the organization.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mentorship" className="border-0">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center justify-between w-full pr-4">
                    <span className="text-sm font-medium">
                      Targeted Mentoring
                    </span>
                    <span className="text-sm text-gray-500">
                      {companyData.ethnicityStats?.mentoringProgram
                        ? "Available"
                        : "Not reported"}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                    Specific mentoring initiatives designed to support career
                    development and progression for employees from
                    underrepresented ethnic backgrounds.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="celebrations" className="border-0">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center justify-between w-full pr-4">
                    <span className="text-sm font-medium">
                      Cultural Celebrations
                    </span>
                    <span className="text-sm text-gray-500">
                      {companyData.ethnicityStats?.culturalCelebrations
                        ? "Active"
                        : "Not reported"}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                    Regular events and initiatives celebrating different
                    cultures, including heritage months, cultural festivals, and
                    educational programs.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </>
          )} */}
        </Accordion>
      </li>
    </StatsBox>
  );
};
