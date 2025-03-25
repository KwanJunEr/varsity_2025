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

const PerksTabContent = () => {
  return (
    <TabsContent value="perks" className="space-y-4 mt-4">
    <Card>
      <CardHeader>
        <CardTitle>Lender Perks</CardTitle>
        <CardDescription>Benefits unlocked at each level</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockUserData.perks.map((perk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className={`p-4 rounded-lg border ${
                perk.level <= mockUserData.level
                  ? "bg-primary/10 border-primary/30"
                  : "bg-muted/30 border-border"
              }`}
            >
              <div className="flex items-start">
                <div
                  className={`p-2 rounded-full mr-3 ${
                    perk.level <= mockUserData.level
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {perk.icon}
                </div>
                <div>
                  <div className="flex items-center">
                    <h3 className="font-medium">{perk.name}</h3>
                    <Badge
                      variant={perk.level <= mockUserData.level ? "default" : "outline"}
                      className="ml-2 text-xs"
                    >
                      Level {perk.level}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{perk.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  </TabsContent>
  )
}

export default PerksTabContent
