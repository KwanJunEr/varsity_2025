"use client";

import { useState, useEffect } from "react";
import GameScene from "@/components/custom/GameScene";
import ChatArea from "@/components/custom/ChatArea";
import MicroLoanTable from "@/components/MicroLoanTable";
import {
  initialLoans,
  initialUserMetrics,
  Loan,
  UserMetrics,
} from "@/data/loanData";
import WalletCard from "@/components/borrower/Wallet";
import StatsCard from "@/components/borrower/StatsCard";
import SmartChatArea from "@/components/borrower/CustomChatArea";
import { Button } from "@/components/ui/button";
import LoanAnalysis from "@/components/borrower/LoanAnalysis";

export default function BorrowerPage() {
  const [loans, setLoans] = useState<Loan[]>(initialLoans);
  const [results, setResults] = useState(false)
  const [userMetrics, setUserMetrics] =
    useState<UserMetrics>(initialUserMetrics);

  useEffect(() => {
    const storedPoints = localStorage.getItem("points");
    const storedReputation = localStorage.getItem("reputation");

    if (storedPoints || storedReputation) {
      setUserMetrics({
        points: storedPoints
          ? parseInt(storedPoints, 10)
          : initialUserMetrics.points,
        reputation: storedReputation
          ? parseInt(storedReputation, 10)
          : initialUserMetrics.reputation,
      });
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedPoints = localStorage.getItem("points");
      const storedReputation = localStorage.getItem("reputation");
      setUserMetrics({
        points: storedPoints
          ? parseInt(storedPoints, 10)
          : initialUserMetrics.points,
        reputation: storedReputation
          ? parseInt(storedReputation, 10)
          : initialUserMetrics.reputation,
      });
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handlePayment = (loanId: string) => {
    setLoans((prevLoans) =>
      prevLoans.map((loan) =>
        loan.id === loanId ? { ...loan, status: "paid" } : loan
      )
    );

    const newPoints = userMetrics.points + 200;
    const newReputation = userMetrics.reputation + 10;

    localStorage.setItem("points", newPoints.toString());
    localStorage.setItem("reputation", newReputation.toString());
    setUserMetrics({
      points: newPoints,
      reputation: newReputation,
    });
  };


  return (
    <section>
      <div className="flex flex-row min-h-[200px] min-w-[500px] mt-[70px] items-center justify-center gap-5">
        <WalletCard />
        <StatsCard/>
      </div>
      <div>
        <SmartChatArea/>
      </div>
      <div className="ml-[250px] mt-5">
        <Button onClick={()=>setResults(!results)}>See Results</Button>
        <div className="mt-5 mb-5">
           {results && <><LoanAnalysis/></>}
        </div>
      </div>
     
      
    </section>
  );
}
