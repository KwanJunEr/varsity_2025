import React from "react";
import ConnectWalletButton from "../../custom/ConnectWalletButton";
import { Shield } from "lucide-react";

const LandingPageHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="justify-between h-16 flex px-8 py-4">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">LendSync</span>
        </div>
        <div className="flex gap-x-4">
          <ConnectWalletButton url="/borrower" title="Borrower Login" />
          <ConnectWalletButton url="/lender/dashboard" title="Lender Login" />
        </div>
      </div>
    </header>
  );
};

export default LandingPageHeader;
