// components/PhaseContent.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface PhaseContentProps {
  index: number;
  title: string;
  description: string;
  objective: string;
  amount: number;
  dueInDays: number;
  isCompleted: boolean;
}

export default function PhaseContent({
  index,
  title,
  description,
  objective,
  amount,
  dueInDays,
  isCompleted
}: PhaseContentProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Phase {index + 1}: {title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">{objective}</p>
          <p className="text-sm">Amount: ${amount.toLocaleString()}</p>
          <p className="text-sm">Due in {dueInDays} days</p>
          <p className={`mt-2 font-bold ${isCompleted ? "text-green-600" : "text-yellow-600"}`}>
            {isCompleted ? "✅ Completed" : "⏳ In Progress"}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
