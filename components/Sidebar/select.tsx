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
  valPorDefecto?: string;
}

export default function Desplegable(props: DesplegableProps) {
  const {
    titulo,
    explicacion,
    elementos,
    onSelect,
    desabilitado,
    valPorDefecto,
  } = props;

  return (
    <div className="flex w-full">
      <Select
        size="md"
        label={explicacion}
        placeholder={titulo}
        className="flex w-full"
        isDisabled={desabilitado}
        defaultSelectedKeys={valPorDefecto}
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
