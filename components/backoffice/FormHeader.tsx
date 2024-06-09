import { X } from "lucide-react";
import React from "react";

interface Props {
    title: string;
}

function FormHeader(props: Props) {
    const { title } = props;
  return (
    <div className="flex items-center justify-between py-6 px-12 dark:bg-slate-600 rounded-lg text-slate-800 dark:text-slate-50 shadow-lg">
      <h2 className="text-xl font-semibold">{title}</h2>

      <button className="">
        <X />
      </button>
    </div>
  );
}

export default FormHeader;
