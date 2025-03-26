"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, Landmark, Calendar, CheckCircle2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface PaymentModalProps {
  currentPhase: number
  phaseAmount: number
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function PaymentModal({ currentPhase, phaseAmount, open, onOpenChange }: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [paymentAmount, setPaymentAmount] = useState(phaseAmount.toString())
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const handlePayment = () => {
    // In a real app, this would process the payment
    setPaymentSuccess(true)

    // Reset after 3 seconds and close modal
    setTimeout(() => {
      setPaymentSuccess(false)
      onOpenChange(false)
    }, 3000)
  }

  const handleClose = () => {
    // Reset state when modal is closed
    setPaymentSuccess(false)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Make a Payment</DialogTitle>
          <DialogDescription>Pay toward Phase {currentPhase} of your microloan</DialogDescription>
        </DialogHeader>

        {paymentSuccess ? (
          <div className="flex flex-col items-center justify-center py-6 space-y-4">
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-medium text-center">Payment Successful!</h3>
            <p className="text-center text-muted-foreground">
              Your payment has been processed successfully. You've earned 50 contribution tokens and +5 reputation
              points.
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="amount">Payment Amount</Label>
                <div className="flex space-x-2">
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      id="amount"
                      type="text"
                      className="pl-7"
                      value={paymentAmount}
                      onChange={(e) => setPaymentAmount(e.target.value)}
                    />
                  </div>
                  <Select defaultValue="full">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select amount" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full">Full Amount</SelectItem>
                      <SelectItem value="half">Half Amount</SelectItem>
                      <SelectItem value="custom">Custom Amount</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <p className="text-xs text-muted-foreground">Pay the full amount to earn maximum contribution tokens</p>
              </div>

              <div className="space-y-2">
                <Label>Payment Method</Label>
                <RadioGroup
                  defaultValue="card"
                  className="grid grid-cols-3 gap-4"
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                >
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
                      <Landmark className="mb-3 h-6 w-6" />
                      Bank
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="scheduled" id="scheduled" className="peer sr-only" />
                    <Label
                      htmlFor="scheduled"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <Calendar className="mb-3 h-6 w-6" />
                      Scheduled
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {paymentMethod === "card" && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input id="card-number" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === "bank" && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="account-name">Account Name</Label>
                    <Input id="account-name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="account-number">Account Number</Label>
                    <Input id="account-number" placeholder="000123456789" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="routing">Routing Number</Label>
                    <Input id="routing" placeholder="123456789" />
                  </div>
                </div>
              )}

              {paymentMethod === "scheduled" && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="schedule-date">Payment Date</Label>
                    <Input id="schedule-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="payment-method">Payment Method</Label>
                    <Select defaultValue="card">
                      <SelectTrigger id="payment-method">
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="card">Credit/Debit Card</SelectItem>
                        <SelectItem value="bank">Bank Account</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="frequency">Frequency</Label>
                    <Select defaultValue="once">
                      <SelectTrigger id="frequency">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="once">One-time Payment</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="biweekly">Bi-weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Payment Amount:</span>
                  <span className="font-bold">${paymentAmount}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-sm font-medium">Processing Fee:</span>
                  <span className="font-medium">$0.00</span>
                </div>
                <div className="flex items-center justify-between mt-1 border-t pt-1">
                  <span className="text-sm font-medium">Total:</span>
                  <span className="font-bold">${paymentAmount}</span>
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={handleClose}>
                Cancel
              </Button>
              <Button onClick={handlePayment}>Process Payment</Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

