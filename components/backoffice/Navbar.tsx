import {
  Sun,
  User,
  Bell,
  AlignJustify,
  User2,
  LayoutDashboard,
  Settings,
  LogOut,
  DoorClosed,
  XCircle,
  X,
} from "lucide-react";
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
import ThemSwitcherBtn from "../ThemSwitcherBtn";

function Navbar() {
  return (
    <div className="flex items-center shadow-lg justify-between bg-white dark:bg-slate-800 text-slate-50 h-24 py-8 fixed w-full top-0 px-8 z-50 pr-[20rem]">
      <button>
        <AlignJustify className="text-green-600" />
      </button>
      <div className="flex space-x-3 ">
        <button className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg">
          <ThemSwitcherBtn />
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg">
              <Bell className="text-green-600" />
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-1 end-6 dark:border-gray-900">
                20
              </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-slate-950 text-slate-100 py-2 px-4 pr-8">
            <DropdownMenuLabel>My Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <Avatar>
                  <Image
                    src={"/granrah.JPG"}
                    alt="foto"
                    width={100}
                    height={100}
                  ></Image>
                </Avatar>
                <div className="flex flex-col space-y-1">
                  <p>Yellow Sweet Corn Stock out,</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm" >Stock Out</p>
                    <p>Dec 12 2021 - 12:40 pm</p>
                  </div>
                </div>
                <button>
                  <X/>
                  </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <Avatar>
                  <Image
                    src={"/granrah.JPG"}
                    alt="foto"
                    width={100}
                    height={100}
                  ></Image>
                </Avatar>
                <div className="flex flex-col space-y-1">
                  <p>Yellow Sweet Corn Stock out,</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm" >Stock Out</p>
                    <p>Dec 12 2021 - 12:40 pm</p>
                  </div>
                </div>
                <button>
                  <X/>
                  </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <button className="flex items-center space-x-3">
                <Settings className="mr-2 h-4 w-4" />
                <span>Edit Profile</span>
              </button>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <button className="flex items-center space-x-3">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

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
          <DropdownMenuContent className="bg-slate-950 text-slate-100 py-2 px-4 pr-8">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button className="flex items-center space-x-3">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center space-x-3">
                <Settings className="mr-2 h-4 w-4" />
                <span>Edit Profile</span>
              </button>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <button className="flex items-center space-x-3">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Navbar;
