import React from "react";
import Titulo from "./titulo";
import Grafico from "./grafico";
import GraficoPlotly from "./grafico-plotly";
import BackendData from "@/types/data";

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
  //<GraficoPlotly />
  return (
    <div className="flex w-full flex-col gap-10 p-6">
      <Titulo
        original_tittle="Título de ejemplo"
        original_subtittle="Subtítulo de ejemplo"
      />

      <Grafico seriesData={data} typeChart={typeChart} />
    </div>
  );
}
