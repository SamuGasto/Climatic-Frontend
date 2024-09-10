import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

type elemento = {
  key: number;
  label: string;
};

interface DesplegableProps {
  titulo?: string;
  explicacion?: string;
  elementos: elemento[];
}

export default function Desplegable(props: DesplegableProps) {
  const { titulo, explicacion, elementos } = props;

  return (
    <div>
      <Select label={explicacion} placeholder={titulo} className="max-w-xs">
        {elementos.map((elemento) => (
          <SelectItem key={elemento.key}>{elemento.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
}
