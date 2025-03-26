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

const LevelUpBenefits = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.5 }}
  >
    <Card className="bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center">
          <TrendingUp className="h-5 w-5 mr-2" />
          Level Up Benefits
        </CardTitle>
        <CardDescription>Reach Level {mockUserData.level + 1} to unlock:</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 bg-background/80 rounded-lg">
            <Zap className="h-5 w-5 text-yellow-500" />
            <div>
              <p className="font-medium">Reduced Fees</p>
              <p className="text-sm text-muted-foreground">25% lower platform fees</p>
            </div>
          </div>

          <div className="pt-2">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Progress to Level 4</span>
              <span className="text-sm text-muted-foreground">
                {Math.round((mockUserData.xp / mockUserData.xpToNextLevel) * 100)}%
              </span>
            </div>
            <Progress value={(mockUserData.xp / mockUserData.xpToNextLevel) * 100} className="h-2" />
            <p className="text-xs text-muted-foreground mt-1">
              {mockUserData.xpToNextLevel - mockUserData.xp} XP needed
            </p>
          </div>

          <Button className="w-full gap-1">
            <Sparkles className="h-4 w-4 mr-1" />
            Ways to Earn XP
          </Button>
        </div>
      </CardContent>
    </Card>
  </motion.div>
  )
}

export default LevelUpBenefits
