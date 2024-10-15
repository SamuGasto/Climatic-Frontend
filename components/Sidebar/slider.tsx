import React, { useState } from "react";
import { Slider } from "@nextui-org/react";
import { Consulta } from "@/types/consulta";
export type SliderValue = number | number[];

type Props = {
  label: string;
  step: number;
  minimo: number;
  maximo: number;
  defaultValue: number[];
  setConsulta: (consulta: Consulta) => void;
  consultaOriginal: Consulta;
  tipo: "latitud" | "longitud";
};

export default function Deslizador(props: Props) {
  const {
    maximo,
    minimo,
    step,
    label,
    defaultValue,
    setConsulta,
    consultaOriginal,
    tipo,
  } = props;

  const [sliderValue, setSliderValue] = useState<number | number[]>([
    minimo,
    maximo,
  ]);

  function configurarConsulta() {
    let newConsulta = { ...consultaOriginal };

    if (tipo == "latitud") {
      if (Array.isArray(sliderValue)) {
        newConsulta.latitud = sliderValue;
      } else {
        newConsulta.latitud = [sliderValue, sliderValue];
      }
    } else if (tipo == "longitud") {
      if (Array.isArray(sliderValue)) {
        newConsulta.longitud = sliderValue;
      } else {
        newConsulta.longitud = [sliderValue, sliderValue];
      }
    }

    setConsulta(newConsulta);
  }

  return (
    <Slider
      label={label}
      step={step}
      minValue={minimo}
      maxValue={maximo}
      defaultValue={defaultValue}
      showSteps={true}
      className="flex w-full"
      onChange={(value) => setSliderValue(value)}
      onChangeEnd={(value) => configurarConsulta()}
    />
  );
}