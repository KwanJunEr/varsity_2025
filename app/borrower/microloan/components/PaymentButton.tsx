"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CreditCard } from "lucide-react"
import PaymentModal from "./PaymentModalPersonal"

export default function PaymentButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button size="sm" onClick={() => setOpen(true)}>
        <CreditCard className="mr-2 h-4 w-4" />
        Make Payment
      </Button>
      <PaymentModal open={open} onOpenChange={setOpen} amount={250} />
    </>
  )
}

