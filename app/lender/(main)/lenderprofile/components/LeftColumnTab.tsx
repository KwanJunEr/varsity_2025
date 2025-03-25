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
import PoolsTabContent from './PoolsTabContent';
import PerksTabContent from './PerksTabContent';
import AchievementTabsContent from './AchievementTabsContent';
import UpcomingOpportunities from './UpcomingOpportunities';


const LeftColumnTab = () => {
  return (
    <div className="md:col-span-2 space-y-6 min-w-[800px]">
    <Tabs defaultValue="pools" className="w-full">
      <TabsList className="w-full grid grid-cols-3">
        <TabsTrigger value="pools">Pools</TabsTrigger>
        <TabsTrigger value="perks">Perks</TabsTrigger>
        <TabsTrigger value="achievements">Achievements</TabsTrigger>
      </TabsList>

      <PoolsTabContent/>
      <PerksTabContent/>
      <AchievementTabsContent/>
     

    </Tabs>
    <div className='mt-3'>
        <UpcomingOpportunities/>
    </div>
  </div>
  )
}

export default LeftColumnTab
