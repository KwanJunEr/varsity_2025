export interface Microloan {
    id: string
    applicantName: string
    amount: number
    purpose: string
    riskScore: number
    riskExplanation: string
    aiInsights: string | null
    votes: {
      approve: number
      reject: number
      total: number
    }
    endDate: string
}