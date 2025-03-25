"use client";

import { useState } from "react";
import {
  BadgePercent,
  BookOpen,
  Briefcase,
  Home,
  Plus,
  ShoppingBag,
  Sparkles,
  Users,
  CreditCard,
  DollarSign,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

const DashboardStatistics = () => {
    const [stats, setStats] = useState({
        totalApplications: 342,
        totalContributors: 1289,
        totalContributed: 70000,
      });
  return (
    <div className="grid gap-4 md:grid-cols-4">
    <Card className="min-w-[200px]">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Average Interest Rate</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center">
          <BadgePercent className="h-4 w-4 text-primary mr-2" />
          <span className="text-2xl font-bold">5.75%</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">Average percentage charged on microloan</p>
      </CardContent>
    </Card>

    <Card className="min-w-[200px]">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Microloan Applications</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center">
          <CreditCard className="h-4 w-4 text-primary mr-2" />
          <span className="text-2xl font-bold">{stats.totalApplications}</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">Active applications</p>
      </CardContent>
    </Card>

    <Card className="min-w-[200px]">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Total Contributors</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center">
          <Users className="h-4 w-4 text-primary mr-2" />
          <span className="text-2xl font-bold">{stats.totalContributors.toLocaleString()}</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">People supporting microloans</p>
      </CardContent>
    </Card>

    <Card className="min-w-[200px]">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Total Contributed</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center">
          <DollarSign className="h-4 w-4 text-primary mr-2" />
          <span className="text-2xl font-bold">RM {stats.totalContributed.toLocaleString()}</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">Across all pools</p>
      </CardContent>
    </Card>

  
  </div>
  )
}

export default DashboardStatistics
