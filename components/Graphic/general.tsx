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
    <div className="flex w-full flex-col md:gap-10 md:p-6 gap-y-6 -m-px">
      <Titulo
        original_tittle="Título de ejemplo"
        original_subtittle="Subtítulo de ejemplo"
      />
      <Checkbox onValueChange={(value) => setColoresNormalizados(value)}>
        Normalizar Colores
      </Checkbox>
      <Grafico
        seriesData={data}
        typeChart={typeChart}
        normalizarColores={coloresNormalizados}
      />
    </div>
  );
}
