import MobileNav from "@/components/lender/components/MobileNav";
import Sidebar from "@/components/lender/components/Sidebar";
import Image from "next/image";
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "LendDAO",
  description: "Generated by create next app",
  icons: "/logo.svg"
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-full">
      <Sidebar />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
