import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import VentanaGrafico from "./ventana-grafico";
import BackendData from "@/types/data";
import { useTheme } from "next-themes";
import GenerateChart from "@/utils/GenerateChart";

interface PropType {
  seriesData: BackendData;
  typeChart:
    | "image"
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
}

export default function GraficoApex(props: PropType) {
  const { seriesData, typeChart } = props;
  const actualTheme = useTheme();
  const color = ["#ffcd6d"];

  const { Interactive } = GenerateChart(
    seriesData,
    typeChart === "image" ? "bar" : typeChart,
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
