import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, ArrowUpRight, CheckCircle, Users, DollarSign, TrendingUp } from "lucide-react"

interface PhaseOneContentProps {
  currentPhase: number
}

export default function PhaseOneContent({ currentPhase }: PhaseOneContentProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Phase 1: Employee Payroll</CardTitle>
            <CardDescription>This phase covers your employee payroll expenses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="font-medium">Payroll Coverage</p>
                  <p className="text-sm text-muted-foreground">
                    This phase covered payroll for 4 employees for 1 month
                  </p>
                  <p className="text-sm">Including salaries, benefits, and payroll taxes</p>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Phase Status</h4>
                <div className="flex items-center space-x-2 text-green-600 mb-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Completed</span>
                </div>
                <p className="text-sm">
                  You've successfully repaid the first phase of your microloan. This has positively impacted your
                  business credit score and unlocked access to Phase 2 funding.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Financial Health Impact</CardTitle>
            <CardDescription>How Phase 1 affected your business finances</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Employee Retention</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold">100%</div>
                      <div className="flex items-center text-green-500">
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                        <span className="text-sm">+25%</span>
                      </div>
                    </div>
                    <Progress value={100} className="h-2 mt-2" />
                    <p className="text-xs text-muted-foreground mt-2">All employees retained during cash flow gap</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Productivity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold">92%</div>
                      <div className="flex items-center text-green-500">
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                        <span className="text-sm">+12%</span>
                      </div>
                    </div>
                    <Progress value={92} className="h-2 mt-2" />
                    <p className="text-xs text-muted-foreground mt-2">
                      Team productivity increased with stable payroll
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Financial Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm">Avoided costly employee turnover (estimated savings: $12,000)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm">Maintained service quality and customer satisfaction</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm">Preserved team morale during seasonal revenue dip</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Repayment Strategy</CardTitle>
            <CardDescription>How you successfully repaid Phase 1</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-primary/5 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Successful Strategy Used</h4>
                <p className="text-sm">
                  You allocated 15% of your monthly revenue over 2 months to repay this phase, prioritizing it as an
                  essential business expense.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Key Actions Taken</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1.5 rounded-full mr-2 mt-0.5">
                      <span className="text-xs font-bold text-primary">1</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Revenue Allocation</p>
                      <p className="text-xs text-muted-foreground">
                        Set aside 15% of all incoming payments automatically
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1.5 rounded-full mr-2 mt-0.5">
                      <span className="text-xs font-bold text-primary">2</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Expense Reduction</p>
                      <p className="text-xs text-muted-foreground">Temporarily reduced non-essential expenses by 10%</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1.5 rounded-full mr-2 mt-0.5">
                      <span className="text-xs font-bold text-primary">3</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Early Payment</p>
                      <p className="text-xs text-muted-foreground">
                        Paid 5 days before deadline to improve credit rating
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue Generation</CardTitle>
            <CardDescription>How you earned money to cover Phase 1 repayment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Client Retainer Increase</p>
                    <p className="text-sm">
                      Negotiated a 5% increase on three major client retainers, generating an additional $2,200 in
                      monthly revenue.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Productivity Improvements</p>
                    <p className="text-sm">
                      Implemented new project management software that increased team capacity by 15%, allowing you to
                      take on two additional small projects worth $1,800.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Referral Program</p>
                    <p className="text-sm">
                      Launched a client referral program that brought in one new client worth $1,200 in the first month.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Total Additional Revenue</h4>
                <p className="text-xl font-bold">$5,200</p>
                <p className="text-sm mt-1">
                  This exceeded your Phase 1 repayment amount of $5,000, allowing you to build a small buffer for Phase
                  2.
                </p>
              </div>

              <Button className="w-full">
                View Detailed Revenue Report <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

