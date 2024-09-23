import React from "react";

interface PropType {
  text: string;
}

function Tittle(props: PropType) {
  const { text } = props;
  return <h1 className="text-5xl font-semibold p-3">{text}</h1>;
}

export default Tittle;
