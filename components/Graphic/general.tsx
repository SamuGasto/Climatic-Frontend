import React from "react";
import Titulo from "./Text/titulo";
import GraficoApex from "./grafico-apex-chart";
import GraficoImagen from "./grafico-imagen";
import { useChartStore } from "@/providers/chart-store-provider";
import { BarChartOffIcon } from "../icons";
import Subtitulo from "./Text/subtitulo";
import { Divider } from "@nextui-org/react";
import InfoChart from "./info-grafico";

export default function Visualizador() {
  const chartSelected = useChartStore((state) => state.chartSelected);

  if (!chartSelected) {
    return;
  }

  return (
    <div className="flex w-full">
      <div className="flex w-full flex-col gap-10 p-6">
        <div className="flex flex-col w-full gap-6 justify-center items-center">
          <Titulo />
          <Subtitulo />
        </div>
        <Divider className="" />
        {chartSelected.active ? (
          <div className="flex w-full min-h-[360px]">
            {chartSelected.typeChart == "contorno" ||
            chartSelected.typeChart == "vectoriales" ||
            chartSelected.typeChart == "dispersion" ? (
              <GraficoImagen />
            ) : (
              <GraficoApex />
            )}
          </div>
        ) : (
          <div className="flex flex-col w-full h-full gap-10 items-center justify-center">
            <h1 className="font-semibold text-4xl text-center">
              No se ha creado ningún gráfico todavía...
            </h1>
            <BarChartOffIcon width={200} />
          </div>
        )}
        <InfoChart backendData={chartSelected.backendData} />
      </div>
    </div>
  );
}
