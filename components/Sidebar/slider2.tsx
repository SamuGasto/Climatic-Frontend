import { useState } from "react";
import { Slider, SliderValue } from "@nextui-org/react";
import { niveles } from "@/config/niveles";

type Props = {
  setNivel: (newNivel: number | null) => void;
};

export default function Slider2(props: Props) {
  const { setNivel } = props;
  const [valorSeleccionado, setValorSeleccionado] = useState(niveles[0]);

  const onChange = (value: SliderValue) => {
    if (!Array.isArray(value)) {
      const valorMasCercano = niveles.reduce((prev, curr) =>
        Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
      );
      setValorSeleccionado(valorMasCercano);
    }
  };

  return (
    <div>
      <Slider
        label="Seleccione el nivel de los datos"
        minValue={Math.min(...niveles)}
        maxValue={Math.max(...niveles)}
        value={valorSeleccionado}
        onChange={(value) => {
          onChange(value);
        }}
        onChangeEnd={() => setNivel(valorSeleccionado)}
      />
    </div>
  );
}
