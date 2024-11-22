import React, { useEffect, useState } from "react";
import Titulo from "./Text/titulo";
import GraficoApex from "./grafico-apex-chart";
import GraficoImagen from "./grafico-imagen";
import { useChartStore } from "@/providers/chart-store-provider";
import { BarChartOffIcon } from "../icons";
import Subtitulo from "./Text/subtitulo";
import { Divider } from "@nextui-org/react";
import InfoApexChart from "./info-grafico-apex";
import InfoGraficoImagen from "./info-grafico-imagen";
import ResumenDatos from "./resumen-datos";

export default function Visualizador() {
  const chartSelected = useChartStore((state) => state.chartSelected);

  if (!chartSelected) {
    return <div>No hay un gráfico seleccionado...</div>;
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
          <div className="flex w-full h-full flex-col gap-10">
            <section className="flex w-full min-h-[360px]">
              {chartSelected.typeChart == "contorno" ||
              chartSelected.typeChart == "vectoriales" ||
              chartSelected.typeChart == "dispersion" ? (
                <GraficoImagen />
              ) : (
                <GraficoApex />
              )}
            </section>
            <Divider />
            <section className="flex-1">
              <div className="flex flex-col gap-4">
                <h1 className="font-semibold text-4xl text-center">
                  {chartSelected.backendData.var}
                </h1>
                <ResumenDatos chart={chartSelected} />
                <div className="flex w-full max-h-48">
                  {chartSelected.typeChart === "lineas" ? (
                    <InfoApexChart
                      backendData={chartSelected.backendData}
                      stats={chartSelected.stats}
                    />
                  ) : (
                    <InfoGraficoImagen chart={chartSelected} />
                  )}
                </div>
              </div>
            </section>
          </div>
        ) : (
          <div className="flex flex-col w-full h-full gap-10 items-center justify-center">
            <h1 className="font-semibold text-4xl text-center">
              No se ha creado ningún gráfico todavía...
            </h1>
            <BarChartOffIcon width={200} />
          </div>
        )}
      </div>
    </div>
  );
}
