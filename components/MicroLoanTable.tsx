"use client";

import React, { useState } from "react";

interface Loan {
  id: string;
  amount: number;
  pendingAmount: number;
  dueDate: string;
  status: "pending" | "paid";
}

interface MicroLoanTableProps {
  loans: Loan[];
  onPayment: (loanId: string) => void;
}

export default function MicroLoanTable({
  loans,
  onPayment,
}: MicroLoanTableProps) {
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  return (
    <div className="w-full max-w-4xl overflow-x-auto mt-10">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Due Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {loans.map((loan) => (
            <React.Fragment key={loan.id}>
              <tr
                onClick={() => {
                  setExpandedRow((prev) => (prev === loan.id ? null : loan.id));
                }}
                className="cursor-pointer hover:bg-gray-50"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  RM{loan.amount.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {loan.dueDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      loan.status === "paid"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {loan.status.charAt(0).toUpperCase() + loan.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {loan.status === "pending" && (
                    <button
                      onClick={() => onPayment(loan.id)}
                      className="text-indigo-600 hover:text-indigo-900 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Pay Now
                    </button>
                  )}
                </td>
              </tr>
              {expandedRow === loan.id && (
                <tr>
                  <td colSpan={4} className="px-6 py-4 bg-gray-50">
                    <div className="text-sm text-gray-700">
                      <p className="font-medium">Payment Details:</p>
                      <p>Total Amount: RM{loan.amount.toFixed(2)}</p>
                      <p>
                        Remaining to Pay: RM
                        {loan.status === "pending"
                          ? loan.pendingAmount.toFixed(2)
                          : "0.00"}
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
