import { orderTwo } from "@/data-custom/backoffice/dashboard/data";
import SmallCard from "./SmallCard";

function SmallCards() {
  return (
    <div className="max-w-sm  lg:max-w-none sm:max-w-none xl:max-w-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
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
