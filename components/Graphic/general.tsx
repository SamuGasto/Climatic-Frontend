import React, { useState } from "react";
import Titulo from "./titulo";
import Grafico from "./grafico";
import GraficoPlotly from "./grafico-plotly";
import BackendData from "@/types/data";
import { Checkbox } from "@nextui-org/react";

interface PropType {
  data: BackendData;
  typeChart:
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
}

export default function Visualizador(props: PropType) {
  const { data, typeChart } = props;
  const [coloresNormalizados, setColoresNormalizados] = useState(false);
  //<GraficoPlotly />
  return (
    <div className="flex w-full h-full flex-col p-1 gap-5 sm:p-5  ">
      <Titulo
        original_tittle="Título de ejemplo"
        original_subtittle="Subtítulo de ejemplo"
      />
      <Checkbox onValueChange={(value) => setColoresNormalizados(value)}>
        Normalizar Colores
      </Checkbox>
      <div className="w-full h-full overflow-hidden flex items-center justify-center ">
      <Grafico
        seriesData={data}
        typeChart={typeChart}
        normalizarColores={coloresNormalizados}/>
        </div>
        </div>
  );
}
