import type { Microloan } from "./types"

export const mockMicroloans: Microloan[] = [
  {
    id: "1",
    applicantName: "Maria Rodriguez",
    amount: 3500,
    purpose: "Expanding small grocery store",
    riskScore: 8,
    riskExplanation: "Previous loan default, limited business history, and high local competition in the area.",
    aiInsights: null,
    votes: {
      approve: 12,
      reject: 8,
      total: 20,
    },
    endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days from now
  },
  {
    id: "2",
    applicantName: "John Mwangi",
    amount: 2000,
    purpose: "Agricultural equipment purchase",
    riskScore: 7,
    riskExplanation: "Seasonal income dependency, weather risks, and limited collateral.",
    aiInsights: null,
    votes: {
      approve: 18,
      reject: 5,
      total: 23,
    },
    endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days from now
  },
  {
    id: "3",
    applicantName: "Priya Sharma",
    amount: 5000,
    purpose: "Textile workshop expansion",
    riskScore: 9,
    riskExplanation: "High debt-to-income ratio, volatile industry, and recent market downturn in textiles.",
    aiInsights: null,
    votes: {
      approve: 7,
      reject: 15,
      total: 22,
    },
    endDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days from now
  },
  {
    id: "4",
    applicantName: "Carlos Mendoza",
    amount: 1500,
    purpose: "Food truck repairs",
    riskScore: 6,
    riskExplanation: "Inconsistent income history, competitive market, but good repayment record on previous loans.",
    aiInsights: null,
    votes: {
      approve: 25,
      reject: 10,
      total: 35,
    },
    endDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 days from now
  },
  {
    id: "5",
    applicantName: "Fatima Al-Hassan",
    amount: 4000,
    purpose: "Artisanal craft business",
    riskScore: 8,
    riskExplanation:
      "New business venture, limited market validation, and high startup costs relative to projected income.",
    aiInsights: null,
    votes: {
      approve: 9,
      reject: 11,
      total: 20,
    },
    endDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString(), // 6 days from now
  },
  {
    id: "6",
    applicantName: "Nguyen Van Minh",
    amount: 2500,
    purpose: "Fishing equipment upgrade",
    riskScore: 7,
    riskExplanation: "Environmental risks, fluctuating market prices, and limited alternative income sources.",
    aiInsights: null,
    votes: {
      approve: 15,
      reject: 12,
      total: 27,
    },
    endDate: new Date(Date.now() + 3.5 * 24 * 60 * 60 * 1000).toISOString(), // 3.5 days from now
  },
]

