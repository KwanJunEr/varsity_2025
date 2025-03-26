"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DollarSign, TrendingUp, TrendingDown, RefreshCw } from "lucide-react"

export default function CashFlowSimulation() {
  const [monthlyIncome, setMonthlyIncome] = useState(3000)
  const [monthlyExpenses, setMonthlyExpenses] = useState(2000)
  const [loanPayment, setLoanPayment] = useState(250)

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Cash Flow Simulation</CardTitle>
          <CardDescription>Adjust parameters to see how different scenarios affect your finances</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <Label>Monthly Income</Label>
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                <Input
                  type="number"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                  min={0}
                  step={100}
                />
              </div>
              <Slider
                value={[monthlyIncome]}
                min={1000}
                max={10000}
                step={100}
                onValueChange={(value: any) => setMonthlyIncome(value[0])}
              />
            </div>

            <div className="space-y-4">
              <Label>Monthly Expenses</Label>
              <div className="flex items-center gap-2">
                <TrendingDown className="h-4 w-4 text-muted-foreground" />
                <Input
                  type="number"
                  value={monthlyExpenses}
                  onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                  min={0}
                  step={100}
                />
              </div>
              <Slider
                value={[monthlyExpenses]}
                min={500}
                max={8000}
                step={100}
                onValueChange={(value : any) => setMonthlyExpenses(value[0])}
              />
            </div>

            <div className="space-y-4">
              <Label>Loan Payment</Label>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
                <Input
                  type="number"
                  value={loanPayment}
                  onChange={(e) => setLoanPayment(Number(e.target.value))}
                  min={250}
                  step={50}
                />
              </div>
              <Slider
                value={[loanPayment]}
                min={250}
                max={1000}
                step={50}
                onValueChange={(value : any) => setLoanPayment(value[0])}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Monthly Cash Flow</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Income</p>
                    <p className="text-lg font-medium">${monthlyIncome.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Expenses</p>
                    <p className="text-lg font-medium">${monthlyExpenses.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Loan Payment</p>
                    <p className="text-lg font-medium">${loanPayment.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Net Cash Flow</p>
                    <p
                      className={`text-lg font-medium ${monthlyIncome - monthlyExpenses - loanPayment >= 0 ? "text-green-600" : "text-red-600"}`}
                    >
                      ${(monthlyIncome - monthlyExpenses - loanPayment).toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="mt-6 h-[200px] flex items-end justify-between gap-2">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="relative flex flex-col items-center">
                      <div
                        className="w-12 bg-primary/80 rounded-t"
                        style={{
                          height: `${Math.min(100, Math.max(10, ((monthlyIncome - monthlyExpenses - loanPayment) / monthlyIncome) * 100 + i * 2))}%`,
                        }}
                      ></div>
                      <span className="text-xs text-muted-foreground mt-2">
                        {new Date(2025, i).toLocaleString("default", { month: "short" })}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Loan Payoff Projection</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">Payoff Date</p>
                      <p className="text-lg font-medium">
                        {new Date(Date.now() + (3250 / loanPayment) * 30 * 24 * 60 * 60 * 1000).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                          },
                        )}
                      </p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">Months Remaining</p>
                      <p className="text-lg font-medium">{Math.ceil(3250 / loanPayment)}</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">Total Interest</p>
                      <p className="text-lg font-medium">
                        ${(loanPayment * Math.ceil(3250 / loanPayment) - 3250).toFixed(2)}
                      </p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">Total Payments</p>
                      <p className="text-lg font-medium">${(loanPayment * Math.ceil(3250 / loanPayment)).toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="h-[120px] flex items-end justify-between gap-2">
                    {[...Array(Math.min(12, Math.ceil(3250 / loanPayment)))].map((_, i) => (
                      <div key={i} className="relative flex flex-col items-center">
                        <div
                          className="w-8 bg-primary/80 rounded-t"
                          style={{
                            height: `${Math.min(100, Math.max(10, 100 - i * (100 / Math.ceil(3250 / loanPayment))))}%`,
                          }}
                        ></div>
                        <span className="text-xs text-muted-foreground mt-2">{i + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            <RefreshCw className="mr-2 h-4 w-4" />
            Reset to Default Values
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>What-If Scenarios</CardTitle>
          <CardDescription>See how different life events might impact your loan repayment</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="income-increase">
            <TabsList className="grid grid-cols-1 sm:grid-cols-3">
              <TabsTrigger value="income-increase">Income Increase</TabsTrigger>
              <TabsTrigger value="emergency">Emergency Expense</TabsTrigger>
              <TabsTrigger value="job-loss">Job Loss</TabsTrigger>
            </TabsList>
            <TabsContent value="income-increase" className="space-y-4 pt-4">
              <p>If your income increases by 20% ($600/month):</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>You could increase your monthly payment to $450</li>
                <li>This would reduce your loan term by 12 months</li>
                <li>You would save approximately $320 in interest</li>
                <li>Your emergency fund could grow by $400/month</li>
              </ul>
              <Button>Apply This Scenario</Button>
            </TabsContent>
            <TabsContent value="emergency" className="space-y-4 pt-4">
              <p>If you face an emergency expense of $1,000:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>You could temporarily reduce your payment to the minimum $250</li>
                <li>This would extend your loan term by 1 month</li>
                <li>You would pay approximately $20 more in interest</li>
                <li>You could recover within 3 months by saving the cash flow difference</li>
              </ul>
              <Button>Apply This Scenario</Button>
            </TabsContent>
            <TabsContent value="job-loss" className="space-y-4 pt-4">
              <p>If you experience temporary job loss (3 months):</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>You would need approximately $750 in savings for minimum payments</li>
                <li>Consider requesting a hardship program from the lender</li>
                <li>Your loan term would extend by 3-4 months</li>
                <li>You would pay approximately $80 more in interest</li>
              </ul>
              <Button>Apply This Scenario</Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

