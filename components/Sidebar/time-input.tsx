import React, { useState } from "react";
import { TimeInput } from "@nextui-org/react";
import { Consulta } from "@/types/consulta";

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
      granularity="hour"
      onChange={(value) => configurarConsulta(value.hour)}
    />
  );
}
