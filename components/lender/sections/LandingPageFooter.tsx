import React from 'react'
import Link from 'next/link'
import { Shield } from 'lucide-react'

const LandingPageFooter = () => {
  return (
    <footer className="w-full border-t py-6">
    <div className="px-8 flex flex-col items-center justify-between gap-4 md:flex-row">
      <div className="flex items-center gap-2">
        <Shield className="h-5 w-5 text-primary" />
        <span className="font-semibold">LendDAO</span>
      </div>
      <p className="text-sm text-muted-foreground">© 2025 LendDAO. All rights reserved.</p>
      <div className="flex gap-4">
        <Link href="#" className="text-sm text-muted-foreground hover:underline">
          Terms
        </Link>
        <Link href="#" className="text-sm text-muted-foreground hover:underline">
          Privacy
        </Link>
        <Link href="#" className="text-sm text-muted-foreground hover:underline">
          Contact
        </Link>
      </div>
    </div>
  </footer>
  )
}

export default LandingPageFooter
