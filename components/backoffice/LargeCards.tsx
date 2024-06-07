import React from "react";
import LargeCard from "./LargeCard";
import { orderStats } from "@/dumi-data/backoffice/dashboard/data";

function LargeCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {orderStats.map((o, index) => (
        <LargeCard key={index} color={o.color} period={o.period} sales={o.sales} />
      ))}
    </div>
  );
}

export default LargeCards;
