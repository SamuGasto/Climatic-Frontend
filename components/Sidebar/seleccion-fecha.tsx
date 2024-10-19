import { DatePicker } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";

type Props = {
  desabilitado: boolean;
  setFecha: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function SeleccionFecha(props: Props) {
  const { desabilitado, setFecha } = props;

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

      setFecha([String(año) + "-" + sMes + "-" + sDia]);
    }
  };

  return (
    <DatePicker
      isRequired
      isDisabled={desabilitado}
      minValue={parseDate("1959-01-01")}
      maxValue={parseDate("2021-12-31")}
      label="Escoja una fecha"
      className="flex w-full"
      onChange={(value) => crearFecha(value.day, value.month, value.year)}
    />
  );
}
