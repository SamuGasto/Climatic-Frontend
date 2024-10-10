import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import VentanaGrafico from "./ventana-grafico";
import { useTheme } from "next-themes";
import GenerateChart from "@/utils/GenerateChart";
import { useChartStore } from "@/utils/Stores/chartStore";

export default function GraficoApex() {
  const { chartSelected, typeChart } = useChartStore.getState();
  const actualTheme = useTheme();
  const color = ["#ffcd6d"];

  const { Interactive } = GenerateChart(
    chartSelected.backendData,
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
