import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DollarSign, Calendar, AlertCircle } from "lucide-react"
import PaymentButton from "./PaymentButton"

export default function LoanDetails() {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
          <div>
            <CardTitle>Personal Loan Details</CardTitle>
            <CardDescription>Loan #ML-2023-4872</CardDescription>
          </div>
          <Badge className="w-fit" variant="outline">
            Active
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="text-sm font-medium text-muted-foreground">Principal Amount</div>
            <div className="flex items-center">
              <DollarSign className="mr-1 h-4 w-4 text-muted-foreground" />
              <span className="text-2xl font-bold">1,000.00</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium text-muted-foreground">Outstanding Balance</div>
            <div className="flex items-center">
              <DollarSign className="mr-1 h-4 w-4 text-muted-foreground" />
              <span className="text-2xl font-bold">750.00</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium text-muted-foreground">Next Payment</div>
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4 text-muted-foreground" />
              <span className="text-2xl font-bold">$250.00</span>
              <span className="ml-2 text-sm text-muted-foreground">Due Apr 15, 2025</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <div className="font-medium">Loan Progress</div>
            <div className="text-muted-foreground">35% Paid</div>
          </div>
          <Progress value={35} className="h-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex justify-between border rounded-lg p-3">
            <span className="text-muted-foreground">Interest Rate</span>
            <span className="font-medium">8.5% APR</span>
          </div>
          <div className="flex justify-between border rounded-lg p-3">
            <span className="text-muted-foreground">Term Length</span>
            <span className="font-medium">24 months</span>
          </div>
          <div className="flex justify-between border rounded-lg p-3">
            <span className="text-muted-foreground">Monthly Payment</span>
            <span className="font-medium">$250.00</span>
          </div>
        </div>

        <div className="flex items-center p-3 bg-amber-50 text-amber-900 rounded-lg dark:bg-amber-950 dark:text-amber-200">
          <AlertCircle className="h-4 w-4 mr-2 flex-shrink-0" />
          <p className="text-sm">
            Based on your cash flow analysis, we recommend increasing your monthly payment to $300 to save $120 in
            interest.
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-2 justify-between">
        <Button variant="outline" className="w-full sm:w-auto">
          View Loan Agreement
        </Button>
        <PaymentButton />
      </CardFooter>
    </Card>
  )
}

