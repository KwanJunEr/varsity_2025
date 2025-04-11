"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function LoanRankings() {
  const loans = [
    {
      id: 1,
      name: "Small Business Starter",
      provider: "Business MicroLoan",
      link: "/business-loan",
      riskScore: 50,
      riskLevel: "Medium",
      interestRate: "5.2%",
      maxAmount: "$15,000",
    },
    {
      id: 2,
      name: "Purchase of Bicyle",
      provider: "Personal MicroLoan",
      link: "/personal-loan",
      riskScore: 40,
      riskLevel: "Medium",
      interestRate: "6.5%",
      maxAmount: "$1,000",
    },
    {
      id: 3,
      name: "Purchase of New Washing Machine",
      provider: "Group Borrowing",
      link: "/group-borrow",
      riskScore: 70,
      riskLevel: "High",
      interestRate: "8.8%",
      maxAmount: "$2,500",
    },
  ];

  const getRiskBadgeColor = (level: string) => {
    switch (level) {
      case "Low":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
      case "High":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      default:
        return "";
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-sm text-muted-foreground mb-4">
        <p>
          Risk scores range from 0-100, with higher scores indicating lower
          risk. Scores are calculated based on historical repayment data,
          borrower profiles, and economic conditions.
        </p>
      </div>

      <div className="grid gap-4">
        {loans.map((loan) => (
          <div
            key={loan.id}
            className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border rounded-lg"
          >
            <div className="space-y-1 mb-2 md:mb-0">
              <div className="font-medium">{loan.name}</div>
              <div className="text-sm text-muted-foreground">
                {loan.provider}
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto">
              <div className="flex flex-col gap-1 w-full md:w-auto">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">
                    Risk Score: {loan.riskScore}
                  </span>
                  <Badge
                    variant="outline"
                    className={getRiskBadgeColor(loan.riskLevel)}
                  >
                    {loan.riskLevel}
                  </Badge>
                </div>
                <div className="mr-2 min-w-[200px]">
                  <Progress
                    value={loan.riskScore}
                    className="w-full md:w-[120px] h-2"
                  />
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="text-sm">
                  <div>Interest: {loan.interestRate}</div>
                  <div>MicroLoan Amount: {loan.maxAmount}</div>
                </div>

                <Button variant="outline" size="sm" asChild>
                  <Link href={`/borrower/microloan/${loan.link}`}>
                    <span>Details</span>
                    <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
