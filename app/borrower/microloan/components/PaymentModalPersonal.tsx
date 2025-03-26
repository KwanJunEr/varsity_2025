"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  CreditCard,
  CheckCircle2,
  Wallet,
  BanknoteIcon as Bank,
  Coins,
  Trophy,
  ArrowRight,
  Gift,
  Star,
  TrendingUp,
} from "lucide-react"

interface PaymentModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  amount?: number
}

export default function PaymentModal({ open, onOpenChange, amount = 250 }: PaymentModalProps) {
  const [step, setStep] = useState<"method" | "details" | "processing" | "success">("method")
  const [paymentMethod, setPaymentMethod] = useState<string>("card")

  const handleContinue = () => {
    if (step === "method") setStep("details")
    else if (step === "details") {
      setStep("processing")
      // Simulate processing time
      setTimeout(() => {
        setStep("success")
        // Auto-close after showing success
        setTimeout(() => {
          onOpenChange(false)
          // Reset for next time
          setTimeout(() => {
            setStep("method")
          }, 300)
        }, 3000)
      }, 2000)
    }
  }

  const handleBack = () => {
    if (step === "details") setStep("method")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          {step !== "success" && (
            <>
              <DialogTitle>Make a Payment</DialogTitle>
              <DialogDescription>Pay your monthly installment of ${amount.toFixed(2)}</DialogDescription>
            </>
          )}
          {step === "success" && (
            <>
              <DialogTitle className="text-center text-green-600 flex items-center justify-center gap-2">
                <CheckCircle2 className="h-6 w-6" />
                Payment Successful
              </DialogTitle>
              <DialogDescription className="text-center">
                Your payment of ${amount.toFixed(2)} has been processed
              </DialogDescription>
            </>
          )}
        </DialogHeader>

        {step !== "success" && (
          <div className="mb-4">
            <div className="flex justify-between mb-2 text-sm">
              <span>Select payment method</span>
              <span>Enter details</span>
              <span>Confirmation</span>
            </div>
            <Progress value={step === "method" ? 33 : step === "details" ? 66 : 100} className="h-2" />
          </div>
        )}

        {step === "method" && (
          <div className="space-y-4">
            <RadioGroup defaultValue="card" value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div
                  className={`rounded-md border p-4 cursor-pointer transition-all ${paymentMethod === "card" ? "border-primary bg-primary/5 shadow-sm" : "hover:bg-accent hover:text-accent-foreground"}`}
                  onClick={() => setPaymentMethod("card")}
                >
                  <RadioGroupItem value="card" id="card" className="sr-only" />
                  <Label htmlFor="card" className="flex flex-col items-center gap-3 cursor-pointer">
                    <CreditCard
                      className={`h-8 w-8 ${paymentMethod === "card" ? "text-primary" : "text-muted-foreground"} transition-colors`}
                    />
                    <div className="font-medium text-center">Card</div>
                  </Label>
                </div>

                <div
                  className={`rounded-md border p-4 cursor-pointer transition-all ${paymentMethod === "bank" ? "border-primary bg-primary/5 shadow-sm" : "hover:bg-accent hover:text-accent-foreground"}`}
                  onClick={() => setPaymentMethod("bank")}
                >
                  <RadioGroupItem value="bank" id="bank" className="sr-only" />
                  <Label htmlFor="bank" className="flex flex-col items-center gap-3 cursor-pointer">
                    <Bank
                      className={`h-8 w-8 ${paymentMethod === "bank" ? "text-primary" : "text-muted-foreground"} transition-colors`}
                    />
                    <div className="font-medium text-center">Bank</div>
                  </Label>
                </div>

                <div
                  className={`rounded-md border p-4 cursor-pointer transition-all ${paymentMethod === "other" ? "border-primary bg-primary/5 shadow-sm" : "hover:bg-accent hover:text-accent-foreground"}`}
                  onClick={() => setPaymentMethod("other")}
                >
                  <RadioGroupItem value="other" id="other" className="sr-only" />
                  <Label htmlFor="other" className="flex flex-col items-center gap-3 cursor-pointer">
                    <Wallet
                      className={`h-8 w-8 ${paymentMethod === "other" ? "text-primary" : "text-muted-foreground"} transition-colors`}
                    />
                    <div className="font-medium text-center">Others</div>
                  </Label>
                </div>
              </div>
            </RadioGroup>

            <div className="bg-muted/50 p-3 rounded-md">
              <div className="flex items-start gap-2">
                <Gift className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Earn rewards with this payment</p>
                  <p className="text-xs text-muted-foreground">
                    Make your payment on time to earn contribution coins and increase your reputation score!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === "details" && (
          <div className="space-y-4">
            {paymentMethod === "card" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input id="cardName" placeholder="John Smith" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
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
                  <Label htmlFor="accountName">Account Holder Name</Label>
                  <Input id="accountName" placeholder="John Smith" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="accountNumber">Account Number</Label>
                  <Input id="accountNumber" placeholder="123456789" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="routingNumber">Routing Number</Label>
                  <Input id="routingNumber" placeholder="987654321" />
                </div>
              </div>
            )}

            {paymentMethod === "other" && (
              <div className="space-y-4">
                <Tabs defaultValue="paypal">
                  <TabsList className="grid grid-cols-3 w-full">
                    <TabsTrigger value="paypal">PayPal</TabsTrigger>
                    <TabsTrigger value="applepay">Apple Pay</TabsTrigger>
                    <TabsTrigger value="googlepay">Google Pay</TabsTrigger>
                  </TabsList>
                  <TabsContent value="paypal" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="paypalEmail">PayPal Email</Label>
                      <Input id="paypalEmail" type="email" placeholder="your@email.com" />
                    </div>
                  </TabsContent>
                  <TabsContent value="applepay" className="pt-4">
                    <div className="border rounded-md p-6 text-center">
                      <p className="text-sm text-muted-foreground mb-4">Click the button below to pay with Apple Pay</p>
                      <Button className="w-full bg-black text-white hover:bg-black/90">Pay with Apple Pay</Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="googlepay" className="pt-4">
                    <div className="border rounded-md p-6 text-center">
                      <p className="text-sm text-muted-foreground mb-4">
                        Click the button below to pay with Google Pay
                      </p>
                      <Button className="w-full bg-white text-black border border-gray-300 hover:bg-gray-50">
                        Pay with Google Pay
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}

            {paymentMethod === "points" && (
              <div className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-md">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Available Points</span>
                    <span className="font-bold">12,500</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Points Required</span>
                    <span className="font-bold">25,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Points Deficit</span>
                    <span className="font-bold text-red-500">12,500</span>
                  </div>
                </div>

                <div className="bg-amber-50 p-3 rounded-md text-amber-900 dark:bg-amber-950 dark:text-amber-200">
                  <p className="text-sm">
                    You don't have enough points for this payment. Please select another payment method or make a
                    partial payment with points.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pointsToUse">Points to Use</Label>
                  <Input id="pointsToUse" type="number" defaultValue="12500" max="12500" />
                </div>

                <div className="space-y-2">
                  <Label>Remaining Amount to Pay: $125.00</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="w-full">
                      Pay Remaining with Card
                    </Button>
                    <Button variant="outline" className="w-full">
                      Pay Remaining with Bank
                    </Button>
                  </div>
                </div>
              </div>
            )}

            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Payment Amount</span>
                <span className="font-medium">${amount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Processing Fee</span>
                <span className="font-medium">$0.00</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${amount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}

        {step === "processing" && (
          <div className="py-8 flex flex-col items-center justify-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-lg font-medium">Processing your payment</p>
            <p className="text-sm text-muted-foreground">Please wait while we process your payment...</p>
          </div>
        )}

        {step === "success" && (
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center dark:bg-green-950 dark:border-green-900">
              <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto mb-2 dark:text-green-400" />
              <p className="text-lg font-medium text-green-800 dark:text-green-300">Payment Successful!</p>
              <p className="text-sm text-green-700 dark:text-green-400">
                Your payment of ${amount.toFixed(2)} has been processed successfully.
              </p>
              <p className="text-sm text-green-700 mt-2 dark:text-green-400">Transaction ID: #PAY-2025-04-15-78921</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-center">Rewards Earned</h3>

              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="flex justify-center mb-2">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Coins className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold">+250</div>
                    <p className="text-sm text-muted-foreground">Contribution Coins</p>
                    <div className="mt-2 text-xs text-primary">
                      <span className="flex items-center justify-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        25% bonus for on-time payment
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="flex justify-center mb-2">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Trophy className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold">+15</div>
                    <p className="text-sm text-muted-foreground">Reputation Points</p>
                    <div className="mt-2 text-xs text-primary">
                      <span className="flex items-center justify-center gap-1">
                        <Star className="h-3 w-3" />3 month on-time streak!
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <p className="text-center text-sm text-muted-foreground">Auto-closing in a moment...</p>
            </div>
          </div>
        )}

        <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-between sm:space-x-2">
          {step === "details" && (
            <Button variant="outline" onClick={handleBack}>
              Back
            </Button>
          )}

          {step !== "processing" && step !== "success" && (
            <Button onClick={handleContinue}>
              {step === "method" && "Continue"}
              {step === "details" && "Make Payment"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

