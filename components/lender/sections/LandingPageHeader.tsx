import React from 'react'
import ConnectWalletButton from '../components/ConnectWalletButton'
import { Shield } from 'lucide-react'

const LandingPageHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className='justify-between h-16 flex px-8 py-4'>
            <div className='flex items-center gap-2'>
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">LendDAO</span>
            </div>
            <ConnectWalletButton/>
        </div>
    </header>
  )
}

export default LandingPageHeader
