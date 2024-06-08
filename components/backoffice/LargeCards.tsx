import React from "react";
import LargeCard from "./LargeCard";

export interface OrderStats {
  period: string;
  sales: number;
  color: string
}

export const orderStats: OrderStats[] = [
  {
    period: "Today Orders",
    sales: 110000,
    color: "bg-green-600",
  },
  {
    period: "Yesterday Orders",
    sales: 12000,
    color: "bg-blue-600",
  },
  {
    period: "This Month",
    sales: 300,
    color: "bg-orange-600",
  },
  {
    period: "All-Time Sales",
    sales: 500000,
    color: "bg-purple-600",
  },
];


function LargeCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-8">
      {orderStats.map((orderStats, index) => (
        <LargeCard key={index} orderStats={orderStats}  />
      ))}
    </div>
  );
}

export default LargeCards;
