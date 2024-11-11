import React, { useState } from "react";
import { Select, SelectItem, SelectSection } from "@nextui-org/react";
import { mapaContorno } from "@/config/var_segun_graficos/mapa_contorno";
import { mapaVariables } from "@/config/mapa-variables";

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
}

export default function Desplegable2(props: DesplegableProps) {
  const {
    titulo,
    explicacion,
    elementos,
    onSelect,
    desabilitado,
    valPorDefecto,
    typeChart,
  } = props;

  let listAux1: elemento[] = [];
  let listAux2: elemento[] = [];

  elementos.map((elemento) =>
    mapaVariables[typeChart].includes(elemento.key)
      ? (listAux1 = [...listAux1, { key: elemento.key, label: elemento.label }])
      : (listAux2 = [...listAux2, { key: elemento.key, label: elemento.label }])
  );

  const [elementosParaGrafico, setElementosParaGrafico] = useState(listAux1);
  const [elementosOtroGrafico, setElementosOtroGrafico] = useState(listAux2);

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
        <SelectSection
          showDivider
          title="Variables que funcionan con el gráfico seleccionado"
        >
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
