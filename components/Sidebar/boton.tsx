import React from "react";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";

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
      variant="solid"
    >
      {texto}
    </Button>
  );
}
