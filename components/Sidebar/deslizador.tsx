import { Slider } from "@nextui-org/react";

type Props = {
  label: string;
  step: number;
  minimo: number;
  maximo: number;
  defaultValue: number;
  onChangeEnd?: (valor: number | number[]) => void;
  deshabilitado: boolean;
};

export default function Deslizador(props: Props) {
  const {
    maximo,
    minimo,
    step,
    label,
    defaultValue,
    onChangeEnd,
    deshabilitado,
  } = props;

  return (
    <Slider
      label={label}
      step={step}
      maxValue={maximo}
      minValue={minimo}
      defaultValue={defaultValue}
      className="max-w-md"
      onChangeEnd={(value) => {
        onChangeEnd?.(value);
      }}
      isDisabled={!deshabilitado}
      showSteps={true}
    />
  );
}
