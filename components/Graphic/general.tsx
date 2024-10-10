import React, { useEffect, useState } from "react";
import Titulo from "./titulo";
import BackendData from "@/types/backend-data";
import { Checkbox } from "@nextui-org/react";
import GraficoApex from "./grafico-apex-chart";
import GraficoImagen from "./grafico-imagen";
import { useChartStore } from "@/utils/Stores/chartStore";

export default function Visualizador() {
  const { chartSelected } = useChartStore.getState();
  const [refresh, SetRefresh] = useState(false);

  useEffect(() => {
    SetRefresh(!refresh);
  }, [chartSelected]);

  return (
    <div className="flex w-full flex-col gap-10 p-6">
      <Titulo
        original_tittle="Título de ejemplo"
        original_subtittle="Subtítulo de ejemplo"
      />
      <div className="flex w-full min-h-[360px]">
        {chartSelected.typeChart !== "image" ? (
          <GraficoImagen />
        ) : (
          <GraficoApex />
        )}
      </div>
    </div>
  );
}
