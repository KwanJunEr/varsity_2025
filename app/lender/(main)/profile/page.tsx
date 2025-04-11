"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Award, Wallet, TrendingUp, Users, Zap, ChevronRight, Sparkles } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ProfileHeader from "./components/ProfileHeader"
import LeftColumnTab from "./components/LeftColumnTab"
import RightColumnContent from "./components/RightColumnContent"


// Mock data - in a real app this would come from your Web3 connection
const mockUserData = {
    name: "Alex DeFi",
    handle: "@alexdefi",
    level: 3,
    xp: 2750,
    xpToNextLevel: 4000,
    totalPooled: 15420,
    profileImage: "/placeholder.svg?height=100&width=100",
    joinDate: "May 2023",
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
  
const Profile = () => {

  return (
    <section className="px-2 py-2">
        <div className="px-[300px]">
             <ProfileHeader/>
             {/*Main Content*/}
             <div className="min-w-[1200px]">

             
             <div className="grid grid-cols-1 md:grid-cols-6 gap-9">
                <div className="md:col-span-4">
                    <LeftColumnTab/>
                </div>
                {/*Left Column*/}
                <div className="md:col-span-2">
                 <RightColumnContent/>
                </div>
                {/*Right Column*/}
              
            </div>
            </div>
        </div>
       
    </section>
  )
}

export default Profile
