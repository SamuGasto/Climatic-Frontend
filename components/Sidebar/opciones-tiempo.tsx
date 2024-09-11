import { DateRangePicker } from "@nextui-org/react";
import React from "react";
import SeleccionHora from "./time-input";
import { DatePicker } from "@nextui-org/react";

type Props = {
  desabilitado: boolean;
};

const OpcionesTiempo = (props: Props) => {
  const { desabilitado } = props;

  return (
    <div className="flex flex-col gap-3 w-full">
      <DatePicker
        isRequired
        isDisabled={desabilitado}
        label="Escoja una fecha"
        className="flex w-full"
      />

      <SeleccionHora desabilitado={desabilitado} />
    </div>
  );
};

export default OpcionesTiempo;
