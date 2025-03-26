import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, AlertCircle, Wrench, DollarSign, TrendingUp, BarChart } from "lucide-react"

export default function PhaseTwoContent() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Phase 2: Equipment Purchase</CardTitle>
            <CardDescription>This phase covers essential equipment for your business</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Wrench className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="font-medium">Equipment Coverage</p>
                  <p className="text-sm text-muted-foreground">
                    This phase covers the purchase of new production equipment
                  </p>
                  <p className="text-sm">Including installation, training, and initial maintenance</p>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Phase Status</h4>
                <div className="flex items-center space-x-2 text-amber-600 mb-2">
                  <AlertCircle className="h-5 w-5" />
                  <span>In Progress</span>
                </div>
                <p className="text-sm">
                  Your next payment of $5,000 is due in 30 days. This payment will unlock the final phase of your
                  microloan.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Equipment Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1.5 rounded-full mr-2 mt-0.5">
                      <span className="text-xs font-bold text-primary">1</span>
                    </div>
                    <div>
                      <p className="text-sm">Increases production capacity by 35%</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1.5 rounded-full mr-2 mt-0.5">
                      <span className="text-xs font-bold text-primary">2</span>
                    </div>
                    <div>
                      <p className="text-sm">Reduces production costs by 20% per unit</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1.5 rounded-full mr-2 mt-0.5">
                      <span className="text-xs font-bold text-primary">3</span>
                    </div>
                    <div>
                      <p className="text-sm">Improves product quality and consistency</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Financial Health Projection</CardTitle>
            <CardDescription>How Phase 2 will affect your business finances</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Production Capacity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold">+35%</div>
                    </div>
                    <Progress value={35} className="h-2 mt-2" />
                    <p className="text-xs text-muted-foreground mt-2">Projected increase with new equipment</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">ROI Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">4.5 mo</div>
                    <Progress value={45} max={12} className="h-2 mt-2" />
                    <p className="text-xs text-muted-foreground mt-2">Equipment will pay for itself in 4.5 months</p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Financial Projections</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <BarChart className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Monthly Revenue Increase</p>
                      <p className="text-sm text-muted-foreground">Projected $3,200 additional monthly revenue</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <BarChart className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Cost Reduction</p>
                      <p className="text-sm text-muted-foreground">$1,800 monthly savings on production costs</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <BarChart className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Net Monthly Benefit</p>
                      <p className="text-sm text-muted-foreground">$5,000 combined revenue increase and cost savings</p>
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
            <CardDescription>Recommended approach for Phase 2 repayment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-primary/5 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Recommended Strategy</h4>
                <p className="text-sm">
                  Allocate the first month's cost savings and 50% of additional revenue from the new equipment directly
                  to repayment.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Action Plan</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1.5 rounded-full mr-2 mt-0.5">
                      <span className="text-xs font-bold text-primary">1</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Set Up Dedicated Account</p>
                      <p className="text-xs text-muted-foreground">
                        Create a separate account for equipment-generated revenue
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1.5 rounded-full mr-2 mt-0.5">
                      <span className="text-xs font-bold text-primary">2</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Weekly Deposits</p>
                      <p className="text-xs text-muted-foreground">
                        Transfer $1,250 weekly to ensure full payment by deadline
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1.5 rounded-full mr-2 mt-0.5">
                      <span className="text-xs font-bold text-primary">3</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Track Equipment ROI</p>
                      <p className="text-xs text-muted-foreground">
                        Monitor actual vs. projected returns to adjust if needed
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Payment Schedule</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Week 1:</span>
                    <span className="font-medium">$1,250</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Week 2:</span>
                    <span className="font-medium">$1,250</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Week 3:</span>
                    <span className="font-medium">$1,250</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Week 4:</span>
                    <span className="font-medium">$1,250</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue Generation</CardTitle>
            <CardDescription>How to earn money to cover Phase 2 repayment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Increased Production Capacity</p>
                    <p className="text-sm">
                      Take on 3-5 additional orders per week that you previously had to decline due to capacity
                      constraints. Potential revenue: $2,800/month.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Production Cost Savings</p>
                    <p className="text-sm">
                      The new equipment reduces material waste by 15% and energy consumption by 20%, resulting in direct
                      monthly savings of $1,800.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Wrench className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">New Product Offerings</p>
                    <p className="text-sm">
                      The equipment enables you to offer 2 new premium product variations with 30% higher margins.
                      Potential additional revenue: $1,500/month.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Total Projected Monthly Benefit</h4>
                <p className="text-xl font-bold">$6,100</p>
                <p className="text-sm mt-1">
                  This exceeds your Phase 2 repayment amount of $5,000, providing a buffer and allowing you to start
                  saving for Phase 3.
                </p>
              </div>

              <Button className="w-full">
                Download Equipment ROI Calculator <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

