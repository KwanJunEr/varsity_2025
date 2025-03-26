import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="flex flex-col items-center text-center space-y-4 p-6">
      <CardHeader className="flex flex-col items-center space-y-3">
        <div className="flex items-center justify-center mb-3 rounded-full bg-primary/10 p-4">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-md font-semibold leading-tight">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-muted-foreground leading-snug">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}
