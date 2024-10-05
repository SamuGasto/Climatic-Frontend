import React from "react";
import { Button } from "@nextui-org/react";

type Props = {
  texto: string;
  funcion: () => void;
};

export default function Boton(props: Props) {
  const { texto, funcion } = props;

  return (
    <Button
      color="primary"
      fullWidth={false}
      onClick={funcion}
      className="flex flex-shrink-0"
    >
      {texto}
    </Button>
  );
}
