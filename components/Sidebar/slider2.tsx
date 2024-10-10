import { useState } from "react";
import { Slider } from "@nextui-org/react";
import { niveles } from "@/config/niveles";

export default function Slider2() {
  const [valorSeleccionado, setValorSeleccionado] = useState(niveles[0]);

  return (
    <div>
      <Slider
        label="Seleccione la altura de los datos"
        minValue={Math.min(...niveles)}
        maxValue={Math.max(...niveles)}
        value={valorSeleccionado}
        onChange={(value) => {
          // Encuentra el valor más cercano en la lista
          value = Number(value);
          const valorMasCercano = niveles.reduce((prev, curr) =>
            Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
          );
          setValorSeleccionado(valorMasCercano);
        }}
        //marks={niveles.map((val) => ({ value: val, label: val.toString() }))}
      />
    </div>
  );
}
