import Heading from "@/components/backoffice/Heading";
import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import { Download, Plus, Search, Trash, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

function CategoriasPage() {
  return (
    <div>
      {/* header */}
      <PageHeader
        title="Categories"
        href="/dashboard/categories/new"
        linkTitle="Add Category"
      />

      {/* table */}
      {/* Export search  delete*/}

      <TableActions />
      <div className="py-8">
        <h2>Table</h2>
      </div>
    </div>
  );
}

export default CategoriasPage;
