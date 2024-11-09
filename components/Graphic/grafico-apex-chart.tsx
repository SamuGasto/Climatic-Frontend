"use client";
import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import VentanaGrafico from "./ventana-grafico";
import { useTheme } from "next-themes";
import { useChartStore } from "@/providers/chart-store-provider";
import GenerateApexChart from "@/utils/GenerateChart";

export default function GraficoApex() {
  const chartSelected = useChartStore((state) => state.chartSelected);
  const typeChart = useChartStore((state) => state.typeChart);
  const actualTheme = useTheme();
  const color = ["#ffcd6d"];

  const { Interactive } = GenerateApexChart(
    chartSelected.backendData,
    typeChart === "barras" ? "clasificacion" : "barras", //Hay que arreglar esto, la opcion del caso false
    {
      color: color,
      theme: actualTheme,
    }
  );

  //Renderizar el gráfico
  return (
    <div className="flex w-full h-full justify-center">
      <Card className="flex w-full h-full z-10 bg-transparent" shadow="none">
        <CardBody>
          <VentanaGrafico
            className="p-2 "
            options={Interactive.options}
            series={Interactive.series}
            type={Interactive.options.chart?.type}
            width={"98%"}
            height={"98%"}
          />
        </CardBody>
      </Card>
    </div>
  );
}
