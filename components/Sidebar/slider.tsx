import React, { useState } from "react";
import { Slider, Tooltip } from "@nextui-org/react";

type Props = {
  label: string;
  step: number;
  minimo: number;
  maximo: number;
  defaultValue: number[];
};

export default function Deslizador(props: Props) {
  const { maximo, minimo, step, label, defaultValue } = props;

  return (
    <Slider
      label={label}
      step={step}
      minValue={minimo}
      maxValue={maximo}
      defaultValue={defaultValue}
      showSteps={true}
      className="flex w-full"
    />
  );
}
