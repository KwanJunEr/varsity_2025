"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Calendar, ArrowRight } from "lucide-react";
import PaymentModal from "./PaymentModal";

interface PaymentInterfaceProps {
  currentPhase: number;
  phaseAmount: number;
  nextPaymentDue: string;
  handlePayment: (amount: number) => void;
}

export default function PaymentInterface({
  currentPhase,
  phaseAmount,
  nextPaymentDue,
  handlePayment,
}: PaymentInterfaceProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const makePayment = () => {
    handlePayment(phaseAmount);
    setIsModalOpen(true);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Make a Payment</CardTitle>
        <CardDescription>
          Pay toward Phase {currentPhase} of your microloan
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-muted p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Current Phase:</span>
            <span className="font-medium">Phase {currentPhase}</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Amount Due:</span>
            <span className="font-bold">${phaseAmount.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Due Date:</span>
            <span className="font-medium">{nextPaymentDue}</span>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium">Payment Benefits</h3>
          <div className="flex items-start space-x-3">
            <CreditCard className="h-4 w-4 text-primary mt-0.5" />
            <div>
              <p className="text-sm">
                Early payment earns 50 extra contribution tokens
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Calendar className="h-4 w-4 text-primary mt-0.5" />
            <div>
              <p className="text-sm">
                On-time payments increase your reputation score
              </p>
            </div>
          </div>
        </div>

        <Button className="w-full" onClick={makePayment}>
          Make Payment <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <PaymentModal
          currentPhase={currentPhase}
          phaseAmount={phaseAmount}
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
        />
      </CardContent>
    </Card>
  );
}
