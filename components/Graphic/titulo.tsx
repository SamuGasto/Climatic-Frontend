import React from "react";

interface PropType {
  tittle: string;
  subtittle: string;
}

export default function Titulo(props: PropType) {
  const { tittle, subtittle } = props;
  return (
    <div className="flex flex-col w-full text-center gap-4">
      <h1 className="text-4xl font-semibold">{tittle}</h1>
      <h1 className="text-lg">{subtittle}</h1>
    </div>
  );
}
