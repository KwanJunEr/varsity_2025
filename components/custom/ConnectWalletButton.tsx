"use client";
import React from "react";
import { useState } from "react";
import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import LoginModal from "../lender/components/LoginModal";

const ConnectWalletButton = ({ url = "", title = "" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Button
        variant={"outline"}
        size="default"
        onClick={() => setIsModalOpen(true)}
      >
        <Wallet className="h-4 w-4" />
        {title}
      </Button>
      <LoginModal open={isModalOpen} onOpenChange={setIsModalOpen} url={url} />
    </>
  );
};

export default ConnectWalletButton;
