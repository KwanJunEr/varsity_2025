import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CircleCheck, CircleX, Clock, TrendingUp } from "lucide-react"

interface LoanStats {
  approved: number
  rejected: number
  pending: number
  totalAmount: number
  successRate: number
}

export default function StatsCard() {
  // Sample statistics data
  const stats: LoanStats = {
    approved: 400,
    rejected: 89,
    pending: 20,
    totalAmount: 2450,
    successRate: 80,
  }

  return (
    <Card className="w-[500px]">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">All Current Microloan Application Statistics in LendSync</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <CircleCheck className="h-5 w-5 text-green-500" />
            <div>
              <p className="text-sm font-medium">Total Number Approved</p>
              <p className="text-xl font-bold">{stats.approved}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <CircleX className="h-5 w-5 text-red-500" />
            <div>
              <p className="text-sm font-medium">Rejected</p>
              <p className="text-xl font-bold">{stats.rejected}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-amber-500" />
            <div>
              <p className="text-sm font-medium">Pending</p>
              <p className="text-xl font-bold">{stats.pending}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-500" />
            <div>
              <p className="text-sm font-medium">Success Rate</p>
              <p className="text-xl font-bold">{stats.successRate}%</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

