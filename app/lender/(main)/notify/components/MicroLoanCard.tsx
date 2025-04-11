"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, ThumbsUp, ThumbsDown, BarChart } from "lucide-react"
import { VoteModal } from "./VoteModal"
import { AIInsightsModal } from "./AIInsightsModal"
import { formatCurrency, calculateTimeLeft } from "@/lib/utils"
import type { Microloan } from "../types"

interface MicroloanCardProps {
  loan: Microloan
  onVote: (id: string, vote: "approve" | "reject") => void
  onGenerateInsights: (id: string, insights: string) => void
}

export function MicroloanCard({ loan, onVote, onGenerateInsights }: MicroloanCardProps) {
  const [showVoteModal, setShowVoteModal] = useState(false)
  const [showInsightsModal, setShowInsightsModal] = useState(false)
  const [isGeneratingInsights, setIsGeneratingInsights] = useState(false)

  const approvalPercentage = Math.round((loan.votes.approve / (loan.votes.total || 1)) * 100)

  const timeLeft = calculateTimeLeft(loan.endDate)

  const handleGenerateInsights = async () => {
    setIsGeneratingInsights(true)
    setShowInsightsModal(true)

    // Simulate AI insight generation
    setTimeout(() => {
      const insights = generateMockInsights(loan)
      onGenerateInsights(loan.id, insights)
      setIsGeneratingInsights(false)
    }, 1500)
  }

  return (
    <>
      <Card className="h-full flex flex-col">
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl">{loan.applicantName}</CardTitle>
            <Badge variant={'destructive'} className="ml-2">
              <AlertTriangle className="h-3.5 w-3.5 mr-1" />
              Risk: {loan.riskScore}/10
            </Badge>
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            {formatCurrency(loan.amount)} • {loan.purpose}
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">Risk Factors:</h4>
              <p className="text-sm text-muted-foreground">{loan.riskExplanation}</p>
            </div>

            {loan.aiInsights && (
              <div>
                <h4 className="font-medium mb-1">AI Insights:</h4>
                <p className="text-sm text-muted-foreground">{loan.aiInsights}</p>
              </div>
            )}

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Voting Progress</span>
                <span>{loan.votes.total} votes</span>
              </div>
              <Progress value={approvalPercentage} className="h-2" />
              <div className="flex justify-between text-xs mt-1">
                <span className="flex items-center">
                  <ThumbsUp className="h-3 w-3 mr-1 text-green-500" />
                  {loan.votes.approve} approve
                </span>
                <span className="flex items-center">
                  <ThumbsDown className="h-3 w-3 mr-1 text-red-500" />
                  {loan.votes.reject} reject
                </span>
              </div>
            </div>

            <div className="text-sm">
              <span className="text-muted-foreground">Time left: </span>
              <span className="font-medium">{timeLeft}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex gap-2 border-t pt-4">
          <Button variant="outline" className="flex-1" onClick={() => setShowVoteModal(true)}>
            Vote
          </Button>
          <Button variant="default" className="flex-1" onClick={handleGenerateInsights} disabled={!!loan.aiInsights}>
            <BarChart className="h-4 w-4 mr-2" />
            {loan.aiInsights ? "View Insights" : "Generate Insights"}
          </Button>
        </CardFooter>
      </Card>

      <VoteModal
        open={showVoteModal}
        onOpenChange={setShowVoteModal}
        loan={loan}
        onVote={(vote) => {
          onVote(loan.id, vote)
          setShowVoteModal(false)
        }}
      />

      <AIInsightsModal
        open={showInsightsModal}
        onOpenChange={setShowInsightsModal}
        loan={loan}
        isGenerating={isGeneratingInsights}
      />
    </>
  )
}

function getRiskVariant(score: number) {
  if (score >= 8) return "destructive"
  if (score >= 6) return "warning"
  return "secondary"
}

function generateMockInsights(loan: Microloan): string {
  const insights = [
    `Based on the applicant's credit history and current debt ratio of ${Math.round(Math.random() * 60 + 20)}%, this loan carries significant risk.`,
    `The requested amount (${formatCurrency(loan.amount)}) is ${loan.amount > 5000 ? "high" : "reasonable"} relative to the applicant's income.`,
    `Historical data suggests a ${Math.round(Math.random() * 40 + 30)}% probability of full repayment for loans with similar risk profiles.`,
    `The purpose of "${loan.purpose}" ${Math.random() > 0.5 ? "aligns with productive use" : "may not generate sufficient returns"} to ensure repayment.`,
    `${Math.random() > 0.5 ? "Recommend caution" : "Consider approval with strict monitoring"} due to ${loan.riskScore > 7 ? "very high" : "high"} risk score.`,
  ]

  return insights.join(" ")
}

