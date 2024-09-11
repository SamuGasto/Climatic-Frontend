import React from "react";
import Desplegable from "./select";
import Deslizador from "./slider";

type Props = {
  desabilitado: boolean;
};

const OpcionesArea = (props: Props) => {
  const { desabilitado } = props;

  const latitud = [
    { key: 0, label: "latitud 1" },
    { key: 1, label: "latitud 2" },
    { key: 2, label: "..." },
  ];

  const longitud = [
    { key: 0, label: "longitud 1" },
    { key: 1, label: "longitud 2" },
    { key: 2, label: "..." },
  ];

  return (
    <div className="flex w-full flex-col gap-3">
      <Deslizador
        label="Rango de la latitud"
        maximo={-34}
        minimo={-35}
        step={0.25}
        defaultValue={[-34.75, -34.25]}
      />

      <Deslizador
        label="Rango de la longitud"
        maximo={110}
        minimo={108}
        step={0.25}
        defaultValue={[108, 110]}
      />
    </div>
  );
};

export default OpcionesArea;
