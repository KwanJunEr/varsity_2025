"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { Loader2, TrendingUp, ArrowUpRight, Sparkles } from "lucide-react"

// Mock data for charts
const marketTrendsData = [
  { month: "Jan", fedRate: 4.5, treasuryYield: 3.8, mortgageRate: 6.2 },
  { month: "Feb", fedRate: 4.5, treasuryYield: 3.9, mortgageRate: 6.3 },
  { month: "Mar", fedRate: 4.75, treasuryYield: 4.0, mortgageRate: 6.5 },
  { month: "Apr", fedRate: 4.75, treasuryYield: 3.9, mortgageRate: 6.4 },
  { month: "May", fedRate: 5.0, treasuryYield: 4.1, mortgageRate: 6.7 },
  { month: "Jun", fedRate: 5.0, treasuryYield: 4.2, mortgageRate: 6.8 },
]

const borrowingData = [
  { month: "Jan", loanVolume: 12.5, defaultRate: 1.2, avgLoanSize: 8.4 },
  { month: "Feb", loanVolume: 13.2, defaultRate: 1.3, avgLoanSize: 8.6 },
  { month: "Mar", loanVolume: 14.8, defaultRate: 1.2, avgLoanSize: 9.1 },
  { month: "Apr", loanVolume: 14.2, defaultRate: 1.4, avgLoanSize: 9.0 },
  { month: "May", loanVolume: 15.5, defaultRate: 1.5, avgLoanSize: 9.3 },
  { month: "Jun", loanVolume: 16.2, defaultRate: 1.6, avgLoanSize: 9.5 },
]

type InterestRateProposal = {
  id: number
  title: string
  currentRate: number
  proposedRate: number
  rationale: string
  aiGenerated: boolean
  status: "active" | "completed" | "pending"
  deadline: string
  totalVotes: number
  votesFor: number
  votesAgainst: number
  userVoted: boolean | null
}

const initialProposals: InterestRateProposal[] = [
  {
    id: 1,
    title: "Lending Rate Adjustment for Q3",
    currentRate: 5.25,
    proposedRate: 5.75,
    rationale:
      "Based on rising market rates and increased demand for loans, a 0.5% increase is recommended to maintain competitive returns for lenders while managing risk.",
    aiGenerated: true,
    status: "active",
    deadline: "3 days left",
    totalVotes: 124,
    votesFor: 89,
    votesAgainst: 35,
    userVoted: null,
  },
  {
    id: 2,
    title: "Stablecoin Deposit Rate Update",
    currentRate: 3.8,
    proposedRate: 4.2,
    rationale:
      "Increasing stablecoin deposit rates will help attract more liquidity to the protocol and remain competitive with other DeFi platforms.",
    aiGenerated: false,
    status: "completed",
    deadline: "Ended 5 days ago",
    totalVotes: 187,
    votesFor: 142,
    votesAgainst: 45,
    userVoted: true,
  },
]

export default function InterestRateTab() {
  const [proposals, setProposals] = useState<InterestRateProposal[]>(initialProposals)
  const [isGeneratingAnalysis, setIsGeneratingAnalysis] = useState(false)
  const [analysisGenerated, setAnalysisGenerated] = useState(false)
  const [voteDialogOpen, setVoteDialogOpen] = useState(false)
  const [currentProposal, setCurrentProposal] = useState<InterestRateProposal | null>(null)
  const [voteChoice, setVoteChoice] = useState<"for" | "against" | null>(null)
  const [analysisTab, setAnalysisTab] = useState("market")

  const handleGenerateAnalysis = () => {
    setIsGeneratingAnalysis(true)

    // Simulate AI analysis generation
    setTimeout(() => {
      setIsGeneratingAnalysis(false)
      setAnalysisGenerated(true)

      // Add a new AI-generated proposal
      const newProposal: InterestRateProposal = {
        id: proposals.length + 1,
        title: "AI-Recommended Rate Adjustment",
        currentRate: 4.5,
        proposedRate: 4.75,
        rationale:
          "Based on current market trends showing increased Fed rates and treasury yields, combined with a 12% increase in borrowing volume and a slight uptick in default rates, a modest 0.25% increase is recommended to balance risk management with competitive rates.",
        aiGenerated: true,
        status: "pending",
        deadline: "Awaiting approval",
        totalVotes: 0,
        votesFor: 0,
        votesAgainst: 0,
        userVoted: null,
      }

      setProposals((prev) => [newProposal, ...prev])
    }, 3000)
  }

  const handleOpenVoteDialog = (proposal: InterestRateProposal) => {
    setCurrentProposal(proposal)
    setVoteChoice(null)
    setVoteDialogOpen(true)
  }

  const handleVote = () => {
    if (!currentProposal || voteChoice === null) return

    setProposals((prev) =>
      prev.map((proposal) => {
        if (proposal.id === currentProposal.id) {
          return {
            ...proposal,
            userVoted: true,
            totalVotes: proposal.totalVotes + 1,
            votesFor: voteChoice === "for" ? proposal.votesFor + 1 : proposal.votesFor,
            votesAgainst: voteChoice === "against" ? proposal.votesAgainst + 1 : proposal.votesAgainst,
            status: proposal.status === "pending" ? "active" : proposal.status,
            deadline: proposal.status === "pending" ? "7 days left" : proposal.deadline,
          }
        }
        return proposal
      }),
    )

    setVoteDialogOpen(false)
  }

  const calculatePercentage = (votes: number, total: number) => {
    if (total === 0) return 0
    return Math.round((votes / total) * 100)
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            AI Interest Rate Analysis
          </CardTitle>
          <CardDescription>
            Generate an AI analysis based on market trends and borrowing patterns to recommend an optimal interest rate.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!analysisGenerated ? (
            <div className="flex justify-center py-8">
              <Button onClick={handleGenerateAnalysis} disabled={isGeneratingAnalysis} size="lg">
                {isGeneratingAnalysis ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Analysis...
                  </>
                ) : (
                  "Generate AI Analysis"
                )}
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <Tabs value={analysisTab} onValueChange={setAnalysisTab}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="market">Market Trends</TabsTrigger>
                  <TabsTrigger value="borrowing">Borrowing Patterns</TabsTrigger>
                </TabsList>

                <TabsContent value="market" className="pt-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">Market Interest Rate Trends</h3>
                      <div className="flex items-center gap-2 text-sm">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-green-500 font-medium">+0.25% overall trend</span>
                      </div>
                    </div>

                    <div className="h-[300px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={marketTrendsData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="fedRate" stroke="#8884d8" name="Fed Rate" />
                          <Line type="monotone" dataKey="treasuryYield" stroke="#82ca9d" name="10Y Treasury" />
                          <Line type="monotone" dataKey="mortgageRate" stroke="#ff7300" name="Mortgage Rate" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-muted rounded-lg p-4">
                        <div className="text-sm text-muted-foreground mb-1">Fed Rate</div>
                        <div className="text-2xl font-bold">5.0%</div>
                        <div className="flex items-center text-sm text-green-500 mt-1">
                          <ArrowUpRight className="h-3 w-3 mr-1" />
                          +0.25% in 2 months
                        </div>
                      </div>
                      <div className="bg-muted rounded-lg p-4">
                        <div className="text-sm text-muted-foreground mb-1">10Y Treasury</div>
                        <div className="text-2xl font-bold">4.2%</div>
                        <div className="flex items-center text-sm text-green-500 mt-1">
                          <ArrowUpRight className="h-3 w-3 mr-1" />
                          +0.3% in 6 months
                        </div>
                      </div>
                      <div className="bg-muted rounded-lg p-4">
                        <div className="text-sm text-muted-foreground mb-1">Mortgage Rate</div>
                        <div className="text-2xl font-bold">6.8%</div>
                        <div className="flex items-center text-sm text-green-500 mt-1">
                          <ArrowUpRight className="h-3 w-3 mr-1" />
                          +0.6% in 6 months
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="borrowing" className="pt-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">Borrowing Pattern Analysis</h3>
                      <div className="flex items-center gap-2 text-sm">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-green-500 font-medium">+29.6% loan volume</span>
                      </div>
                    </div>

                    <div className="h-[300px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={borrowingData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="loanVolume" stroke="#8884d8" name="Loan Volume ($M)" />
                          <Line type="monotone" dataKey="defaultRate" stroke="#ff0000" name="Default Rate (%)" />
                          <Line type="monotone" dataKey="avgLoanSize" stroke="#82ca9d" name="Avg Loan Size ($K)" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-muted rounded-lg p-4">
                        <div className="text-sm text-muted-foreground mb-1">Loan Volume</div>
                        <div className="text-2xl font-bold">$16.2M</div>
                        <div className="flex items-center text-sm text-green-500 mt-1">
                          <ArrowUpRight className="h-3 w-3 mr-1" />
                          +29.6% in 6 months
                        </div>
                      </div>
                      <div className="bg-muted rounded-lg p-4">
                        <div className="text-sm text-muted-foreground mb-1">Default Rate</div>
                        <div className="text-2xl font-bold">1.6%</div>
                        <div className="flex items-center text-sm text-red-500 mt-1">
                          <ArrowUpRight className="h-3 w-3 mr-1" />
                          +0.4% in 6 months
                        </div>
                      </div>
                      <div className="bg-muted rounded-lg p-4">
                        <div className="text-sm text-muted-foreground mb-1">Avg Loan Size</div>
                        <div className="text-2xl font-bold">$9.5K</div>
                        <div className="flex items-center text-sm text-green-500 mt-1">
                          <ArrowUpRight className="h-3 w-3 mr-1" />
                          +13.1% in 6 months
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-3">AI Recommendation</h3>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <span className="text-sm text-muted-foreground">Current Rate</span>
                      <div className="text-xl font-bold">4.5%</div>
                    </div>
                    <div className="text-2xl font-bold">→</div>
                    <div>
                      <span className="text-sm text-muted-foreground">Recommended Rate</span>
                      <div className="text-xl font-bold text-primary">4.75%</div>
                    </div>
                  </div>
                  <p className="text-sm">
                    Based on current market trends showing increased Fed rates and treasury yields, combined with a 12%
                    increase in borrowing volume and a slight uptick in default rates, a modest 0.25% increase is
                    recommended to balance risk management with competitive rates.
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Interest Rate Proposals</h2>

        {proposals.map((proposal) => (
          <Card key={proposal.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <CardTitle>{proposal.title}</CardTitle>
                    {proposal.aiGenerated && (
                      <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full">AI Generated</span>
                    )}
                  </div>
                  <CardDescription className="mt-2">
                    <div className="flex items-center gap-6 mt-2">
                      <div>
                        <span className="text-sm text-muted-foreground">Current Rate</span>
                        <div className="text-lg font-bold">{proposal.currentRate}%</div>
                      </div>
                      <div className="text-xl">→</div>
                      <div>
                        <span className="text-sm text-muted-foreground">Proposed Rate</span>
                        <div className="text-lg font-bold text-primary">{proposal.proposedRate}%</div>
                      </div>
                      <div className="text-sm bg-muted px-2 py-1 rounded">
                        {proposal.proposedRate > proposal.currentRate ? "+" : ""}
                        {(proposal.proposedRate - proposal.currentRate).toFixed(2)}%
                      </div>
                    </div>
                  </CardDescription>
                </div>
                <div className="text-sm font-medium">
                  {proposal.status === "active" && <span className="text-blue-500">{proposal.deadline}</span>}
                  {proposal.status === "completed" && <span className="text-green-500">{proposal.deadline}</span>}
                  {proposal.status === "pending" && <span className="text-yellow-500">{proposal.deadline}</span>}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="text-sm font-medium mb-2">Rationale</h4>
                  <p className="text-sm">{proposal.rationale}</p>
                </div>

                {proposal.status !== "pending" && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Total Votes: {proposal.totalVotes}</span>
                      {proposal.userVoted !== null && (
                        <span className="font-medium">You voted: {proposal.userVoted ? "For" : "Against"}</span>
                      )}
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>For</span>
                        <span>
                          {calculatePercentage(proposal.votesFor, proposal.totalVotes)}% ({proposal.votesFor})
                        </span>
                      </div>
                      <Progress
                        value={calculatePercentage(proposal.votesFor, proposal.totalVotes)}
                        className="h-2 bg-muted"
                      />
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Against</span>
                        <span>
                          {calculatePercentage(proposal.votesAgainst, proposal.totalVotes)}% ({proposal.votesAgainst})
                        </span>
                      </div>
                      <Progress
                        value={calculatePercentage(proposal.votesAgainst, proposal.totalVotes)}
                        className="h-2 bg-muted"
                      />
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter>
              {proposal.status === "active" && proposal.userVoted === null && (
                <Button onClick={() => handleOpenVoteDialog(proposal)} className="w-full">
                  Cast Your Vote
                </Button>
              )}
              {proposal.status === "pending" && (
                <Button onClick={() => handleOpenVoteDialog(proposal)} className="w-full">
                  Approve & Open Voting
                </Button>
              )}
              {proposal.userVoted !== null && (
                <Button variant="outline" disabled className="w-full">
                  You've Voted
                </Button>
              )}
              {proposal.status === "completed" && proposal.userVoted === null && (
                <Button variant="outline" disabled className="w-full">
                  Voting Closed
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog open={voteDialogOpen} onOpenChange={setVoteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{currentProposal?.title}</DialogTitle>
            <DialogDescription>
              {currentProposal?.status === "pending"
                ? "Approve this proposal and open it for community voting"
                : "Cast your vote on this interest rate proposal"}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-sm text-muted-foreground">Current Rate</span>
                <div className="text-lg font-bold">{currentProposal?.currentRate}%</div>
              </div>
              <div className="text-xl">→</div>
              <div>
                <span className="text-sm text-muted-foreground">Proposed Rate</span>
                <div className="text-lg font-bold text-primary">{currentProposal?.proposedRate}%</div>
              </div>
            </div>

            <div className="bg-muted p-3 rounded-lg mb-4">
              <p className="text-sm">{currentProposal?.rationale}</p>
            </div>

            {currentProposal?.status !== "pending" && (
              <RadioGroup value={voteChoice || ""} onValueChange={(value) => setVoteChoice(value as "for" | "against")}>
                <div className="flex items-center space-x-2 mb-3">
                  <RadioGroupItem value="for" id="vote-for" />
                  <Label htmlFor="vote-for">Vote For</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="against" id="vote-against" />
                  <Label htmlFor="vote-against">Vote Against</Label>
                </div>
              </RadioGroup>
            )}
          </div>
          <DialogFooter>
            <Button onClick={handleVote} disabled={currentProposal?.status !== "pending" && voteChoice === null}>
              {currentProposal?.status === "pending" ? "Approve & Open Voting" : "Submit Vote"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

