import React, { useRef, useState } from "react";
import Deslizador from "./slider";
import Boton from "./boton";
import { Consulta } from "@/types/consulta";

type Props = {
  consultaOriginal: Consulta;
  setConsulta: (consulta: Consulta) => void;
};

const OpcionesArea = (props: Props) => {
  const { setConsulta, consultaOriginal } = props;
  const [valores, setValores] = useState("hola");

  const getValores = (v: string) => {
    setValores(v);
    console.log(valores);
  };

  return (
    <div className="flex w-full flex-col gap-3">
      <p>Configuración del area del gráfico</p>
      <Deslizador
        label="Rango de la latitud"
        maximo={-34}
        minimo={-35}
        step={0.25}
        defaultValue={[-34.75, -34.25]}
        getValores={getValores}
        setConsulta={setConsulta}
        consultaOriginal={consultaOriginal}
        tipo="latitud"
      />

      <Deslizador
        label="Rango de la longitud"
        maximo={110}
        minimo={108}
        step={0.25}
        defaultValue={[108.25, 109]}
        setConsulta={setConsulta}
        consultaOriginal={consultaOriginal}
        tipo="longitud"
      />
    </div>
  );
};

export default OpcionesArea;
