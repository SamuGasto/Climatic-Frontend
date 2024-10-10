import { DatePicker } from "@nextui-org/react";
import {
  CalendarDate,
  parseDate,
  ZonedDateTime,
} from "@internationalized/date";
import { Consulta } from "@/types/consulta";
import { useState } from "react";

type Props = {
  desabilitado: boolean;
  setConsulta: (consulta: Consulta) => void;
};

export default function SeleccionFecha(props: Props) {
  const { desabilitado, setConsulta } = props;
  const [sliderValue, setSliderValue] = useState<ZonedDateTime>();

  return (
    <DatePicker
      isRequired
      isDisabled={desabilitado}
      minValue={parseDate("1959-01-01")}
      maxValue={parseDate("2021-12-31")}
      label="Escoja una fecha"
      className="flex w-full"
      //onChange={(value) => console.log(value)} //setSliderValue(value)}
      //onChangeEnd={(value) => configurarConsulta()}
    />
  );
}
