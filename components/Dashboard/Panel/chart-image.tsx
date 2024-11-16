import VentanaGrafico from "@/components/Graphic/ventana-grafico";
import { Chart, ChartConfig } from "@/types/chart";
import GenerateApexChart from "@/utils/GenerateChart";
import { useChartStore } from "@/providers/chart-store-provider";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { exampleData } from "@/config/test-data";

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
    }
  ).NoInteractive;

  console.log(chart.typeChart);

  return (
    <div className="flex h-40 w-full ">
      <VentanaGrafico
        className="flex w-full h-full  p-2"
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
