import React, { useState } from "react";
import { Slider } from "@nextui-org/react";
export type SliderValue = number | number[];

type Props = {
  label: string;
  step: number;
  minimo: number;
  maximo: number;
  defaultValue: number[];
  setValores: React.Dispatch<React.SetStateAction<number[]>>;
};

export default function Deslizador(props: Props) {
  const { maximo, minimo, step, label, defaultValue, setValores } = props;

  return (
    <Slider
      label={label}
      step={step}
      minValue={minimo}
      maxValue={maximo}
      defaultValue={defaultValue}
      showSteps={true}
      className="flex w-full"
      onChangeEnd={(value) => {
        if (Array.isArray(value)) {
          setValores(value);
        } else {
          setValores([value]);
        }
      }}
    />
  );
}
