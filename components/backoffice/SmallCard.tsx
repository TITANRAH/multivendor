import { ShoppingCart } from "lucide-react";
interface Props {
    title: string;
    iconBg: string;
    value: string;
    icon: any;
  }
function SmallCard(props: Props) {
  const { icon: Icon, iconBg, value, title } = props;

  console.log(iconBg)

  return (
    <div className={`rounded-lg  shadow-xl p-4 bg-slate-50 dark:bg-slate-700 dark:text-slate-50 text-slate-800`}>
      <div className="flex space-x-4">
        <div className={`${iconBg} rounded-full items-center flex justify-center w-12 h-12`}>
          <Icon className="text-slate-50 dark:text-slate-50"/>
        </div>
        <div className="">
          <p>{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
      </div>
    </div>
  );
}

export default SmallCard;
