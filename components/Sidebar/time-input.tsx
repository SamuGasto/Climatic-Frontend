import React, { useState } from "react";
import { TimeInput } from "@nextui-org/react";
import { Consulta } from "@/types/consulta";

type Props = {
  desabilitado: boolean;
  setConsulta: (consulta: Consulta) => void;
  consultaOriginal: Consulta;
};

export default function SeleccionHora(props: Props) {
  const { desabilitado, setConsulta, consultaOriginal } = props;

  const configurarConsulta = (valor: number) => {
    let tiempo = consultaOriginal.tiempo[0];

    let result = String(valor);
    if (result.length < 2) {
      result = "0" + result;
    }
    result = tiempo.slice(0, 11) + result + ":00:00.000000000";

    let newConsulta = { ...consultaOriginal };
    console.log(result);
    newConsulta.tiempo[0] = result;
    setConsulta(newConsulta);
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
