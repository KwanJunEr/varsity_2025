"use client"

import { useState } from "react"
import { MicroloanCard } from "./MicroLoanCard"
import { mockMicroloans } from "../mockData"

export function MicroloanList() {
  const [microloans, setMicroloans] = useState(mockMicroloans)

  const handleVote = (id: string, vote: "approve" | "reject") => {
    setMicroloans(
      microloans.map((loan) => {
        if (loan.id === id) {
          return {
            ...loan,
            votes: {
              ...loan.votes,
              [vote]: loan.votes[vote] + 1,
              total: loan.votes.total + 1,
            },
          }
        }
        return loan
      }),
    )
  }

  const handleGenerateInsights = (id: string, insights: string) => {
    setMicroloans(
      microloans.map((loan) => {
        if (loan.id === id) {
          return {
            ...loan,
            aiInsights: insights,
          }
        }
        return loan
      }),
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {microloans.map((loan) => (
        <MicroloanCard key={loan.id} loan={loan} onVote={handleVote} onGenerateInsights={handleGenerateInsights} />
      ))}
    </div>
  )
}

