import React from "react";
import Heading from "./Heading";
import Link from "next/link";
import { Plus } from "lucide-react";

interface Props {
    title: string;
    href: string;
    linkTitle: string;
}

function PageHeader(props: Props) {

    const {title, href, linkTitle} = props
  return (
    <div className="flex justify-between py-4 mb-4">
      <Heading title={title} />
      <Link
        className="ext-white bg-lime-600 hover:bg-lime-600/90 focus:ring-4 focus:outline-none focus:ring-lime-600/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-lime-600/55 me-2 mb-2"
        href={href}
      >
        <Plus />
        <span>{linkTitle}</span>
      </Link>
    </div>
  );
}

export default PageHeader;
