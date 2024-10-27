// components/stats/LGBTQStats.tsx
import { StatsBox } from "./StatsBox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CompanyData } from "@/lib/types";
import CompanyListItem from "../CompanyListItem";

interface LGBTQIAStatsProps {
  companyData: CompanyData;
}

export const LGBTQIAStats = ({ companyData }: LGBTQIAStatsProps) => {
  // change to show more categories
  const showAdditionalStats = false;
  return (
    <StatsBox
      title="LGBTQIA+ Inclusion"
      footerText="UK employers are not required to report LGBTQIA+ representation data"
    >
      <li className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
        <Accordion type="single" collapsible>
          <AccordionItem value="percentageEmployees" className="border-0">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center justify-between w-full pr-4">
                <span className="text-sm font-medium">
                  LGBTQIA+ Representation
                </span>
                {companyData.lgbtqiaStats?.percentageEmployees ? (
                  <span className="text-lg font-semibold text-primary">
                    {companyData.lgbtqiaStats.percentageEmployees}%
                  </span>
                ) : (
                  <span className="text-sm text-gray-500">Not reported</span>
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                The percentage of employees who have self-identified as LGBTQ+.
                This metric helps track workplace diversity and inclusion,
                though disclosure is always voluntary.
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
                  dataPoint={companyData.lgbtqiaStats?.employeeNetwork}
                  dataCategory={"lgbtqiaStats"}
                  specificStat={"employeeNetwork"}
                />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                An employee resource group for LGBTQ+ employees and allies,
                providing support, networking opportunities, and advocacy within
                the organization.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pronounPolicy" className="border-0">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center justify-between w-full pr-4">
                <span className="text-sm font-medium">Pronoun Policy</span>
                <CompanyListItem
                  dataPoint={companyData.lgbtqiaStats?.pronounPolicy}
                  dataCategory={"lgbtqiaStats"}
                  specificStat={"pronounPolicy"}
                />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                Guidelines and support for employees to share and respect gender
                pronouns in the workplace, including email signatures, name
                badges, and internal systems.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="genderNeutralBathrooms" className="border-0">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center justify-between w-full pr-4">
                <span className="text-sm font-medium">
                  Inclusive Facilities
                </span>
                <CompanyListItem
                  dataPoint={companyData.lgbtqiaStats?.genderNeutralBathrooms}
                  dataCategory={"lgbtqiaStats"}
                  specificStat={"genderNeutralBathrooms"}
                />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                Access to gender-neutral facilities, including bathrooms and
                changing rooms, ensuring comfort and accessibility for all
                employees regardless of gender identity.
              </p>
            </AccordionContent>
          </AccordionItem>
          {showAdditionalStats && (
            <>
              <AccordionItem value="partnerBenefits" className="border-0">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center justify-between w-full pr-4">
                    <span className="text-sm font-medium">
                      Partner Benefits
                    </span>
                    <span className="text-sm text-gray-500">
                      {companyData.lgbtqiaStats?.partnerBenefits
                        ? "Equal policy"
                        : "Not reported"}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                    Equal benefits coverage for same-sex partners and spouses,
                    including health insurance, leave policies, and other
                    company benefits.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="transitionSupport" className="border-0">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center justify-between w-full pr-4">
                    <span className="text-sm font-medium">
                      Transition Support
                    </span>
                    <span className="text-sm text-gray-500">
                      {companyData.lgbtqiaStats?.transitionSupport
                        ? "Available"
                        : "Not reported"}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                    Comprehensive support for transitioning employees, including
                    healthcare coverage, leave policies, and workplace
                    transition guidelines.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="prideParticipation" className="border-0">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center justify-between w-full pr-4">
                    <span className="text-sm font-medium">
                      Pride Participation
                    </span>
                    <span className="text-sm text-gray-500">
                      {companyData.lgbtqiaStats?.prideParticipation
                        ? "Active"
                        : "Not reported"}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                    Active participation in Pride events and LGBTQ+ initiatives,
                    demonstrating visible support for the LGBTQ+ community both
                    internally and externally.
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
