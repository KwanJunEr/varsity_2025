"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function PetPage() {
  const [reputation, setReputation] = useState(0);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    const storedReputation = localStorage.getItem("reputation");
    const initialReputation = storedReputation
      ? parseInt(storedReputation, 10)
      : 0;
    setReputation(initialReputation);
    updateLevel(initialReputation);
  }, []);

  const updateLevel = (rep: number) => {
    const newLevel = Math.floor(rep / 100) + 1;
    setLevel(newLevel);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Navbar />
      <h1 className="text-3xl font-bold mb-6">Cat Level Tracker</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
        <Image
          src="/cat.jpeg"
          alt="Cat"
          width={300}
          height={300}
          className="rounded-md mb-4"
        />
        <p className="text-xl font-semibold">Level: {level}</p>
        <p className="text-lg">Reputation: {reputation}</p>
      </div>
    </div>
  );
}
