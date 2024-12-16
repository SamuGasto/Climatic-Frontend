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
  valPorDefecto?: string | string[];
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

  const defaultSelectedKeys =
    elementos && elementos[0] ? elementos[0].key : valPorDefecto;

  return (
    <div className="flex w-full">
      <Select
        size="md"
        label={explicacion}
        placeholder={titulo}
        className="flex w-full"
        isDisabled={desabilitado}
        disallowEmptySelection
        defaultSelectedKeys={defaultSelectedKeys}
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
