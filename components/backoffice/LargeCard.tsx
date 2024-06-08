import { Layers } from "lucide-react";
import React from "react";
import { OrderStats } from "./LargeCards";

interface Props {
  orderStats: OrderStats;
}

function LargeCard(props: Props) {
  const {
    orderStats: { period, sales, color },
  } = props;

  return (
    <div
      className={`rounded-lg shadow-xl text-white p-8  flex items-center flex-col gap-2 ${color}`}
    >
      <Layers />
      <h4>{period}</h4>
      <h2 className="lg:text-3xl text-2xl">{sales}</h2>
    </div>
  );
}

export default LargeCard;
