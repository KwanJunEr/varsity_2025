export interface Loan {
  id: string;
  amount: number;
  pendingAmount: number;
  dueDate: string;
  status: "pending" | "paid";
}

export interface UserMetrics {
  points: number;
  reputation: number;
}

export const initialLoans: Loan[] = [
  {
    id: "1",
    amount: 2000,
    pendingAmount: 100,
    dueDate: "2024-03-15",
    status: "pending",
  },
  {
    id: "2",
    amount: 1000,
    pendingAmount: 500,
    dueDate: "2024-03-20",
    status: "pending",
  },
];

export const initialUserMetrics: UserMetrics = {
  points: 0,
  reputation: 0,
};
