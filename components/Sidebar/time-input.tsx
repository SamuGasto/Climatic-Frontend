import React from "react";
import { TimeInput } from "@nextui-org/react";
import { Time } from "@internationalized/date";

type Props = {
  desabilitado: boolean;
};

export default function SeleccionHora(props: Props) {
  const { desabilitado } = props;
  return (
    <TimeInput
      isDisabled={desabilitado}
      label="Seleccione la hora"
      isRequired
    />
  );
}
