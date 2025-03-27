"use client"

import { useState } from "react"
import { HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HelpModal() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <HelpCircle className="h-4 w-4" />
          <span>Help</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>How to Use the Microloan System</DialogTitle>
          <DialogDescription>Follow these steps to navigate and get the most out of our platform.</DialogDescription>
        </DialogHeader>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I apply for a microloan?</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Go to the Chat Area on the left side of the screen</li>
                <li>Describe your situation and loan requirements</li>
                <li>The AI will evaluate your request based on your reputation and risk score</li>
                <li>Follow the prompts to complete your application</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>How is my risk score calculated?</AccordionTrigger>
            <AccordionContent>
              Your risk score is determined by your reputation NFT points, previous loan history, and the details of
              your current request. Higher reputation points lead to better loan terms and higher approval chances.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>How do I make payments?</AccordionTrigger>
            <AccordionContent>
              You can make payments directly from the Microloans table. Click the "Pay" button next to any active loan
              to make a payment. Each successful payment increases your reputation and points.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>How do I increase my reputation?</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Make loan payments on time</li>
                <li>Complete loan terms successfully</li>
                <li>Maintain a good borrowing history</li>
                <li>Participate in community activities</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DialogContent>
    </Dialog>
  )
}

