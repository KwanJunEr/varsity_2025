import Link from "next/link"
import { BadgeInfo } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"


import BorrowerStats from "./components/BorrowerStats"
import LoanRankings from "./components/LoanRankings"
import FinancialHealthImpact from "./components/FinancialHealthImpact"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 px-10">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl mt-10">
              Microloan Analytics Dashboard
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Track microloan performance, borrower statistics, and financial health impacts
            </p>
          </div>

          <div className="grid gap-6">
           

            <Card>
              <CardHeader>
                <CardTitle>Borrower Financial Health Statistics</CardTitle>
                <CardDescription>Key metrics on borrower financial status</CardDescription>
              </CardHeader>
              <CardContent>
                <BorrowerStats />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div>
                  <CardTitle>Microloan Rankings</CardTitle>
                  <CardDescription>Performance ranking of available microloans</CardDescription>
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <BadgeInfo className="h-4 w-4" />
                        <span className="sr-only">Risk score info</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>
                        Risk scores are calculated based on historical repayment rates, borrower credit history, loan
                        purpose, and regional economic factors.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardHeader>
              <CardContent>
                <LoanRankings />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Financial Health Impact</CardTitle>
                <CardDescription>Post-borrowing financial health indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <FinancialHealthImpact />
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">Data based on 12-month follow-up surveys with borrowers</p>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}

