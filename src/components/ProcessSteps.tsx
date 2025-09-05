import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProcessSteps = () => {
  const steps = [
    {
      number: 1,
      title: "Individual Registration",
      description: "(closes on 15 Sept)",
      color: "bg-step-blue text-official-blue"
    },
    {
      number: 2,
      title: "Form a Team of 6 members",
      description: "(atleast 1 female team member) - Use Team Discovery form registration to find teammates",
      color: "bg-step-blue text-official-blue"
    },
    {
      number: 3,
      title: "Select Problem Statement",
      description: "Choose a problem statement from SIH",
      color: "bg-step-blue text-official-blue"
    },
    {
      number: 4,
      title: "Kickoff & Mentorship",
      description: "Meet your team & assigned mentor",
      color: "bg-step-blue text-official-blue"
    },
    {
      number: 5,
      title: "Idea Development",
      description: "Guided sessions + mentor support",
      color: "bg-step-blue text-official-blue"
    },
    {
      number: 6,
      title: "Final Pitching (Ideathon)",
      description: "Pitch your solution & get shortlisted for next level of SIH",
      color: "bg-step-blue text-official-blue"
    }
  ];

  return (
    <Card className="w-full max-w-md bg-card-gradient">
      <CardHeader>
        <CardTitle className="text-xl text-official-blue">
          SIH 2025 Internals Process
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-4">
              <div className={`flex-shrink-0 w-8 h-8 rounded-full ${step.color} flex items-center justify-center font-bold text-sm`}>
                {step.number}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-foreground">
                  {step.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProcessSteps;