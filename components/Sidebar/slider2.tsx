import { useState } from "react";
import { Slider } from "@nextui-org/react";
import { niveles } from "@/config/niveles";
import { Consulta } from "@/types/consulta";

type Props = {
  setConsulta: (consulta: Consulta) => void;
  consultaOriginal: Consulta;
};

export default function Slider2(props: Props) {
  const { setConsulta, consultaOriginal } = props;
  const [valorSeleccionado, setValorSeleccionado] = useState(niveles[0]);

  const onChange = (value: number | number[]) => {
    value = Number(value);
    const valorMasCercano = niveles.reduce((prev, curr) =>
      Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
    );
    setValorSeleccionado(valorMasCercano);
  };

  const configurarConsulta = (valor: number) => {
    let newConsulta = { ...consultaOriginal };
    newConsulta.altura = [valor];
    setConsulta(newConsulta);
  };

  return (
    <div>
      <Slider
        label="Seleccione la altura de los datos"
        minValue={Math.min(...niveles)}
        maxValue={Math.max(...niveles)}
        value={valorSeleccionado}
        onChange={(value) => onChange(value)}
        //marks={niveles.map((val) => ({ value: val, label: val.toString() }))}
        onChangeEnd={(value) => configurarConsulta(valorSeleccionado)}
      />
    </div>
  );
}
