import React from "react";
import { Select, SelectItem, SelectSection } from "@nextui-org/react";

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
  typeChart: string;
  elementosParaGrafico: elemento[];
  elementosOtroGrafico: elemento[];
}

export default function Desplegable2(props: DesplegableProps) {
  const {
    titulo,
    explicacion,
    onSelect,
    desabilitado,
    valPorDefecto,
    elementosParaGrafico,
    elementosOtroGrafico,
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
        disallowEmptySelection
      >
        <SelectSection showDivider title="Variables recomendadas">
          {elementosParaGrafico.map((elemento) => (
            <SelectItem
              onClick={() => onSelect?.(elemento.key)}
              key={elemento.key}
            >
              {elemento.label}
            </SelectItem>
          ))}
        </SelectSection>

        <SelectSection title="Otras variables">
          {elementosOtroGrafico.map((elemento) => (
            <SelectItem
              onClick={() => onSelect?.(elemento.key)}
              key={elemento.key}
            >
              {elemento.label}
            </SelectItem>
          ))}
        </SelectSection>
      </Select>
    </div>
  );
}
