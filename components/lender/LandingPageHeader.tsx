import React from 'react'
import { ArrowRight, ChevronRight, Shield, Star, Wallet } from "lucide-react"
import Link from "next/link"
import ConnectWalletButton from './ConnectWalletButton'

const LandingPageHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-10 py-1">
        <div className='justify-between container flex h-16 items-center'>
            <div className='flex items-center gap-2'>
                <Shield className='h-6 w-6 text-primary'/>
                <span className='text-xl font-bold'>LendDAO</span>
            </div>
            <ConnectWalletButton/>
        </div>
    </header>
  )
}

export default LandingPageHeader
