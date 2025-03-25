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
import DashboardStatistics from "./components/DashboardStatistics";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPool, setSelectedPool] = useState<string | null>(null);
  const [amount, setAmount] = useState("");
  const [step, setStep] = useState(1);
  const [conversionData, setConversionData] = useState({
    rm: 0,
    usdc: 0,
    lenderCoin: 0,
    xp: 0,
    points: 0,
    level: 0,
  });

  // Dashboard statistics
  const [stats, setStats] = useState({
    totalApplications: 342,
    totalContributors: 1289,
    totalContributed: 70000,
  });

  // State for loan pools
  const [loanPools, setLoanPools] = useState([
    {
      id: "education",
      title: "Education Micrloan Fund Pool",
      description: "Help students achieve their academic goals",
      icon: BookOpen,
      current: 15000,
      target: 50000,
      color: "bg-blue-500",
      activeLoans: 28,
      avgLoanSize: 2500,
    },
    {
      id: "business",
      title: "Business Startup Micrloan Fund Pool",
      description: "Support entrepreneurs building new businesses",
      icon: Briefcase,
      current: 25000,
      target: 40000,
      color: "bg-green-500",
      activeLoans: 42,
      avgLoanSize: 5000,
    },
    {
      id: "personal",
      title: "Personal Needs Micrloan Fund Pool",
      description: "Assist individuals with personal financial needs",
      icon: ShoppingBag,
      current: 10000,
      target: 30000,
      color: "bg-purple-500",
      activeLoans: 35,
      avgLoanSize: 1800,
    },
    {
      id: "housing",
      title: "Housing Improvement Micrloan Fund Pool",
      description: "Help families improve their living conditions",
      icon: Home,
      current: 20000,
      target: 60000,
      color: "bg-orange-500",
      activeLoans: 22,
      avgLoanSize: 4200,
    },
  ]);

  const handleAddFund = (poolId: string) => {
    setSelectedPool(poolId);
    setIsModalOpen(true);
    setStep(1);
    setAmount("");
  };

  const handleAmountSubmit = () => {
    if (!amount || isNaN(Number.parseFloat(amount))) return;

    setStep(2);

    // Simulate conversion calculation
    setTimeout(() => {
      const rmAmount = Number.parseFloat(amount);
      const usdcAmount = rmAmount * 0.21; // Example conversion rate
      const lenderCoinAmount = usdcAmount * 1.5; // Example conversion rate
      const xpEarned = Math.floor(lenderCoinAmount * 10);
      const pointsEarned = Math.floor(lenderCoinAmount * 5);
      const newLevel =  3; // Simple level calculation

      setConversionData({
        rm: rmAmount,
        usdc: usdcAmount,
        lenderCoin: lenderCoinAmount,
        xp: xpEarned,
        points: pointsEarned,
        level: newLevel,
      });

      setStep(3);
    }, 1500);
  };

  const handleConfirm = () => {
    setStep(4);

    // Simulate processing
    setTimeout(() => {
      setStep(5); // Show rewards step
    }, 1500);
  };

  const handleComplete = () => {
    // Update the pool's current amount
    if (selectedPool) {
      const updatedPools = loanPools.map((pool) => {
        if (pool.id === selectedPool) {
          return {
            ...pool,
            current: pool.current + conversionData.rm,
          };
        }
        return pool;
      });

      setLoanPools(updatedPools);

      // Update total contributed
      setStats({
        ...stats,
        totalContributors: stats.totalContributors + 1,
        totalContributed: stats.totalContributed + conversionData.rm,
      });
    }

    setIsModalOpen(false);
    setStep(1);
  };

  const currentPool = selectedPool
    ? loanPools.find((pool) => pool.id === selectedPool)
    : null;

  // Calculate total contributed across all pools
  const totalPoolContributions = loanPools.reduce(
    (sum, pool) => sum + pool.current,
    0
  );
  return (
    <section className="px-2 py-2">
      <div className="px-[300px]">
        {/*Title*/}
        <div className="flex flex-col space-y-2 mt-3">
          <h1 className="text-3xl font-bold tracking-tight">
            Microloan Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage your contributions and track pool progress
          </p>
        </div>

        {/*Main Content*/}
        <div className="mt-5 min-w-[1200px]">
          <DashboardStatistics/>
          
      <div>
        <h2 className="text-xl font-semibold mb-4 mt-4">Available MicroLoan Pools</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {loanPools.map((pool) => (
            <Card key={pool.id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className={`p-2 rounded-md ${pool.color}`}>
                    <pool.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <CardTitle className="text-lg mt-2">{pool.title}</CardTitle>
                <CardDescription>{pool.description}</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">{Math.round((pool.current / pool.target) * 100)}%</span>
                  </div>
                  <Progress value={(pool.current / pool.target) * 100} className="h-2" />
                  <div className="flex justify-between text-sm pt-1">
                    <span className="text-muted-foreground">RM {pool.current.toLocaleString()}</span>
                    <span className="text-muted-foreground">RM {pool.target.toLocaleString()}</span>
                  </div>

                  {/* Microloan Information */}
                  <div className="mt-4 pt-3 border-t">
                    <div className="flex justify-between text-sm">
                      <span>Active Microloans:</span>
                      <span className="font-medium">{pool.activeLoans}</span>
                    </div>
                    <div className="flex justify-between text-sm mt-1">
                      <span>Avg. Loan Size:</span>
                      <span className="font-medium">RM {pool.avgLoanSize.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={() => handleAddFund(pool.id)}>
                  <Plus className="mr-2 h-4 w-4" /> Add Fund
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {step === 1 && "Add Funds"}
              {step === 2 && "Converting Currency"}
              {step === 3 && "Confirm Contribution"}
              {step === 4 && "Processing..."}
              {step === 5 && "Rewards Available!"}
            </DialogTitle>
            <DialogDescription>
              {step === 1 && `Contributing to ${currentPool?.title}`}
              {step === 2 && "Please wait while we convert your currency"}
              {step === 3 && "Review your contribution details"}
              {step === 4 && "Finalizing your contribution"}
              {step === 5 && "Complete your contribution to earn these rewards"}
            </DialogDescription>
          </DialogHeader>

          {step === 1 && (
            <>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="amount">Amount (RM)</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="Enter amount in RM"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleAmountSubmit}>Continue</Button>
              </DialogFooter>
            </>
          )}

          {step === 2 && (
            <div className="py-6 flex flex-col items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
              <p className="text-center text-sm text-muted-foreground">Converting RM to USDC to LenderCoin...</p>
            </div>
          )}

          {step === 3 && (
            <>
              <div className="grid gap-4 py-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>Amount (RM)</span>
                    <span className="font-medium">RM {conversionData.rm.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>USDC Equivalent</span>
                    <span className="font-medium">${conversionData.usdc.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>LenderCoin</span>
                    <span className="font-medium">{conversionData.lenderCoin.toFixed(2)} LC</span>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleConfirm}>Confirm Contribution</Button>
              </DialogFooter>
            </>
          )}

          {step === 4 && (
            <div className="py-6 flex flex-col items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
              <p className="text-center text-sm text-muted-foreground">Processing your contribution...</p>
            </div>
          )}

          {step === 5 && (
            <>
              <div className="grid gap-4 py-4">
                <div className="flex flex-col items-center justify-center space-y-6">
                  <div className="bg-primary/10 p-6 rounded-full">
                    <Sparkles className="h-12 w-12 text-primary" />
                  </div>

                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-bold">Rewards Available!</h3>
                    <p className="text-muted-foreground">Complete your contribution to earn:</p>
                  </div>

                  <div className="w-full space-y-4 pt-4">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="flex items-center">
                        <Sparkles className="h-4 w-4 text-yellow-500 mr-1" />
                        XP to Earn
                      </span>
                      <span className="font-medium">+{conversionData.xp} XP</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="flex items-center">
                        <BadgePercent className="h-4 w-4 text-green-500 mr-1" />
                        Contribution Points
                      </span>
                      <span className="font-medium">+{conversionData.points} points</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span>Level Progress</span>
                      <span className="font-medium">Level {conversionData.level}</span>
                    </div>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleComplete}>Complete Contribution</Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    
          
        </div>
        
      </div>
    </section>
  );
};

export default Dashboard;
