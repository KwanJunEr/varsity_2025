"use client"
import React, { useState } from 'react'
import { Wallet } from 'lucide-react'
import { Button } from "@/components/ui/button"
import LoginModal from './LoginModal'
import { cn } from "@/lib/utils"

const ConnectWalletButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
        <Button
            variant={"outline"}
            size = "default"
            onClick={()=> setIsModalOpen(true) }
            className={cn("gap-2")}
        >
            <Wallet className='h-4 w-4'/>
            Connect Wallet
        </Button>
    </>
  )
}

export default ConnectWalletButton
