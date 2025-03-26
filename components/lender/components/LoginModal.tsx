"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  url: string;
}

type LoginStep = "initial" | "loading" | "metamask" | "success";

const LoginModal = ({ open, onOpenChange, url }: LoginModalProps) => {
  const router = useRouter();
  const [step, setStep] = useState<LoginStep>("initial");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("loading");

    // Simulate loading
    setTimeout(() => {
      setStep("metamask");
    }, 1500);
  };

  const handleGoogleLogin = () => {
    setStep("loading");

    // Simulate loading
    setTimeout(() => {
      setStep("metamask");
    }, 1500);
  };

  const handleConnectMetamask = () => {
    setStep("loading");

    // Simulate connecting to MetaMask
    setTimeout(() => {
      setStep("success");

      // Simulate redirect to dashboard
      setTimeout(() => {
        onOpenChange(false);
        // In a real app, you would redirect to the dashboard here
        // window.location.href = "/dashboard"
        onOpenChange(false);
        router.push(url);
      }, 1000);
    }, 1500);
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        {step === "initial" && (
          <>
            <DialogHeader>
              <DialogTitle>Connect to LendDAO</DialogTitle>
              <DialogDescription>
                Sign in to your account or continue with Google to connect your
                wallet.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleEmailLogin} className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login with Email
              </Button>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={handleGoogleLogin}
              className="w-full"
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
              Continue with Google
            </Button>
          </>
        )}

        {step === "loading" && (
          <div className="flex flex-col items-center justify-center py-10">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="mt-4 text-center text-muted-foreground">
              Processing your request...
            </p>
          </div>
        )}

        {step === "metamask" && (
          <>
            <DialogHeader>
              <DialogTitle>Connectiong With Your Wallet....</DialogTitle>
              <DialogDescription>
                Connecting with your MetaMask wallet to access the LendDAO
                platform.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col items-center justify-center py-6">
              <div className="mb-6 rounded-full bg-orange-100 p-3 dark:bg-orange-900/20">
                <svg
                  className="h-12 w-12"
                  viewBox="0 0 35 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.9582 1L19.8241 10.7183L22.2665 5.09082L32.9582 1Z"
                    fill="#E17726"
                    stroke="#E17726"
                    strokeWidth="0.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.04858 1L15.0707 10.809L12.7383 5.09082L2.04858 1Z"
                    fill="#E27625"
                    stroke="#E27625"
                    strokeWidth="0.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28.2292 23.5334L24.7545 28.8808L32.2465 30.9315L34.4162 23.6501L28.2292 23.5334Z"
                    fill="#E27625"
                    stroke="#E27625"
                    strokeWidth="0.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M0.600586 23.6501L2.7583 30.9315L10.2383 28.8808L6.77554 23.5334L0.600586 23.6501Z"
                    fill="#E27625"
                    stroke="#E27625"
                    strokeWidth="0.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.86013 14.6216L7.77695 17.7481L15.1912 18.0948L14.9428 10.0654L9.86013 14.6216Z"
                    fill="#E27625"
                    stroke="#E27625"
                    strokeWidth="0.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25.1445 14.6218L20.0022 9.97461L19.8239 18.0949L27.2261 17.7482L25.1445 14.6218Z"
                    fill="#E27625"
                    stroke="#E27625"
                    strokeWidth="0.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.2383 28.8807L14.7057 26.7024L10.8865 23.7012L10.2383 28.8807Z"
                    fill="#E27625"
                    stroke="#E27625"
                    strokeWidth="0.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.2988 26.7024L24.7543 28.8807L24.1181 23.7012L20.2988 26.7024Z"
                    fill="#E27625"
                    stroke="#E27625"
                    strokeWidth="0.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <Button onClick={handleConnectMetamask} className="w-full">
                Approve MetaMask Connection
              </Button>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Your Metamask Account Will Be Connected Once You Approve the
                Connection
              </p>
            </div>
          </>
        )}

        {step === "success" && (
          <div className="flex flex-col items-center justify-center py-10">
            <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/20">
              <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="mt-4 text-lg font-medium">
              Successfully Connected!
            </h3>
            <p className="mt-2 text-center text-muted-foreground">
              Redirecting you to the dashboard...
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
