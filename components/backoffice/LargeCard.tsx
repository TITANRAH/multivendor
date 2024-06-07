import { Layers } from "lucide-react";
import React from "react";

interface Props {
  period: string;
  sales: number;
  color: string;
}
function LargeCard(props: Props) {
  const { color, period, sales } = props;
  return (
    <div
      className={`rounded-lg text-white shadow-md p-8  flex items-center flex-col gap-2  ${color}`}
    >
      <Layers />
      <h4>{period}</h4>
      <h2 className="lg:text-3xl text-2xl">{sales}</h2>
    </div>
  );
}

export default LargeCard;
