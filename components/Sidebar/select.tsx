import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

type elemento = {
  key: string;
  label: string;
};

interface DesplegableProps {
  titulo?: string;
  explicacion?: string;
  elementos: elemento[];
  onSelect?: (key: string) => void;
  desabilitado?: boolean;
}

export default function Desplegable(props: DesplegableProps) {
  const { titulo, explicacion, elementos, onSelect, desabilitado } = props;

  return (
    <div className="flex w-full">
      <Select
        size="md"
        label={explicacion}
        placeholder={titulo}
        className="flex w-full"
        isDisabled={desabilitado}
      >
        {elementos.map((elemento) => (
          <SelectItem
            onClick={() => onSelect?.(elemento.key)}
            key={elemento.key}
          >
            {elemento.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
