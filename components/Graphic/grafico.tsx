import React from "react";
import { ApexOptions } from "apexcharts";
import { Card, CardBody } from "@nextui-org/card";
import VentanaGrafico from "./ventana-grafico";
import Mapa from "./mapa.jpg";
import { Image } from "@nextui-org/image";
import { ChartConfig, ChartConfigInteractive } from "@/types/chart";
import BackendData from "@/types/data";
import NormalizedData from "@/utils/NormalizedData";
import { useTheme } from "next-themes";
import GenerateChart from "@/utils/GenerateChart";

interface PropType {
  seriesData: BackendData;
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
  normalizarColores: boolean;
}

export default function Grafico(props: PropType) {
  const { seriesData, typeChart, normalizarColores } = props;
  const actualTheme = useTheme();
  const color = ["#ffcd6d"];

  const { Interactive } = GenerateChart(seriesData, typeChart, {
    color: color,
    isNormalized: normalizarColores,
    theme: actualTheme,
  });

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
