const CompanyProfile = () => {

const angelCorp = {
    companyName: "Angel Corp",
    overview: "Angel Corp provides a great employee experience for most groups. They have excellent provisions for BAME people, people with disabilites, and women. They are falling behind on LGBTQ+ inclusion.",
    ethnicityRanking: 5,
    genderRanking: 10,
    lgbtqRanking: 2,
    disabilityRanking: 7,
    ethnicityStats: {percentageEmployees: 10, employeeNetwork: true, prayerRoom: true, holidays: true},
    genderStats: {percentageEmployees: 50, payGap: 0, employeeNetwork: true, equalMatPatLeave: true},
    lgbtqStats: {percentageEmployees: 2, employeeNetwork: false, pronounPolicy: false, genderNeutralBathrooms: false},
    disabilityStats: {percentageEmployees: 15, employeeNetwork: true, disabilityTraining: true, mentalHealthSupport: true}
}
    return (
        <div>
            <h1 className="text-center p-4">{angelCorp.companyName}</h1>
            <div className="text-center p-4">
                <p>Company Overview: {angelCorp.overview}</p>
            </div>
            <div className="grid grid-cols-2">
                <div className="houseContainer">
                    <div className="grid grid-cols-2 gap-4 w-64 h-64">
                        <div className="bg-orange-500 rounded-lg w-full h-full"></div>
                        <div className="bg-green-600 rounded-lg w-full h-full"></div>
                        <div className="bg-red-500 rounded-lg w-full h-full"></div>
                        <div className="bg-green-400 rounded-lg w-full h-full"></div>
                    </div>
                </div>
                <div className="statsBox ethnicityStats">
                    <h3>Ethnicity</h3>
                    <ul>
                        <li>{angelCorp.ethnicityStats.percentageEmployees}% of employees are from a BAME background</li>
                        <li>{angelCorp.companyName} {angelCorp.ethnicityStats.employeeNetwork ? `do` : `don't`} have an employee network for staff from BAME backgrounds</li>
                        <li>They {angelCorp.ethnicityStats.prayerRoom ? `do` : `don't`} have a prayer room and {angelCorp.ethnicityStats.holidays ? `do` : `don't`} allow flexible working for religious reasons</li>
                    </ul>
                </div>

                <div className="statsBox genderStats">
                    <h3>Gender</h3>
                    <ul>
                        <li>{angelCorp.genderStats.percentageEmployees}% of employees are women</li>
                        <li>The gender pay gap is {angelCorp.genderStats.payGap}%</li>
                        <li>{angelCorp.companyName} {angelCorp.genderStats.employeeNetwork ? `do` : `don't`} have an employee network for women</li>
                        <li>They {angelCorp.genderStats.equalMatPatLeave ? `do` : `don't`} have equal maternity and paternity leave</li>
                    </ul>
                </div>

                <div className="statsBox lgbtqStats">
                    <h3>LGBTQIA+</h3>
                    <ul>
                        <li>{angelCorp.lgbtqStats.percentageEmployees}% are from an LGBTQIA+ background</li>
                        <li>{angelCorp.companyName} {angelCorp.lgbtqStats.employeeNetwork ? `do` : `don't`} have an employee network for LGBTQIA+ employees</li>
                        <li>They {angelCorp.lgbtqStats.pronounPolicy ? `do` : `don't`} have a pronoun policy and they {angelCorp.lgbtqStats.genderNeutralBathrooms ? `do` : `don't`} have gender neutral bathrooms</li>
                    </ul>
                </div>

                <div className="statsBox disabilityStats">
                    <h3>Disabilities</h3>
                    <ul>
                        <li>{angelCorp.disabilityStats.percentageEmployees}% of employees report they have a disability</li>
                        <li>{angelCorp.companyName} {angelCorp.disabilityStats.employeeNetwork ? `do` : `don't`} have an employee network for employees with disability</li>
                        <li>They {angelCorp.disabilityStats.disabilityTraining ? `do` : `don't`} provide disability training and they {angelCorp.disabilityStats.mentalHealthSupport ? `do` : `don't`} provide mental health support</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CompanyProfile;