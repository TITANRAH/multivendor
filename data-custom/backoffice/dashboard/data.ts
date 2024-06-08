import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from "lucide-react";



export interface OrderTwo {
  title: string;
  value: number;
  iconBg: string
  icon: ()=> JSX.Element
}


export const orderTwo = [
  {
    title: "Total Order",
    value: 110000,
    iconBg: "bg-green-600",
    icon: Loader2
  },
  {
    title: "Orders Pending",
    value: 12000,
    iconBg: "bg-blue-600",
    icon: ShoppingCart

  },
  {
    title: "Orders Process",
    value: 300,
    iconBg: "bg-orange-600",
    icon: RefreshCcw

  },
  {
    title: "Orders Delivery",
    value: 500000,
    iconBg: "bg-purple-600",
    icon: CheckCheck

  },
];

