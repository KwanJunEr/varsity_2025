"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function WalletCard() {
  const [copied, setCopied] = useState(false)

  // Random Ethereum address
  const walletAddress = "0x71C7656EC7ab88b098defB751B7401B5f6d8976F"

  // Hide middle digits for privacy
  const displayAddress = `${walletAddress.substring(0, 6)}...${walletAddress.substring(walletAddress.length - 4)}`

  const fullAddress = walletAddress

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="w-[500px] min-h-[250px]">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Your Wallet</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="font-mono text-sm bg-muted p-2 rounded-md">{displayAddress}</div>
          <Button variant="ghost" size="icon" onClick={copyToClipboard} className="h-8 w-8">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
        <div className="mt-2 text-sm text-muted-foreground">Connected to Ethereum Mainnet</div>
      </CardContent>
    </Card>
  )
}

