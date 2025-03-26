import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Calendar, Download, LineChart, TrendingUp } from "lucide-react"
import LoanDetails from "../components/LoanDetails"
import RepaymentSchedule from "../components/RepaymentSchedule"
import CashFlowSimulation from "../components/CashFlowSimulation"
import EarningOpportunities from "../components/EarningOpportunities"
import PaymentButton from "../components/PaymentButton"

export default function PersonalLoanDashboard() {
  return (
    <div className="container mx-auto py-6 space-y-8 px-5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mt-20">Personal Loan Management</h1>
          <p className="text-muted-foreground">Manage your loan, payments, and financial growth</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <PaymentButton />
        </div>
      </div>

      <LoanDetails />

      <Tabs defaultValue="repayment" className="w-full">
        <TabsList className="grid grid-cols-1 md:grid-cols-3 lg:w-[600px]">
          <TabsTrigger value="repayment">
            <Calendar className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Repayment</span> Schedule
          </TabsTrigger>
          <TabsTrigger value="simulation">
            <LineChart className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Cash Flow</span> Simulation
          </TabsTrigger>
          <TabsTrigger value="earnings">
            <TrendingUp className="mr-2 h-4 w-4" />
            Earning Tools
          </TabsTrigger>
        </TabsList>
        <TabsContent value="repayment" className="space-y-4">
          <RepaymentSchedule />
        </TabsContent>
        <TabsContent value="simulation" className="space-y-4">
          <CashFlowSimulation />
        </TabsContent>
        <TabsContent value="earnings" className="space-y-4">
          <EarningOpportunities />
        </TabsContent>
      </Tabs>
    </div>
  )
}

