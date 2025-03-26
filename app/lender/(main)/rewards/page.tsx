"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
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
import {
  Gift,
  Award,
  ShirtIcon as TShirt,
  Coffee,
  Headphones,
} from "lucide-react";
import { ReactNode } from "react";

export interface Reward {
  id: number;
  name: string;
  description: string;
  points: number;
  icon: ReactNode;
  available: boolean;
}

const Rewards = () => {
  const [userPoints, setUserPoints] = useState(1000);
  const [selectedReward, setSelectedReward] = useState<Reward | null>(null);
  const [redeemQuantity, setRedeemQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const rewards: Reward[] = [
    {
      id: 1,
      name: "LendDAO T-Shirt",
      description: "Premium cotton t-shirt with LendDAO logo",
      points: 200,
      icon: <TShirt className="h-8 w-8" />,
      available: true,
    },
    {
      id: 2,
      name: "Coffee Mug",
      description: "Ceramic mug with LendDAO branding",
      points: 150,
      icon: <Coffee className="h-8 w-8" />,
      available: true,
    },
    {
      id: 3,
      name: "Wireless Headphones",
      description: "High-quality wireless headphones",
      points: 500,
      icon: <Headphones className="h-8 w-8" />,
      available: true,
    },
    {
      id: 4,
      name: "Gift Card",
      description: "$25 gift card for popular online retailers",
      points: 300,
      icon: <Gift className="h-8 w-8" />,
      available: true,
    },
  
  ];

  const handleRedeemClick = (reward: Reward) => {
    setSelectedReward(reward);
    setRedeemQuantity(1);
    setIsModalOpen(true);
  };

  const handleRedeem = () => {
    if (!selectedReward) return;

    const totalCost = selectedReward.points * redeemQuantity;

    if (userPoints >= totalCost) {
      setUserPoints(userPoints - totalCost);
      setIsModalOpen(false);
      setIsSuccessModalOpen(true);
    } else {
    }
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  return (
    <section className="px-2 py-2">
      <div className="px-[300px]">
        <div className="min-w-[1200px]">
          <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Rewards Catalog</h1>
              <p className="text-muted-foreground">
                Redeem your points for exclusive swag and perks
              </p>
            </div>
            <div className="mt-4 sm:mt-0 bg-primary/10 rounded-lg py-3 px-10 flex items-center">
              <Award className="h-6 w-6 text-primary mr-2" />
              <div>
                <p className="text-sm font-medium">Your Points</p>
                <p className="text-2xl font-bold">{userPoints}</p>
              </div>
            </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rewards.map((reward) => (
          <Card key={reward.id} className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="bg-primary/10 p-3 rounded-lg">{reward.icon}</div>
                <Badge variant="outline">{reward.points} points</Badge>
              </div>
              <CardTitle className="mt-4">{reward.name}</CardTitle>
              <CardDescription>{reward.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Button
                className="w-full"
                onClick={() => handleRedeemClick(reward)}
                disabled={userPoints < reward.points || !reward.available}
              >
                Redeem
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Redeem Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Redeem {selectedReward?.name}</DialogTitle>
            <DialogDescription>
              You have {userPoints} points available. Each {selectedReward?.name} costs {selectedReward?.points} points.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Label htmlFor="quantity">Quantity</Label>
            <div className="flex items-center mt-2">
              <Button variant="outline" size="icon" onClick={() => setRedeemQuantity(Math.max(1, redeemQuantity - 1))}>
                -
              </Button>
              <Input
                id="quantity"
                type="number"
                className="mx-2 text-center"
                value={redeemQuantity}
                onChange={(e) => setRedeemQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                min="1"
              />
              <Button variant="outline" size="icon" onClick={() => setRedeemQuantity(redeemQuantity + 1)}>
                +
              </Button>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Total cost: {selectedReward ? selectedReward.points * redeemQuantity : 0} points
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleRedeem}>Confirm Redemption</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Success Modal */}
      <Dialog open={isSuccessModalOpen} onOpenChange={setIsSuccessModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Redemption Successful!</DialogTitle>
            <DialogDescription>
              You have successfully redeemed {redeemQuantity} {selectedReward?.name}
              {redeemQuantity > 1 ? "s" : ""}.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 flex flex-col items-center">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <Award className="h-12 w-12 text-green-600" />
            </div>
            <p className="text-center">
              Your new balance is <strong>{userPoints}</strong> points.
            </p>
            <p className="text-sm text-muted-foreground mt-2 text-center">
              Our team will process your redemption and contact you with further details.
            </p>
          </div>
          <DialogFooter>
            <Button onClick={closeSuccessModal}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

        </div>
      </div>
    </section>
  );
};

export default Rewards;
