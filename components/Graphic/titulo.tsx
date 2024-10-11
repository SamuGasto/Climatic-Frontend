import React from "react";
import EditabelText from "./editable-text";

interface PropType {
  original_tittle: string;
  original_subtittle: string;
}

export default function Titulo(props: PropType) {
  const { original_tittle, original_subtittle } = props;

  return (
    <div className="flex flex-col w-full justify-center align-middle text-center gap-4">
      <EditabelText
        defaultText={original_tittle}
        textClassName="text-3xl md:text-4xl font-semibold"
      />
      <EditabelText defaultText={original_subtittle} textClassName="text-lg" />
    </div>
  );
}
