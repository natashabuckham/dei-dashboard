import { StatCategory } from "@/lib/types";

type MetricNames = {
  [K in StatCategory]: {
    [key: string]: string;
  };
};

const metricNames: MetricNames = {
  lgbtqiaStats: {
    percentageEmployees: "LGBTQIA+ Representation",
    pronounPolicy: "Pronoun Policy",
    employeeNetwork: "Pride Network",
    genderNeutralBathrooms: "Inclusive Facilities",
    partnerBenefits: "Partner Benefits",
    transitionSupport: "Transition Support",
    prideParticipation: "Pride Participation",
  },
  ethnicityStats: {
    percentageEmployees: "Ethnic Diversity",
    holidays: "Religious Observance",
    employeeNetwork: "Cultural Network",
    prayerRoom: "Prayer Spaces",
  },
  genderStats: {
    percentageEmployees: "Gender Distribution",
    payGap: "Gender Pay Gap",
    employeeNetwork: "Women's Network",
    equalMatPatLeave: "Parental Leave",
    returnToWorkSupport: "Return to Work Support",
    womenInLeadership: "Leadership Roles",
    mentorshipProgram: "Mentorship Program",
  },
  disabilityStats: {
    percentageEmployees: "Disability Representation",
    employeeNetwork: "Support Network",
    workplaceAdjustments: "Workplace Adjustments",
    mentalHealthSupport: "Mental Health Support",
    disabilityTraining: "Accessibility Training",
    flexibleWorking: "Flexible Working",
    disabilityConfident: "Disability Confident",
  },
};

export const getMetricName = (
  specificStat: string,
  dataCategory: StatCategory,
): string => {
  return metricNames[dataCategory]?.[specificStat] || specificStat;
};
