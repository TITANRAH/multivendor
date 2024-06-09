"use client";

import Navbar from "@/components/backoffice/Navbar";
import Sidebar from "@/components/backoffice/Sidebar";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  return (
    <div className="flex">
      {/* sidebar */}

      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <div className="lg:ml-64 ml-0 flex-grow bg-slate-100 min-h-screen">
        {/* HEADER */}
        <Navbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
        {/* MAIN */}
        {/* el main contiene todo y esta corrido 60 hacia la derecha con un ml 60 por que el ancho del side bar es 60 */}
        {/* MAIN BODY */}
        <main className="p-8 min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-50 mt-24">
          {children}
        </main>
      </div>
    </div>
  );
}
