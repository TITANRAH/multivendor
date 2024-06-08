import Navbar from "@/components/backoffice/Navbar";
import Sidebar from "@/components/backoffice/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      {/* sidebar */}

      <Sidebar />
      <div className="lg:ml-64 ml-0 flex-grow bg-slate-100 min-h-screen">
        {/* HEADER */}
        <Navbar />
        {/* MAIN */}
        {/* el main contiene todo y esta corrido 60 hacia la derecha con un ml 60 por que el ancho del side bar es 60 */}
      {/* MAIN BODY */}
        <main className="p-8 bg-slate-100 dark:bg-slate-950 text-slate-50 mt-24">{children}</main>
    
      </div>

    </div>
  );
}
