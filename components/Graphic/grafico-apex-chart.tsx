"use client";
import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import VentanaGrafico from "./ventana-grafico";
import { useTheme } from "next-themes";
import { useChartStore } from "@/providers/chart-store-provider";
import GenerateApexChart from "@/utils/to_apex_graph/generate-chart";
import { exampleData } from "@/config/test-data";
import { check_first_decimal_pos } from "@/utils/check_first_decimal_pos";

export default function GraficoApex() {
  const chartSelected = useChartStore((state) => state.chartSelected);
  const actualTheme = useTheme();
  const color = ["#ffcd6d"];

  if (!chartSelected?.backendData) {
    return <div>Falta información del backend...</div>;
  }

  const decimals = check_first_decimal_pos(
    chartSelected.stats.length > 1
      ? chartSelected.stats[0].min < chartSelected.stats[1].min
        ? chartSelected.stats[0].min
        : chartSelected.stats[1].min
      : chartSelected.stats[0].min
  );

  const { Interactive } = GenerateApexChart(
    chartSelected.backendData,
    chartSelected.typeChart,
    {
      color: color,
      theme: actualTheme,
      decimals: decimals,
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
            width={"100%"}
            height={"100%"}
          />
        </CardBody>
      </Card>
    </div>
  );
}
