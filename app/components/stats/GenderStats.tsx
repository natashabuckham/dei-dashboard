"use client";

import { StatsBox } from "./StatsBox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CompanyListItem from "../CompanyListItem";
import {
  showRepresentationPercentage,
  showAdditionalStats,
} from "../../../utils/flags";
import { useCompany } from "@/context/CompanyContext";

export const GenderStats = () => {
  const { companyData } = useCompany();

  return (
    <StatsBox
      title="Gender Equality"
      footerText="UK employers are required to report gender pay gap data annually"
    >
      {showRepresentationPercentage && (
        <li className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
          <Accordion type="single" collapsible>
            <AccordionItem value="percentageEmployees" className="border-0">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center justify-between w-full pr-4">
                  <span className="text-sm font-medium">
                    Gender Distribution
                  </span>
                  {companyData.genderStats?.percentageEmployees ? (
                    <span className="text-lg font-semibold text-primary">
                      {companyData.genderStats.percentageEmployees}% women
                    </span>
                  ) : (
                    <span className="text-sm text-gray-500">Not reported</span>
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                  The percentage of women in the workforce. This key metric
                  helps track gender representation and progress toward gender
                  balance across the organization.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </li>
      )}

      <li className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
        <Accordion type="single" collapsible>
          <AccordionItem value="payGap" className="border-0">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center justify-between w-full pr-4">
                <span className="text-sm font-medium">Gender Pay Gap</span>
                <CompanyListItem
                  dataPoint={companyData.DiffMedianHourlyPercent}
                  dataCategory={"genderStats"}
                  specificStat={"payGap"}
                />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                The difference between average hourly earnings of men and women.
                UK employers are legally required to report this data annually
                to track progress in pay equality.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="employeeNetwork" className="border-0">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center justify-between w-full pr-4">
                <span className="text-sm font-medium">Staff Network</span>
                <CompanyListItem
                  dataPoint={companyData.genderStats?.employeeNetwork}
                  dataCategory={"genderStats"}
                  specificStat={"employeeNetwork"}
                />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                A dedicated network for women employees providing mentorship,
                professional development, and networking opportunities to
                support career advancement.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="equalMatPatLeave" className="border-0">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center justify-between w-full pr-4">
                <span className="text-sm font-medium">Parental Leave</span>
                <CompanyListItem
                  dataPoint={companyData.genderStats?.equalMatPatLeave}
                  dataCategory={"genderStats"}
                  specificStat={"equalMatPatLeave"}
                />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                Equal maternity and paternity leave policies that support both
                parents, helping to balance caring responsibilities and career
                development.
              </p>
            </AccordionContent>
          </AccordionItem>

          {showAdditionalStats && (
            <>
              <AccordionItem value="returnToWorkSupport" className="border-0">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center justify-between w-full pr-4">
                    <span className="text-sm font-medium">Return-to-Work</span>
                    <CompanyListItem
                      dataPoint={companyData.genderStats?.returnToWorkSupport}
                      dataCategory="genderStats"
                      specificStat="returnToWorkSupport"
                    />
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                    Programs and policies supporting employees returning from
                    parental leave, including flexible working arrangements,
                    phased return, and ongoing support.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="womenInLeadership" className="border-0">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center justify-between w-full pr-4">
                    <span className="text-sm font-medium">
                      Leadership Roles
                    </span>
                    <CompanyListItem
                      dataPoint={companyData.genderStats?.womenInLeadership}
                      dataCategory="genderStats"
                      specificStat="womenInLeadership"
                    />
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                    The percentage of women in senior leadership positions,
                    indicating progress in gender diversity at decision-making
                    levels of the organization.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mentorshipProgram" className="border-0">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center justify-between w-full pr-4">
                    <span className="text-sm font-medium">
                      Mentorship Program
                    </span>
                    <CompanyListItem
                      dataPoint={companyData.genderStats?.mentorshipProgram}
                      dataCategory="genderStats"
                      specificStat="mentorshipProgram"
                    />
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                    Structured mentoring programs designed to support
                    women&apos;s career development and progression into
                    leadership roles.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </>
          )}
        </Accordion>
      </li>
    </StatsBox>
  );
};
