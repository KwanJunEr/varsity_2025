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

export default function BorrowerPage() {
  const [loans, setLoans] = useState<Loan[]>(initialLoans);
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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex">
          <ChatArea />
          <GameScene />
        </div>
        <div className="w-full max-w-4xl">
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold">Your Microloans</h2>
            <div className="text-sm">
              <span className="mr-4">Points: {userMetrics.points}</span>
              <span>Reputation: {userMetrics.reputation}</span>
            </div>
          </div>
          <MicroLoanTable loans={loans} onPayment={handlePayment} />
        </div>
      </main>
    </div>
  );
}
