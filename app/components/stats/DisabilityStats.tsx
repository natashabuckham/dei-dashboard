// components/stats/DisabilityStats.tsx
import { StatsBox } from "./StatsBox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CompanyData } from "@/lib/types";
import CompanyListItem from "../CompanyListItem";

interface DisabilityStatsProps {
  companyData: CompanyData;
}

export const DisabilityStats = ({ companyData }: DisabilityStatsProps) => {
  // change to show more categories
  const showAdditionalStats = false;
  return (
    <StatsBox
      title="Disability & Accessibility"
      footerText="UK employers are encouraged to join the Disability Confident scheme"
    >
      <li className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
        <Accordion type="single" collapsible>
          <AccordionItem value="percentageEmployees" className="border-0">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center justify-between w-full pr-4">
                <span className="text-sm font-medium">
                  Disability Representation
                </span>
                <span className="text-sm text-gray-500">
                  {companyData.disabilityStats?.percentageEmployees
                    ? `${companyData.disabilityStats.percentageEmployees}%`
                    : "Not reported"}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                The percentage of employees who have declared a disability or
                long-term health condition. This metric helps track workplace
                diversity and inclusion.
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
                  dataPoint={companyData.disabilityStats?.employeeNetwork}
                  dataCategory={"disabilityStats"}
                  specificStat={"employeeNetwork"}
                />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                A support network or resource group specifically for employees
                with disabilities and their allies. These networks provide
                community, advocacy, and resources.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="workplaceAdjustments" className="border-0">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center justify-between w-full pr-4">
                <span className="text-sm font-medium">
                  Workplace Adjustments
                </span>
                <CompanyListItem
                  dataPoint={companyData.disabilityStats?.workplaceAdjustments}
                  dataCategory={"disabilityStats"}
                  specificStat={"workplaceAdjustments"}
                />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                Modifications to the work environment, equipment, or working
                arrangements to remove barriers for employees with disabilities.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="mentalHealthSupport" className="border-0">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center justify-between w-full pr-4">
                <span className="text-sm font-medium">
                  Mental Health Support
                </span>
                <CompanyListItem
                  dataPoint={companyData.disabilityStats?.mentalHealthSupport}
                  dataCategory={"disabilityStats"}
                  specificStat={"mentalHealthSupport"}
                />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                Access to mental health resources, counseling services, and
                support programs. This includes both preventative care and
                treatment options.
              </p>
            </AccordionContent>
          </AccordionItem>
          {showAdditionalStats && (
            <>
              <AccordionItem value="disabilityTraining" className="border-0">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center justify-between w-full pr-4">
                    <span className="text-sm font-medium">
                      Accessibility Training
                    </span>
                    <span className="text-sm text-gray-500">
                      {companyData.disabilityStats?.disabilityTraining
                        ? "Provided"
                        : "Not reported"}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                    Training programs that educate employees about disability
                    awareness, inclusive behaviors, and accessibility
                    considerations.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="flexibleWorking" className="border-0">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center justify-between w-full pr-4">
                    <span className="text-sm font-medium">
                      Flexible Working
                    </span>
                    <span className="text-sm text-gray-500">
                      {companyData.disabilityStats?.flexibleWorking
                        ? "Available"
                        : "Not reported"}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                    Options for flexible working arrangements, including
                    adjustable hours, remote work, and modified schedules.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="disabilityConfident" className="border-0">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center justify-between w-full pr-4">
                    <span className="text-sm font-medium">
                      Disability Confident
                    </span>
                    <span className="text-sm text-gray-500">
                      {companyData.disabilityStats?.disabilityConfident
                        ? "Certified"
                        : "Not reported"}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                    A UK government certification that recognizes employers
                    committed to recruiting, retaining, and developing disabled
                    employees.
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
