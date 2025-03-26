"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between h-16 items-center px-10">
        <Link href={"/borrower"}>
          <h2 className="font-extrabold text-2xl">LendSync</h2>
        </Link>
        <div className="flex space-x-8">
          <Link
            href="/borrower"
            className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
              pathname === "/microloan"
                ? "border-indigo-500 text-gray-900"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/borrower/microloan"
            className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
              pathname === "/microloan"
                ? "border-indigo-500 text-gray-900"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
            }`}
          >
            My MicroLoan
          </Link>
          <Link
            href="/borrower/marketplace"
            className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
              pathname === "/marketplace"
                ? "border-indigo-500 text-gray-900"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
            }`}
          >
            Marketplace
          </Link>
          <Link
            href="/borrower/reputation"
            className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
              pathname === "/pet"
                ? "border-indigo-500 text-gray-900"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
            }`}
          >
            My Reputation
          </Link>
          <Link
            href="/"
            className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}
