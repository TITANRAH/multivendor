import React from "react";

interface Props {
  title: string;
}
function Heading(props: Props) {
  const { title } = props;
  return (
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-50">{title}</h2>
  );
}

export default Heading;
