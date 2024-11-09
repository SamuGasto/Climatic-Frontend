import VentanaGrafico from "@/components/Graphic/ventana-grafico";
import { ChartConfig } from "@/types/chart";
import GenerateApexChart from "@/utils/GenerateChart";
import { useChartStore } from "@/providers/chart-store-provider";
import { useTheme } from "next-themes";
import React from "react";

function ChartImage() {
  const chartSelected = useChartStore((state) => state.chartSelected);
  const typeChart = useChartStore((state) => state.typeChart);
  const actualTheme = useTheme();
  const color = ["#ffcd6d"];

  const { NoInteractive } = GenerateApexChart(
    chartSelected.backendData,
    typeChart === "barras" ? "bar" : "area", //HAY QUE CORREGIR ESTO
    {
      color: color,
      theme: actualTheme,
    }
  );

  return (
    <div className="flex w-full h-full">
      <VentanaGrafico
        className="flex w-full h-full p-2"
        options={NoInteractive.options}
        series={NoInteractive.series}
        type={NoInteractive.options.chart?.type}
        width={NoInteractive.options.chart?.width}
        height={NoInteractive.options.chart?.height}
      />
    </div>
  );
}

export default ChartImage;
