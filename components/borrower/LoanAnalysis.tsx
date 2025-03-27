"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle, AlertTriangle } from "lucide-react"
import LoadingDots from "./Dots"

interface LoanData {
  title: string
  riskScore: number
  status: "approved" | "risky" | "okay"
}

export default function LoanAnalysis() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const loans: LoanData[] = [
    {
      title: "Small Business Starter",
      riskScore: 50,
      status: "okay",
    },
    {
      title: "Purchase of Bicycle",
      riskScore: 40,
      status: "approved",
    },
    {
      title: "Purchase of Washing Machine",
      riskScore: 70,
      status: "risky",
    },
  ]

  useEffect(() => {
    // Simulate AI processing time
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    // Show content with a slight delay after loading finishes
    const contentTimer = setTimeout(() => {
      setShowContent(true)
    }, 3000)

    return () => {
      clearTimeout(loadingTimer)
      clearTimeout(contentTimer)
    }
  }, [])

  const getRiskColor = (score: number) => {
    if (score < 50) return "text-green-600"
    if (score < 60) return "text-amber-600"
    return "text-red-600"
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "okay":
        return <AlertTriangle className="h-5 w-5 text-amber-600" />
      case "risky":
        return <AlertCircle className="h-5 w-5 text-red-600" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6 max-w-[1005px]">
      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <LoadingDots />
        </div>
      ) : (
        <div className={`transition-opacity duration-500 ${showContent ? "opacity-100" : "opacity-0"}`}>
          <Card className="mb-6 border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <p className="text-gray-700">
                The following three loans have been approved. However, purchase of washing machine is risky after you
                have applied for that two loans. Business loan is considered okay since our platform encourages
                entrepreneurship and the amount is not too much.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {loans.map((loan, index) => (
              <Card
                key={index}
                className={`border-t-4 ${
                  loan.status === "approved"
                    ? "border-t-green-500"
                    : loan.status === "okay"
                      ? "border-t-amber-500"
                      : "border-t-red-500"
                }`}
              >
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-medium">{loan.title}</CardTitle>
                  {getStatusIcon(loan.status)}
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Risk Score</span>
                    <span className={`text-xl font-bold ${getRiskColor(loan.riskScore)}`}>{loan.riskScore}</span>
                  </div>
                  <div className="mt-3 w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${
                        loan.riskScore < 50 ? "bg-green-500" : loan.riskScore < 60 ? "bg-amber-500" : "bg-red-500"
                      }`}
                      style={{ width: `${loan.riskScore}%` }}
                    ></div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <p className="text-sm text-gray-500">
                    {loan.status === "approved"
                      ? "Approved - Low risk"
                      : loan.status === "okay"
                        ? "Approved - Moderate risk"
                        : "Approved - High risk"}
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

