import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import PhaseOneContent from "../components/PhaseOneContent"
import PhaseTwoContent from "../components/PhaseTwoContent"
import PhaseThreeContent from "../components/PhaseThreeContent"
import PaymentInterface from "../components/PaymentInterface"


export default function BusinessMicroloan() {
  // In a real app, this would come from your database or API
  const loanProgress = 33 // First phase completed (out of 3)
  const loanAmount = 15000
  const paidAmount = 5000
  const remainingAmount = loanAmount - paidAmount
  const currentPhase = 1

  return (
    <div className="container mx-auto py-10v px-5">
      <h1 className="text-4xl font-bold mb-6 mt-20">Business Microloan Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Loan Progress</CardTitle>
              <CardDescription>
                Your loan is structured in 3 payment phases. Complete all phases to unlock better credit terms.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Phase {currentPhase} of 3</span>
                  <span className="text-sm font-medium">{loanProgress}% Complete</span>
                </div>
                <Progress value={loanProgress} className="h-2" />
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <Card className="bg-primary/5 border-primary">
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm">Phase 1</CardTitle>
                    <CardDescription>Employee Payroll</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="font-bold text-lg">$5,000</p>
                    <p className="text-xs text-muted-foreground">Pending in One Day</p>
                  </CardContent>
                </Card>

                <Card className="bg-muted/50">
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm">Phase 2</CardTitle>
                    <CardDescription>Equipment Purchase</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="font-bold text-lg">$5,000</p>
                    <p className="text-xs text-muted-foreground">Due in 30 days</p>
                  </CardContent>
                </Card>

                <Card className="bg-muted/50">
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm">Phase 3</CardTitle>
                    <CardDescription>Business Operations</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="font-bold text-lg">$5,000</p>
                    <p className="text-xs text-muted-foreground">Due in 60 days</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <div>
                  <p className="text-sm text-muted-foreground">Total Loan Amount</p>
                  <p className="text-xl font-bold">${loanAmount.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Remaining Balance</p>
                  <p className="text-xl font-bold">${remainingAmount.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Next Payment Due</p>
                  <p className="text-xl font-bold">April 15, 2025</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <PaymentInterface currentPhase={currentPhase + 1} phaseAmount={5000} />
        </div>
      </div>

      <Tabs defaultValue="phase1" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="phase1">Phase 1: Employees</TabsTrigger>
          <TabsTrigger value="phase2">Phase 2: Equipment</TabsTrigger>
          <TabsTrigger value="phase3">Phase 3: Operations</TabsTrigger>
        </TabsList>

        <TabsContent value="phase1">
          <PhaseOneContent currentPhase={currentPhase} />
        </TabsContent>

        <TabsContent value="phase2">
          <PhaseTwoContent />
        </TabsContent>

        <TabsContent value="phase3">
          <PhaseThreeContent />
        </TabsContent>
      </Tabs>
    </div>
  )
}

