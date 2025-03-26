"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Legend } from "recharts"

import { Card, CardContent } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    name: "Before Loan",
    savings: 25,
    income: 40,
    assets: 30,
    creditScore: 45,
  },
  {
    name: "After Loan",
    savings: 45,
    income: 65,
    assets: 50,
    creditScore: 70,
  },
]

export default function FinancialHealthImpact() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold">+10%</div>
              <p className="text-xs text-muted-foreground">Savings Increase</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold">-5%</div>
              <p className="text-xs text-muted-foreground">Income Decrease</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold">+10%</div>
              <p className="text-xs text-muted-foreground">Asset Accumulation</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold">+10%</div>
              <p className="text-xs text-muted-foreground">Credit Score Improvement</p>
            </div>
          </CardContent>
        </Card>
      </div>


      <div className="text-sm text-muted-foreground">
        <h3 className="font-medium mb-2">How Financial Health is Measured</h3>
        <p className="mb-2">Our financial health assessment considers multiple factors:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Savings rate and emergency fund adequacy</li>
          <li>Income stability and growth</li>
          <li>Asset accumulation and diversification</li>
          <li>Credit score and debt management</li>
          <li>Financial literacy and planning</li>
        </ul>
        <p className="mt-2">
          Borrowers typically see significant improvements across all metrics within 12-18 months of receiving a
          microloan, with the most substantial gains in asset accumulation and savings capacity.
        </p>
      </div>
    </div>
  )
}

