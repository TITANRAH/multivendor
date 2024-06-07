import React from "react";
import SmallCard from "./SmallCard";
import { orderTwo } from "@/dumi-data/backoffice/dashboard/data";

function SmallCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {orderTwo.map((o, index) => (

        
        <SmallCard
          key={index}
          iconBg={o.iconBg}
          icon={o.icon}
          value={o.value.toString()}
          title={o.title}
        />
      ))}
    </div>
  );
}

export default SmallCards;
