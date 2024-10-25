import React from "react";
import SeleccionHora from "./time-input";
import FechaRango from "./fecha-rango";
import SeleccionFecha from "./seleccion-fecha";

type Props = {
  desabilitado: boolean;
  setFecha: React.Dispatch<React.SetStateAction<string[] | null>>;
  setHora: React.Dispatch<React.SetStateAction<string>>;
  typeChart:
    | "image"
    | "line"
    | "area"
    | "bar"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "candlestick"
    | "boxPlot"
    | "radar"
    | "polarArea"
    | "rangeBar"
    | "rangeArea"
    | "treemap";
};

const OpcionesTiempo = (props: Props) => {
  const { desabilitado, setFecha, setHora, typeChart } = props;
  console.log(typeChart);
  return (
    <div className="flex flex-col gap-3 w-full">
      <p className="flex place-content-center">Selección de la fecha</p>

      {typeChart === "heatmap" || "image" ? (
        <SeleccionFecha desabilitado={desabilitado} setFecha={setFecha} />
      ) : null}

      {typeChart === "heatmap" || "image" ? (
        <SeleccionHora desabilitado={desabilitado} setHora={setHora} />
      ) : null}

      {typeChart === "line" ? (
        <FechaRango desabilitado={desabilitado} setFecha={setFecha} />
      ) : null}
    </div>
  );
};

export default OpcionesTiempo;
