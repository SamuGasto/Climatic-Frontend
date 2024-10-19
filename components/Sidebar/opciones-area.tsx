import React, { useState } from "react";
import Deslizador from "./slider";

type Props = {
  setLatitud: React.Dispatch<React.SetStateAction<number[]>>;
  setLongitud: React.Dispatch<React.SetStateAction<number[]>>;
};

const OpcionesArea = (props: Props) => {
  const { setLatitud, setLongitud } = props;

  return (
    <div className="flex w-full flex-col gap-3">
      <p>Configuración del area del gráfico</p>
      <Deslizador
        label="Rango de la latitud"
        maximo={-34}
        minimo={-35}
        step={0.25}
        defaultValue={[-34.75, -34.25]}
        setValores={setLatitud}
      />

      <Deslizador
        label="Rango de la longitud"
        maximo={110}
        minimo={108}
        step={0.25}
        defaultValue={[108.25, 109]}
        setValores={setLongitud}
      />
    </div>
  );
};

export default OpcionesArea;
