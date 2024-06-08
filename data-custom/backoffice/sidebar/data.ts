import {
  ExternalLink,
  LayoutGrid,
  Slack,
  Truck,
  User2,
  UserSquare2,
  Users2,
  Warehouse,
} from "lucide-react";

export const sidebarLinks = [
  
 
  {
    title: "Customers",
    icon: User2,
    href: '/dashboard/customers'

  },
  {
    title: "Markets",
    icon: Warehouse,
    href: '/dashboard/markets'

  },
  {
    title: "Farmers",
    icon: UserSquare2,
    href: '/dashboard/farmers'

  },
  {
    title: "Orders",
    icon: Truck,
    href: '/dashboard/cupons'

  },
  {
    title: "Staff",
    icon: Users2,
    href: '/dashboard/staff'

  },
  {
    title: "Settings",
    icon: User2,
    href: '/dashboard'

  },
  {
    title: "Online Stores",
    icon: ExternalLink,
    href: '/dashboard/markets'

  },
];



export const catalogueLinks = [
  
 
    {
      title: "Products",
      href: '/dashboard/products'
  
    },
    {
      title: "Categories",
      href: '/dashboard/categories'
  
    },
    {
      title: "Attributes",
      href: '/dashboard/attributes'
  
    },
    {
      title: "Coupons",
      href: '/dashboard/cupons'
  
    },
    {
      title: "Store Sliders",
      href: '/dashboard/sliders'
  
    },
  
  ];
  