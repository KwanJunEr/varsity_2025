// Mock data - in a real app this would come from your Web3 connection
import { Award, Wallet, TrendingUp, Users, Zap, ChevronRight, Sparkles } from "lucide-react"
export const mockUserData = {
    name: "Jonas Kwan",
    handle: "@jonaskwan",
    level: 3,
    xp: 2750,
    xpToNextLevel: 4000,
    totalPooled: 15420,
    profileImage: "/placeholder.svg?height=100&width=100",
    joinDate: "January 2025",
    pools: [
      { id: 1, name: "Agriculture", amount: 5000, apy: 8.2, color: "bg-emerald-500" },
      { id: 2, name: "Education", amount: 3200, apy: 7.5, color: "bg-blue-500" },
      { id: 3, name: "Small Business", amount: 4800, apy: 9.1, color: "bg-purple-500" },
      { id: 4, name: "Healthcare", amount: 2420, apy: 6.8, color: "bg-pink-500" },
    ],
    perks: [
      { level: 1, name: "Basic Returns", description: "Standard APY on all pools", icon: <Wallet className="h-5 w-5" /> },
      {
        level: 2,
        name: "Priority Access",
        description: "Early access to new pools",
        icon: <ChevronRight className="h-5 w-5" />,
      },
      {
        level: 3,
        name: "Enhanced Returns",
        description: "+0.5% APY on all pools",
        icon: <TrendingUp className="h-5 w-5" />,
      },
      { level: 4, name: "Reduced Fees", description: "25% lower platform fees", icon: <Zap className="h-5 w-5" /> },
      {
        level: 5,
        name: "Governance Rights",
        description: "Voting rights on new pools",
        icon: <Users className="h-5 w-5" />,
      },
    ],
    achievements: [
      { id: 1, name: "Early Adopter", description: "Joined during platform beta", completed: true },
      { id: 2, name: "Diversified", description: "Invested in 3+ categories", completed: true },
      { id: 3, name: "Whale Status", description: "Pool over 10,000 tokens", completed: true },
      { id: 4, name: "Community Leader", description: "Refer 10+ active lenders", completed: false },
    ],
  }