import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from "lucide-react";

export const orderStats = [
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

