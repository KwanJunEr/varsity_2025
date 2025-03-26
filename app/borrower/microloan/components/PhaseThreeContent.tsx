import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Building, DollarSign, TrendingUp, Calendar, BarChart3 } from "lucide-react"

export default function PhaseThreeContent() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Phase 3: Business Operations</CardTitle>
            <CardDescription>This phase covers essential business operations expenses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Building className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="font-medium">Operations Coverage</p>
                  <p className="text-sm text-muted-foreground">
                    This phase covers critical business operations expenses
                  </p>
                  <p className="text-sm">Including marketing, inventory expansion, and facility improvements</p>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Phase Status</h4>
                <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                  <Calendar className="h-5 w-5" />
                  <span>Upcoming</span>
                </div>
                <p className="text-sm">
                  This phase will be unlocked after completion of Phase 2. Your payment of $5,000 will be due 60 days
                  from now.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Operational Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1.5 rounded-full mr-2 mt-0.5">
                      <span className="text-xs font-bold text-primary">1</span>
                    </div>
                    <div>
                      <p className="text-sm">Expanded inventory to meet growing demand</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1.5 rounded-full mr-2 mt-0.5">
                      <span className="text-xs font-bold text-primary">2</span>
                    </div>
                    <div>
                      <p className="text-sm">Enhanced marketing to reach new customer segments</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1.5 rounded-full mr-2 mt-0.5">
                      <span className="text-xs font-bold text-primary">3</span>
                    </div>
                    <div>
                      <p className="text-sm">Facility improvements to increase efficiency</p>
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
            <CardDescription>How Phase 3 will affect your business finances</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Market Reach</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold">+40%</div>
                    </div>
                    <Progress value={40} className="h-2 mt-2" />
                    <p className="text-xs text-muted-foreground mt-2">Projected increase in customer base</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Revenue Growth</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+25%</div>
                    <Progress value={25} className="h-2 mt-2" />
                    <p className="text-xs text-muted-foreground mt-2">Projected quarterly revenue increase</p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Financial Projections</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <BarChart3 className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Quarterly Revenue Increase</p>
                      <p className="text-sm text-muted-foreground">Projected $15,000 additional quarterly revenue</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <BarChart3 className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Profit Margin Improvement</p>
                      <p className="text-sm text-muted-foreground">2.5% increase in overall profit margins</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <BarChart3 className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Business Valuation</p>
                      <p className="text-sm text-muted-foreground">Estimated 30% increase in business valuation</p>
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
            <CardDescription>Recommended approach for Phase 3 repayment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-primary/5 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Recommended Strategy</h4>
                <p className="text-sm">
                  Begin saving now by allocating 5% of current revenue to prepare for Phase 3 payment, then increase to
                  10% after Phase 2 is complete.
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
                      <p className="text-sm font-medium">Early Preparation</p>
                      <p className="text-xs text-muted-foreground">Start setting aside funds now (5% of revenue)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1.5 rounded-full mr-2 mt-0.5">
                      <span className="text-xs font-bold text-primary">2</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Leverage Phase 2 Benefits</p>
                      <p className="text-xs text-muted-foreground">Use equipment efficiency gains to fund Phase 3</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1.5 rounded-full mr-2 mt-0.5">
                      <span className="text-xs font-bold text-primary">3</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Reinvestment Balance</p>
                      <p className="text-xs text-muted-foreground">
                        Balance loan repayment with operational investments
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Savings Timeline</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Now - Phase 2 completion:</span>
                    <span className="font-medium">$1,500 (5% of revenue)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>After Phase 2 - Month 1:</span>
                    <span className="font-medium">$2,000 (10% of revenue)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Month 2:</span>
                    <span className="font-medium">$1,500 (remaining balance)</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue Generation</CardTitle>
            <CardDescription>How to earn money to cover Phase 3 repayment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Marketing Campaign ROI</p>
                    <p className="text-sm">
                      The enhanced marketing funded by Phase 3 is projected to bring in 15-20 new customers per month,
                      generating approximately $6,000 in additional monthly revenue.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Expanded Product Line</p>
                    <p className="text-sm">
                      Inventory expansion will allow you to offer 5 new product variations, increasing average order
                      value by 25% and generating an estimated $3,500 in additional monthly revenue.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Building className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Operational Efficiency</p>
                    <p className="text-sm">
                      Facility improvements will reduce operational costs by 15%, saving approximately $2,000 monthly
                      and improving delivery times by 30%.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Total Projected Monthly Benefit</h4>
                <p className="text-xl font-bold">$11,500</p>
                <p className="text-sm mt-1">
                  This significantly exceeds your Phase 3 repayment amount of $5,000, providing substantial additional
                  revenue for business growth and future investments.
                </p>
              </div>

              <Button className="w-full">
                View Business Growth Roadmap <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

