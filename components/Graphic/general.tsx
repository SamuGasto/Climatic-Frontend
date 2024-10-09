import React, { useState } from "react";
import Titulo from "./titulo";
import BackendData from "@/types/data";
import { Checkbox } from "@nextui-org/react";
import GraficoApex from "./grafico-apex-chart";
import GraficoImagen from "./grafico-imagen";
import { useChartStore } from "@/utils/Stores/chartStore";

interface PropType {
  backendData: BackendData;
}

export default function Visualizador(props: PropType) {
  const { backendData } = props;
  const { chartSelected, typeChart } = useChartStore.getState();
  console.log(chartSelected?.image);
  //<GraficoPlotly />
  return (
    <div className="flex w-full flex-col gap-10 p-6">
      <Titulo
        original_tittle="Título de ejemplo"
        original_subtittle="Subtítulo de ejemplo"
      />
      <div className="flex w-full h-screen">
        {chartSelected?.image && <GraficoImagen />}
        <GraficoApex seriesData={backendData} typeChart={typeChart} />
      </div>
    </div>
  );
}
