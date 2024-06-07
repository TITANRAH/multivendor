import { Sun, User, Bell, AlignJustify } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Avatar } from "../ui/avatar";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Navbar() {
  return (
    <div className="flex items-center justify-between bg-slate-800 text-slate-50 h-24 py-8 px-8 fixed w-full top-0 left-60  pr-80">
      <Button>
        <AlignJustify />
      </Button>
      <div className="flex space-x-3 ">
        <Button className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg">
          <Sun className="text-green-600" />
        </Button>
        <Button className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg">
          <Bell className="text-green-600" />
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-1 end-6 dark:border-gray-900">
            20
          </div>
        </Button>
    
        <DropdownMenu>
          <DropdownMenuTrigger>
          <Avatar>
            <Image
              src={"/granrah.JPG"}
              alt="foto"
              width={100}
              height={100}
            ></Image>
          </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Navbar;
