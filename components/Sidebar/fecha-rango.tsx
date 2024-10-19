import { DateRangePicker } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";

type Props = {
  setFecha: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function FechaRango(props: Props) {
  const { setFecha } = props;

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
    const inicio = crearFecha(iniDia, iniMes, iniAño);
    const final = crearFecha(finDia, finMes, finAño);

    if (inicio && final) {
      setFecha([inicio, final]);
    } else {
      console.log("Hay un tipo indefinido");
    }
  };

  return (
    <DateRangePicker
      label="Rango de fechas"
      className="max-w-xs"
      minValue={parseDate("1959-01-01")}
      maxValue={parseDate("2021-12-31")}
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
    />
  );
}
