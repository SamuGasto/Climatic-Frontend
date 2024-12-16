import { DateRangePicker } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";
import { useState } from "react";

type Props = {
  setFecha: React.Dispatch<React.SetStateAction<string[] | null>>;
  desabilitado?: boolean;
};

export default function FechaRango(props: Props) {
  const { setFecha, desabilitado } = props;

  const [esInvalido, setEsInvalido] = useState(false);

  const crearFecha = (dia: number, mes: number, año: number) => {
    if (año >= 1959 && año <= 2021) {
      let sDia = String(dia);
      if (sDia.length < 2) {
        sDia = "0" + sDia;
      }

      let sMes = String(mes);
      if (sMes.length < 2) {
        sMes = "0" + sMes;
      }

      return String(año) + "-" + sMes + "-" + sDia;
    }
  };

  const crearFechas = (
    iniDia: number,
    iniMes: number,
    iniAño: number,
    finDia: number,
    finMes: number,
    finAño: number
  ) => {
    const diaInicio = new Date(iniAño, iniMes - 1, iniDia);
    const diaFinal = new Date(finAño, finMes - 1, finDia);

    const diferenciaMilisegundos = Math.abs(
      diaFinal.getTime() - diaInicio.getTime()
    );

    const diferenciaDias = diferenciaMilisegundos / (1000 * 60 * 60 * 24);

    if (diferenciaDias <= 14) {
      const inicio = crearFecha(iniDia, iniMes, iniAño);
      const final = crearFecha(finDia, finMes, finAño);

      if (inicio && final) {
        setFecha([inicio, final]);
      } else {
        console.log("Hay un tipo indefinido");
      }

      setEsInvalido(false);
    } else {
      setEsInvalido(true);
    }
  };

  return (
    <DateRangePicker
      label="Rango de fechas"
      className="max-w-xs"
      minValue={parseDate("1959-01-01")}
      maxValue={parseDate("2021-12-31")}
      isDisabled={desabilitado}
      onChange={(value) =>
        crearFechas(
          value.start.day,
          value.start.month,
          value.start.year,
          value.end.day,
          value.end.month,
          value.end.year
        )
      }
      isInvalid={esInvalido}
      errorMessage="El rango de fechas no puede ser mayor a 2 semanas."
    />
  );
}
