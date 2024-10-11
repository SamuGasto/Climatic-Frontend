import { DatePicker } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";
import { Consulta } from "@/types/consulta";

type Props = {
  desabilitado: boolean;
  setConsulta: (consulta: Consulta) => void;
  consultaOriginal: Consulta;
};

export default function SeleccionFecha(props: Props) {
  const { desabilitado, setConsulta, consultaOriginal } = props;

  const configurarConsulta = (dia: number, mes: number, año: number) => {
    let rAño = String(año);
    if (rAño.length < 4) {
      return;
    }

    let rDia = String(dia);
    if (rDia.length < 2) {
      rDia = "0" + rDia;
    }
    let rMes = String(mes);
    if (rMes.length < 2) {
      rMes = "0" + rMes;
    }

    let result = rAño + "-" + rMes + "-" + rDia;
    let tiempo = consultaOriginal.tiempo[0];
    result = result + tiempo.slice(10, tiempo.length);

    let newConsulta = { ...consultaOriginal };
    newConsulta.tiempo[0] = result;

    setConsulta(newConsulta);
  };

  return (
    <DatePicker
      isRequired
      isDisabled={desabilitado}
      minValue={parseDate("1959-01-01")}
      maxValue={parseDate("2021-12-31")}
      label="Escoja una fecha"
      className="flex w-full"
      onChange={(value) =>
        configurarConsulta(value.day, value.month, value.year)
      }
    />
  );
}
