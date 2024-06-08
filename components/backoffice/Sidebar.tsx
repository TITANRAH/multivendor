"use client";

import {
  catalogueLinks,
  sidebarLinks,
} from "@/data-custom/backoffice/sidebar/data";
import { cn } from "@/lib/utils";
import { ChevronRight, LayoutGrid, LogOut, Slack } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"


function Sidebar() {
  const pathname = usePathname();

  return (
    <div className=" bg-white dark:bg-slate-700 space-y-6 w-64 h-screen text-slate-800 dark:text-slate-50 p-3 fixed left-0 top-0 shadow-2xl ">
      <Link href="#">
        <Image src="/logo.png" alt="logo" width={200} height={200} />
      </Link>
      <div className="space-y-3 flex flex-col mt-14">
        <Link
          href="/dashboard"
          className={cn(
            "flex items-center space-x-3 py-2 px-6 border-l-4 border-slate-700",
            {
              " border-lime-600": "/dashboard" === pathname,
            }
          )}
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>

        <Collapsible className="pr-1 ">
          <CollapsibleTrigger className="flex cursor-pointer items-center space-x-3 py-2 px-6 border-l-4 border-slate-700">
            <Slack />
            <span>Catalogue</span>
            <ChevronRight />
          </CollapsibleTrigger>
          <CollapsibleContent className=" flex fade-in flex-col items-start bg-slate-950 rounded-sm">
            
              {catalogueLinks.map((c, index) => (
                <Link
                  href={c.href}
                  key={index}
                  className={cn(
                    "flex items-center text-sm space-x-3 py-2 px-6 border-l-4 hover:bg-lime-600 w-full  border-slate-700",
                    {
                      " bg-lime-600 ": c.href === pathname,
                    }
                  )}
                >
                  <span>{'-' + ' ' + c.title}</span>
                </Link>
              ))}
            
          </CollapsibleContent>
        </Collapsible>

        {sidebarLinks.map((s, index) => (
          <Link
            href={s.href}
            key={index}
            className={cn(
              "flex items-center space-x-3 py-2 px-6 border-l-4 border-slate-700",
              {
                " border-lime-600": s.href === pathname,
              }
            )}
          >
            <s.icon />
            <span>{s.title}</span>
          </Link>
        ))}

        <button className="bg-lime-600 rounded-xl flex items-center space-x-3 py-2 px-6 border-l-4 border-green-600">
          <LogOut />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
