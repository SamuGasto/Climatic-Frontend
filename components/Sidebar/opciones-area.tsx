import React from "react";
import Deslizador from "./slider";

const OpcionesArea = () => {
  return (
    <div className="flex w-full flex-col gap-3">
      <p>Configuración del area del gráfico</p>
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
        defaultValue={[108.25, 109]}
      />
    </div>
  );
};

export default OpcionesArea;
