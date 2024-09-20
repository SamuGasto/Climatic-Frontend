import React from "react";
import Titulo from "./titulo";
import Grafico from "./grafico";
import { data } from "./dataexample";
import GraficoPlotly from "./grafico-plotly";

export default function Visualizador() {
  //<GraficoPlotly />
  return (
    <div className="flex w-full flex-col gap-10 p-6">
      <Titulo
        original_tittle="Título de ejemplo"
        original_subtittle="Subtítulo de ejemplo"
      />

      <Grafico seriesData={data} typeChart="heatmap" />
    </div>
  );
}
