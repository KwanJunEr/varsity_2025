"use client"

import { CardFooter } from "@/components/ui/card"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check, Download, Calendar, ArrowRight, TrendingDown, TrendingUp, Info } from "lucide-react"
import { useState } from "react"

export default function RepaymentSchedule() {
  const [extraPayment, setExtraPayment] = useState(0)
  const [paymentFrequency, setPaymentFrequency] = useState("monthly")

  // Sample repayment data
  const repayments = [
    { id: 1, date: "Jan 15, 2025", amount: 250.0, principal: 180.5, interest: 69.5, balance: 4819.5, status: "paid" },
    { id: 2, date: "Feb 15, 2025", amount: 250.0, principal: 183.0, interest: 67.0, balance: 4636.5, status: "paid" },
    {
      id: 3,
      date: "Mar 15, 2025",
      amount: 250.0,
      principal: 185.55,
      interest: 64.45,
      balance: 4450.95,
      status: "paid",
    },
    {
      id: 4,
      date: "Apr 15, 2025",
      amount: 250.0,
      principal: 188.12,
      interest: 61.88,
      balance: 4262.83,
      status: "upcoming",
    },
    {
      id: 5,
      date: "May 15, 2025",
      amount: 250.0,
      principal: 190.73,
      interest: 59.27,
      balance: 4072.1,
      status: "scheduled",
    },
    {
      id: 6,
      date: "Jun 15, 2025",
      amount: 250.0,
      principal: 193.38,
      interest: 56.62,
      balance: 3878.72,
      status: "scheduled",
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <CardTitle>Repayment Schedule</CardTitle>
              <CardDescription>Based on your current loan terms</CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Select defaultValue="standard">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Schedule Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard Schedule</SelectItem>
                  <SelectItem value="accelerated">Accelerated Payment</SelectItem>
                  <SelectItem value="minimum">Minimum Payment</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Payment</TableHead>
                  <TableHead className="hidden md:table-cell">Principal</TableHead>
                  <TableHead className="hidden md:table-cell">Interest</TableHead>
                  <TableHead className="hidden lg:table-cell">Remaining Balance</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {repayments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell>{payment.date}</TableCell>
                    <TableCell>${payment.amount.toFixed(2)}</TableCell>
                    <TableCell className="hidden md:table-cell">${payment.principal.toFixed(2)}</TableCell>
                    <TableCell className="hidden md:table-cell">${payment.interest.toFixed(2)}</TableCell>
                    <TableCell className="hidden lg:table-cell">${payment.balance.toFixed(2)}</TableCell>
                    <TableCell>
                      {payment.status === "paid" ? (
                        <Badge
                          variant="outline"
                          className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800"
                        >
                          <Check className="mr-1 h-3 w-3" /> Paid
                        </Badge>
                      ) : payment.status === "upcoming" ? (
                        <Badge
                          variant="outline"
                          className="bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800"
                        >
                          Upcoming
                        </Badge>
                      ) : (
                        <Badge variant="outline">Scheduled</Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Strategy Comparison</CardTitle>
          <CardDescription>See how different payment strategies affect your loan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Strategy</TableHead>
                  <TableHead>Monthly Payment</TableHead>
                  <TableHead>Payoff Time</TableHead>
                  <TableHead>Total Interest</TableHead>
                  <TableHead>Interest Saved</TableHead>
                  <TableHead>Total Paid</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Minimum Payment</TableCell>
                  <TableCell>$250.00</TableCell>
                  <TableCell>24 months</TableCell>
                  <TableCell>$720.00</TableCell>
                  <TableCell>$0.00</TableCell>
                  <TableCell>$6,000.00</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      Select
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Recommended</TableCell>
                  <TableCell>$300.00</TableCell>
                  <TableCell>19 months</TableCell>
                  <TableCell>$600.00</TableCell>
                  <TableCell className="text-green-600">$120.00</TableCell>
                  <TableCell>$5,700.00</TableCell>
                  <TableCell>
                    <Button size="sm">Select</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Bi-weekly Payments</TableCell>
                  <TableCell>$125.00 (bi-weekly)</TableCell>
                  <TableCell>22 months</TableCell>
                  <TableCell>$670.00</TableCell>
                  <TableCell className="text-green-600">$50.00</TableCell>
                  <TableCell>$5,950.00</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      Select
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Aggressive</TableCell>
                  <TableCell>$450.00</TableCell>
                  <TableCell>12 months</TableCell>
                  <TableCell>$400.00</TableCell>
                  <TableCell className="text-green-600">$320.00</TableCell>
                  <TableCell>$5,400.00</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      Select
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Custom</TableCell>
                  <TableCell>${(250 + extraPayment).toFixed(2)}</TableCell>
                  <TableCell>{Math.ceil(3250 / (250 + extraPayment))} months</TableCell>
                  <TableCell>
                    ${((250 + extraPayment) * Math.ceil(3250 / (250 + extraPayment)) - 3250).toFixed(2)}
                  </TableCell>
                  <TableCell className="text-green-600">
                    ${(720 - ((250 + extraPayment) * Math.ceil(3250 / (250 + extraPayment)) - 3250)).toFixed(2)}
                  </TableCell>
                  <TableCell>${((250 + extraPayment) * Math.ceil(3250 / (250 + extraPayment))).toFixed(2)}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      Select
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="mt-6 flex justify-end">
            <Button>
              Apply Selected Strategy
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

