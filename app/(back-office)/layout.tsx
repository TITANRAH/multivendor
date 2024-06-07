import Navbar from "@/components/backoffice/Navbar";
import Sidebar from "@/components/backoffice/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      {/* sidebar */}

      <Sidebar />
      <div className="w-full">
        {/* HEADER */}
        <Navbar />
        {/* MAIN */}
        <main className="ml-60 p-8 bg-slate-950 text-slate-50 min-h-screen mt-16">{children}</main>
      </div>
      {/* MAIN BODY */}
    </div>
  );
}
