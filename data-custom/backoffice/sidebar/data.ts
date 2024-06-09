import {
  ExternalLink,
  CircleDollarSign,
  
  Slack,
  Truck,
  User2,
  UserSquare2,
  Users2,
  Warehouse,
  ShoppingBag,
  ShoppingBasketIcon,
  ClipboardMinus,
  Gem,
  Store,
  Hotel,
} from "lucide-react";

export const sidebarLinks = [
  {
    title: "Customers",
    icon: User2,
    href: "/dashboard/customers",
  },
  {
    title: "Markets",
    icon: Warehouse,
    href: "/dashboard/markets",
  },
  {
    title: "Farmers",
    icon: UserSquare2,
    href: "/dashboard/farmers",
  },
  {
    title: "Orders",
    icon: Truck,
    href: "/dashboard/orders",
  },
  {
    title: "Our Staff",
    icon: Users2,
    href: "/dashboard/staff",
  },
  {
    title: "Settings",
    icon: User2,
    href: "/dashboard/settings",
  },
  {
    title: "Wallet",
    icon: CircleDollarSign,
    href: "/dashboard/wallet",
  },
  {
    title: "Community",
    icon: Hotel,
    href: "/dashboard/community",
  },
  {
    title: "Online Stores",
    icon: ExternalLink,
    href: "/dashboard/online-stores",
  },
];

export const catalogueLinks = [
  {
    title: "Products",
    href: "/dashboard/products",
    icon: ShoppingBag,
  },
  {
    title: "Categories",
    href: "/dashboard/categories",
    icon: ShoppingBasketIcon,
  },
  {
    title: "Attributes",
    href: "/dashboard/attributes",
    icon: ClipboardMinus,
  },
  {
    title: "Coupons",
    href: "/dashboard/cupons",
    icon: Gem,
  },
  {
    title: "Store Sliders",
    href: "/dashboard/sliders",
    icon: Store,
  },
];
