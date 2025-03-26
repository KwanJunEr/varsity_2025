"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  AlertCircle,
  CheckCircle,
  Clock,
  DollarSign,
  Star,
  Users,
  Award,
  Coins,
  CreditCard,
  Calendar,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { Alert, AlertDescription } from "@/components/ui/alert"

// Replace the default function with the updated one that includes payment functionality
export default function GroupBorrowPage() {
  const [openMemberDialog, setOpenMemberDialog] = useState(false)
  const [selectedMember, setSelectedMember] = useState<Member | null>(null)
  const [openPaymentDialog, setOpenPaymentDialog] = useState(false)
  const [paymentAmount, setPaymentAmount] = useState("530")
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [membersData, setMembersData] = useState<Member[]>(members)
  const [showRewardDialog, setShowRewardDialog] = useState(false)
  const [earnedRewards, setEarnedRewards] = useState({ reputation: 0, tokens: 0 })
  const [groupProgress, setGroupProgress] = useState(68)

  const handleOpenMemberDialog = (member: Member) => {
    setSelectedMember(member)
    setOpenMemberDialog(true)
  }

  const handleMakePayment = () => {
    // Calculate rewards based on payment timing and amount
    const reputationPoints = Number.parseFloat(paymentAmount) > 530 ? 0.3 : 0.2
    const contributionTokens = Number.parseFloat(paymentAmount) > 530 ? 50 : 30

    setEarnedRewards({
      reputation: reputationPoints,
      tokens: contributionTokens,
    })

    // Update member data
    if (selectedMember) {
      const updatedMembers = membersData.map((member) => {
        if (member.id === selectedMember.id) {
          // Add payment to history
          const newPayment = {
            date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
            amount: Number.parseFloat(paymentAmount),
            status: "on-time" as const,
          }

          // Update member data
          return {
            ...member,
            amountPaid: member.amountPaid + Number.parseFloat(paymentAmount),
            isLate: false,
            lastPaymentDate: new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
            reputationScore: Math.min(5, member.reputationScore + reputationPoints),
            contributionTokens: (member.contributionTokens || 0) + contributionTokens,
            paymentHistory: [newPayment, ...member.paymentHistory],
          }
        }
        return member
      })

      setMembersData(updatedMembers)
      setSelectedMember({
        ...selectedMember,
        amountPaid: selectedMember.amountPaid + Number.parseFloat(paymentAmount),
        isLate: false,
        reputationScore: Math.min(5, selectedMember.reputationScore + reputationPoints),
        contributionTokens: (selectedMember.contributionTokens || 0) + contributionTokens,
      })

      // Update group progress
      const totalPaid = updatedMembers.reduce((sum, member) => sum + member.amountPaid, 0)
      const newProgress = Math.min(100, Math.round((totalPaid / (2500 + 680)) * 100)) // 2500 + 680 (interest)
      setGroupProgress(newProgress)
    }

    setOpenPaymentDialog(false)
    setShowRewardDialog(true)
  }

  const closeRewardDialog = () => {
    setShowRewardDialog(false)
   
  }

  return (
    <div className="container mx-auto py-6 space-y-6 px-5">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold mt-20">Group Borrowing</h1>
        <p className="text-muted-foreground">Matched result for purchasing washing machine (RM2,500)</p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="ranking">Community Ranking</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Washing Machine Group Purchase</CardTitle>
              <CardDescription>Group ID: #WM25003 • Created on March 15, 2025</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col space-y-1">
                  <span className="text-sm text-muted-foreground">Total Amount</span>
                  <span className="text-2xl font-bold">RM2,500</span>
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-sm text-muted-foreground">Members</span>
                  <span className="text-2xl font-bold">5</span>
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <Badge className="w-fit">Active</Badge>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Repayment Progress</span>
                  <span className="text-sm font-medium">{groupProgress}%</span>
                </div>
                <Progress value={groupProgress} className="h-2" />
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-medium mb-2">Group Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-1">
                    <span className="text-sm text-muted-foreground">Loan Model</span>
                    <span className="font-medium">Collective Loan Repayment</span>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <span className="text-sm text-muted-foreground">Loan Amount per Member</span>
                    <span className="font-medium">RM2,500</span>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <span className="text-sm text-muted-foreground">Interest Rate</span>
                    <span className="font-medium">6% (Total: RM3,180 over 6 months)</span>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <span className="text-sm text-muted-foreground">Monthly Repayment</span>
                    <span className="font-medium">RM530 per month</span>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <span className="text-sm text-muted-foreground">Term Length</span>
                    <span className="font-medium">6 months</span>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <span className="text-sm text-muted-foreground">Next Payment Due</span>
                    <span className="font-medium">April 15, 2025</span>
                  </div>
                </div>
              </div>

              <Alert className="mt-4 bg-amber-50 border-amber-200">
                <AlertCircle className="h-4 w-4 text-amber-600" />
                <AlertDescription className="text-amber-800">
                  If one member fails to pay, the others may have to cover their share (group responsibility).
                  Defaulting members might be blacklisted or lose access to future loans.
                </AlertDescription>
              </Alert>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                onClick={() => {
                  setSelectedMember(membersData.find((m) => m.id === 1) || null)
                  setOpenPaymentDialog(true)
                }}
              >
                Make a Payment
              </Button>
            </CardFooter>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Group Engagement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92%</div>
                <p className="text-sm text-muted-foreground">Active participation rate</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  On-time Payments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85%</div>
                <p className="text-sm text-muted-foreground">4 out of 5 members on time</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center">
                  <Star className="h-4 w-4 mr-2" />
                  Group Rating
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.2/5</div>
                <p className="text-sm text-muted-foreground">Based on payment history</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="members">
          <Card>
            <CardHeader>
              <CardTitle>Group Members</CardTitle>
              <CardDescription>All members in this borrowing group</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {membersData.map((member) => (
                  <div key={member.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-sm text-muted-foreground">Joined {member.joinDate}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="hidden md:flex flex-col items-end">
                        <div className="font-medium">RM{member.amountPaid} paid</div>
                        <div className="text-sm text-muted-foreground">of RM3,180</div>
                      </div>
                      {member.isLate && (
                        <Badge variant="destructive" className="hidden md:flex">
                          Late Payment
                        </Badge>
                      )}
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => handleOpenMemberDialog(member)}>
                          View Details
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => {
                            setSelectedMember(member)
                            setOpenPaymentDialog(true)
                          }}
                        >
                          Pay
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Dialog open={openMemberDialog} onOpenChange={setOpenMemberDialog}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Member Details</DialogTitle>
                <DialogDescription>Payment history and contribution details</DialogDescription>
              </DialogHeader>
              {selectedMember && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={selectedMember.avatar} alt={selectedMember.name} />
                      <AvatarFallback>{selectedMember.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-lg">{selectedMember.name}</div>
                      <div className="text-sm text-muted-foreground">Member since {selectedMember.joinDate}</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Payment Progress</span>
                      <span className="text-sm font-medium">
                        {Math.round((selectedMember.amountPaid / 3180) * 100)}%
                      </span>
                    </div>
                    <Progress value={(selectedMember.amountPaid / 3180) * 100} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-primary/5 rounded-lg flex flex-col items-center">
                      <Award className="h-5 w-5 text-primary mb-1" />
                      <span className="text-sm text-muted-foreground">Reputation Score</span>
                      <span className="font-bold text-lg">{selectedMember.reputationScore.toFixed(1)}/5</span>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg flex flex-col items-center">
                      <Coins className="h-5 w-5 text-amber-600 mb-1" />
                      <span className="text-sm text-muted-foreground">Contribution Tokens</span>
                      <span className="font-bold text-lg">{selectedMember.contributionTokens || 0}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Payment History</h4>
                    {selectedMember.paymentHistory.map((payment, index) => (
                      <div key={index} className="flex justify-between items-center p-2 border rounded-md">
                        <div className="flex items-center gap-2">
                          {payment.status === "on-time" ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <AlertCircle className="h-4 w-4 text-red-500" />
                          )}
                          <span>{payment.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">RM{payment.amount}</span>
                          <Badge variant={payment.status === "on-time" ? "outline" : "destructive"}>
                            {payment.status === "on-time" ? "On Time" : "Late"}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <DialogFooter>
                <Button
                  onClick={() => {
                    setOpenMemberDialog(false)
                    if (selectedMember) {
                      setOpenPaymentDialog(true)
                    }
                  }}
                >
                  Make a Payment
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </TabsContent>

        <TabsContent value="payments">
          <Card>
            <CardHeader>
              <CardTitle>Payment Status</CardTitle>
              <CardDescription>Track who paid on time and who paid late</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border-green-100">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center text-green-600">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        On-time Payments
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {membersData
                          .filter((m) => !m.isLate)
                          .map((member) => (
                            <div
                              key={member.id}
                              className="flex items-center justify-between p-2 border border-green-100 rounded-md bg-green-50"
                            >
                              <div className="flex items-center gap-2">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={member.avatar} alt={member.name} />
                                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <span className="font-medium">{member.name}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-green-600" />
                                <span className="text-sm">Last paid: {member.lastPaymentDate}</span>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-8 px-2"
                                  onClick={() => {
                                    setSelectedMember(member)
                                    setOpenPaymentDialog(true)
                                  }}
                                >
                                  <CreditCard className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-red-100">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center text-red-600">
                        <AlertCircle className="h-4 w-4 mr-2" />
                        Late Payments
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {membersData
                          .filter((m) => m.isLate)
                          .map((member) => (
                            <div
                              key={member.id}
                              className="flex items-center justify-between p-2 border border-red-100 rounded-md bg-red-50"
                            >
                              <div className="flex items-center gap-2">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={member.avatar} alt={member.name} />
                                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <span className="font-medium">{member.name}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-red-600" />
                                <span className="text-sm">{member.daysLate} days late</span>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-8 px-2"
                                  onClick={() => {
                                    setSelectedMember(member)
                                    setOpenPaymentDialog(true)
                                  }}
                                >
                                  <CreditCard className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="pt-4">
                  <h3 className="font-medium mb-3">Payment Schedule</h3>
                  <div className="space-y-3">
                    {paymentSchedule.map((payment, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">Payment {index + 1}</div>
                          <div className="text-sm text-muted-foreground">Due: {payment.dueDate}</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <div className="font-medium">RM{payment.amount}</div>
                            <div className="text-sm text-muted-foreground">per member</div>
                          </div>
                          <Badge
                            variant={
                              payment.status === "upcoming"
                                ? "outline"
                                : payment.status === "completed"
                                  ? "secondary"
                                  : "default"
                            }
                          >
                            {payment.status === "upcoming"
                              ? "Upcoming"
                              : payment.status === "completed"
                                ? "Completed"
                                : "Current"}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                onClick={() => {
                  setSelectedMember(membersData.find((m) => m.id === 1) || null)
                  setOpenPaymentDialog(true)
                }}
              >
                Make a Payment
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="ranking">
          <Card>
            <CardHeader>
              <CardTitle>Community Ranking</CardTitle>
              <CardDescription>See how your group compares to others</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="font-medium">Your Group Ranking</h3>
                  <div className="p-4 border rounded-lg bg-primary/5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                          12
                        </div>
                        <span className="font-medium">Washing Machine Group #WM25003</span>
                      </div>
                      <Badge variant="secondary">Top 15%</Badge>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="flex flex-col">
                        <span className="text-sm text-muted-foreground">Payment Score</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          <span className="font-medium">4.2/5</span>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm text-muted-foreground">Engagement</span>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-primary" />
                          <span className="font-medium">92%</span>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm text-muted-foreground">Reliability</span>
                        <div className="flex items-center gap-1">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="font-medium">High</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-medium">Rewards & Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="border-primary/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center">
                          <Award className="h-4 w-4 mr-2 text-primary" />
                          Reputation Points
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm">Earn reputation points for on-time payments and group contributions</p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>On-time payment</span>
                            <span className="font-medium">+0.2 points</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Early payment</span>
                            <span className="font-medium">+0.3 points</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Helping other members</span>
                            <span className="font-medium">+0.5 points</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-amber-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center">
                          <Coins className="h-4 w-4 mr-2 text-amber-600" />
                          Contribution Tokens
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm">Collect tokens for future benefits and discounts</p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>On-time payment</span>
                            <span className="font-medium">+30 tokens</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Early payment</span>
                            <span className="font-medium">+50 tokens</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Group milestone achieved</span>
                            <span className="font-medium">+100 tokens</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-medium">Top Performing Groups</h3>
                  <div className="space-y-3">
                    {topGroups.map((group, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${index === 0 ? "bg-yellow-500 text-white" : index === 1 ? "bg-gray-300 text-gray-800" : index === 2 ? "bg-amber-700 text-white" : "bg-gray-100 text-gray-800"}`}
                          >
                            {index + 1}
                          </div>
                          <div>
                            <div className="font-medium">{group.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {group.members} members • RM{group.amount}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                            <span className="ml-1 font-medium">{group.rating}/5</span>
                          </div>
                          <Badge variant="outline">{group.status}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-medium">Individual Member Rankings</h3>
                  <div className="space-y-3">
                    {membersData
                      .sort((a, b) => b.reputationScore - a.reputationScore)
                      .map((member, index) => (
                        <div key={member.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${index === 0 ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}
                            >
                              {index + 1}
                            </div>
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={member.avatar} alt={member.name} />
                              <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{member.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`h-4 w-4 ${star <= member.reputationScore ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                                />
                              ))}
                            </div>
                            <div className="flex items-center gap-1 ml-2">
                              <Coins className="h-4 w-4 text-amber-500" />
                              <span className="text-sm font-medium">{member.contributionTokens || 0}</span>
                            </div>
                            {member.isLate && (
                              <Badge variant="destructive" className="ml-2">
                                Late
                              </Badge>
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Payment Dialog */}
      <Dialog open={openPaymentDialog} onOpenChange={setOpenPaymentDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Make a Payment</DialogTitle>
            <DialogDescription>Pay your monthly installment for the washing machine loan</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            {selectedMember && (
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <Avatar>
                  <AvatarImage src={selectedMember.avatar} alt={selectedMember.name} />
                  <AvatarFallback>{selectedMember.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{selectedMember.name}</div>
                  <div className="text-sm text-muted-foreground">Paid: RM{selectedMember.amountPaid} of RM3,180</div>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="amount">Payment Amount (RM)</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="amount"
                  placeholder="530"
                  className="pl-9"
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(e.target.value)}
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Minimum: RM530</span>
                <span>Pay more to reduce your term</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Payment Method</Label>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid grid-cols-3 gap-4">
                <div>
                  <RadioGroupItem value="card" id="card" className="peer sr-only" />
                  <Label
                    htmlFor="card"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <CreditCard className="mb-3 h-6 w-6" />
                    Card
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="bank" id="bank" className="peer sr-only" />
                  <Label
                    htmlFor="bank"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <DollarSign className="mb-3 h-6 w-6" />
                    Bank
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="ewallet" id="ewallet" className="peer sr-only" />
                  <Label
                    htmlFor="ewallet"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <Coins className="mb-3 h-6 w-6" />
                    E-Wallet
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Payment Date</Label>
              <div className="flex items-center gap-2 p-3 border rounded-md">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>
                  {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </span>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenPaymentDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleMakePayment}>Pay RM{paymentAmount}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Reward Dialog */}
      <Dialog open={showRewardDialog} onOpenChange={setShowRewardDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">Payment Successful!</DialogTitle>
          </DialogHeader>
          <div className="py-10 flex flex-col items-center justify-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>

            <div className="text-center space-y-1">
              <p className="text-lg font-medium">Thank you for your payment</p>
              <p className="text-sm text-muted-foreground">Your payment of RM{paymentAmount} has been processed</p>
            </div>

            <div className="w-full space-y-4">
              <h3 className="text-center font-medium">Rewards Earned</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-primary/5 rounded-lg flex flex-col items-center">
                  <Award className="h-6 w-6 text-primary mb-2" />
                  <span className="text-sm text-muted-foreground">Reputation Points</span>
                  <span className="text-xl font-bold">+{earnedRewards.reputation}</span>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg flex flex-col items-center">
                  <Coins className="h-6 w-6 text-amber-600 mb-2" />
                  <span className="text-sm text-muted-foreground">Contribution Tokens</span>
                  <span className="text-xl font-bold">+{earnedRewards.tokens}</span>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button className="w-full" onClick={closeRewardDialog}>
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

// Update the Member type to include contribution tokens
type Member = {
  id: number
  name: string
  avatar: string
  joinDate: string
  amountPaid: number
  isLate: boolean
  lastPaymentDate: string
  daysLate?: number
  reputationScore: number
  contributionTokens?: number
  paymentHistory: {
    date: string
    amount: number
    status: "on-time" | "late"
  }[]
}

// Update the sample data to include contribution tokens
const members: Member[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    joinDate: "Feb 28, 2025",
    amountPaid: 350,
    isLate: false,
    lastPaymentDate: "Mar 15, 2025",
    reputationScore: 4.8,
    contributionTokens: 180,
    paymentHistory: [
      { date: "Mar 15, 2025", amount: 100, status: "on-time" },
      { date: "Feb 15, 2025", amount: 100, status: "on-time" },
      { date: "Jan 15, 2025", amount: 150, status: "on-time" },
    ],
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    joinDate: "Feb 28, 2025",
    amountPaid: 300,
    isLate: false,
    lastPaymentDate: "Mar 14, 2025",
    reputationScore: 4.5,
    contributionTokens: 150,
    paymentHistory: [
      { date: "Mar 14, 2025", amount: 100, status: "on-time" },
      { date: "Feb 15, 2025", amount: 100, status: "on-time" },
      { date: "Jan 15, 2025", amount: 100, status: "on-time" },
    ],
  },
  {
    id: 3,
    name: "David Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    joinDate: "Mar 1, 2025",
    amountPaid: 250,
    isLate: true,
    lastPaymentDate: "Mar 18, 2025",
    daysLate: 3,
    reputationScore: 3.2,
    contributionTokens: 60,
    paymentHistory: [
      { date: "Mar 18, 2025", amount: 100, status: "late" },
      { date: "Feb 17, 2025", amount: 100, status: "late" },
      { date: "Jan 15, 2025", amount: 50, status: "on-time" },
    ],
  },
  {
    id: 4,
    name: "Emily Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    joinDate: "Feb 28, 2025",
    amountPaid: 400,
    isLate: false,
    lastPaymentDate: "Mar 12, 2025",
    reputationScore: 5.0,
    contributionTokens: 220,
    paymentHistory: [
      { date: "Mar 12, 2025", amount: 150, status: "on-time" },
      { date: "Feb 12, 2025", amount: 150, status: "on-time" },
      { date: "Jan 12, 2025", amount: 100, status: "on-time" },
    ],
  },
  {
    id: 5,
    name: "Jessica Patel",
    avatar: "/placeholder.svg?height=40&width=40",
    joinDate: "Mar 2, 2025",
    amountPaid: 200,
    isLate: true,
    lastPaymentDate: "Mar 20, 2025",
    daysLate: 5,
    reputationScore: 2.8,
    contributionTokens: 40,
    paymentHistory: [
      { date: "Mar 20, 2025", amount: 100, status: "late" },
      { date: "Feb 18, 2025", amount: 100, status: "late" },
    ],
  },
]

// Update payment schedule to reflect the 6% interest model
const paymentSchedule = [
  { dueDate: "Jan 15, 2025", amount: 530, status: "completed" },
  { dueDate: "Feb 15, 2025", amount: 530, status: "completed" },
  { dueDate: "Mar 15, 2025", amount: 530, status: "current" },
  { dueDate: "Apr 15, 2025", amount: 530, status: "upcoming" },
  { dueDate: "May 15, 2025", amount: 530, status: "upcoming" },
  { dueDate: "Jun 15, 2025", amount: 530, status: "upcoming" },
]

// Update top groups data
const topGroups = [
  { name: "Home Renovation Group #HR1002", members: 8, amount: 5000, rating: 5.0, status: "Active" },
  { name: "Car Purchase Group #CP3045", members: 6, amount: 12000, rating: 4.9, status: "Active" },
  { name: "Education Fund #ED2078", members: 10, amount: 8000, rating: 4.8, status: "Active" },
  { name: "Washing Machine Group #WM25003", members: 5, amount: 2500, rating: 4.2, status: "Active" },
  { name: "Wedding Fund #WF1089", members: 7, amount: 7500, rating: 4.0, status: "Completed" },
]

