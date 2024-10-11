import { DateRangePicker } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";
import { Consulta } from "@/types/consulta";
import { useState } from "react";

type Props = {
  setConsulta: (consulta: Consulta) => void;
};

export default function FechaRango(props: Props) {
  const { setConsulta } = props;
  const [value, setValue] = useState(null);

  return (
    <DateRangePicker
      label="Rango de fechas"
      className="max-w-xs"
      minValue={parseDate("1959-01-01")}
      maxValue={parseDate("2021-12-31")}
      onChange={(value) => console.log(value)}
    />
  );
}
