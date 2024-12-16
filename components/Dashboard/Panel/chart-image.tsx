import VentanaGrafico from "@/components/Graphic/ventana-grafico";
import { Chart } from "@/types/chart";
import GenerateApexChart from "@/utils/to_apex_graph/generate-chart";
import { useTheme } from "next-themes";
import React from "react";

interface chartImage {
  chart: Chart;
}

function ChartImage(props: chartImage) {
  const { chart } = props;
  const actualTheme = useTheme();
  const color = ["#ffcd6d"];
  const noInteractive = GenerateApexChart(
    chart.backendData,
    chart.typeChart, //HAY QUE CORREGIR ESTO
    {
      color: color,
      theme: actualTheme,
      title: chart.backendData.var,
    }
  ).NoInteractive;

  return (
    <div className="flex h-40 w-full p-1">
      <VentanaGrafico
        className="flex w-full h-full p-2"
        options={noInteractive.options}
        series={noInteractive.series}
        type={noInteractive.options.chart?.type}
        width={noInteractive.options.chart?.width}
        height={noInteractive.options.chart?.height}
      />
    </div>
  );
}

export default ChartImage;
