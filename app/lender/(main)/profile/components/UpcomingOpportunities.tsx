"use client";
import React from 'react'
import { mockUserData } from '../mockUserData'
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

const UpcomingOpportunities = () => {
  return (
   <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6, duration: 0.5 }}
             >
               <Card>
                 <CardHeader className="pb-2">
                   <CardTitle>Upcoming Opportunities</CardTitle>
                 </CardHeader>
                 <CardContent>
                   <div className="space-y-3">
                     <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                       <div className="bg-blue-100 text-blue-700 p-2 rounded-full">
                         <Users className="h-4 w-4" />
                       </div>
                       <div className="flex-1 min-w-0">
                         <p className="font-medium truncate">New Renewable Energy Pool</p>
                         <p className="text-xs text-muted-foreground">Launching in 2 days</p>
                       </div>
                       <Badge>8.5% APY</Badge>
                     </div>
   
                     <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                       <div className="bg-green-100 text-green-700 p-2 rounded-full">
                         <TrendingUp className="h-4 w-4" />
                       </div>
                       <div className="flex-1 min-w-0">
                         <p className="font-medium truncate">Education Pool Expansion</p>
                         <p className="text-xs text-muted-foreground">Funding goal: $50,000</p>
                       </div>
                       <Badge variant="outline">Coming Soon</Badge>
                     </div>
                   </div>
                 </CardContent>
               </Card>
             </motion.div>
  )
}

export default UpcomingOpportunities
