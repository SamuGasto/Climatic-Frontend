import React, { useState } from "react";
import { TimeInput } from "@nextui-org/react";
import { Consulta } from "@/types/consulta";

type Props = {
  desabilitado: boolean;
  setHora: React.Dispatch<React.SetStateAction<string>>;
};

export default function SeleccionHora(props: Props) {
  const { desabilitado, setHora } = props;

  const configurarConsulta = (valor: number) => {
    let hora = String(valor);
    if (hora.length < 2) {
      hora = "0" + hora;
    }
    setHora(hora + ":00:00.000000000");
  };

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
