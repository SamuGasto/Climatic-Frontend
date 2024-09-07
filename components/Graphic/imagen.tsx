"use client";
import React, { useEffect } from "react";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import Grafico from "./grafico";
import { Card, CardBody } from "@nextui-org/card";

interface PropType {
  seriesData: {
    latitude: number[];
    longitude: number[];
    time?: string | string[];
    level?: number | number[];
    data: number[][];
    units: string;
  };
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
}

interface Config {
  series: { name: string; data: { x: string; y: number }[] }[];
  options: ApexOptions;
}

export default function Imagen(props: PropType) {
  const { seriesData, typeChart } = props;

  const finalData = seriesData.data.map((latitud, index) => {
    return {
      name: seriesData.latitude[index].toString(),
      data: latitud.map((element, i) => {
        return {
          x: seriesData.longitude[i].toString(),
          y: element,
        };
      }),
    };
  });

  const labels = seriesData.longitude.map((l) => {
    return l.toString();
  });
  console.log(finalData[0]["data"]);
  console.log(finalData[1]["data"]);
  const w = "98%";
  const h = "98%";
  const chartConfig: Config = {
    series: finalData,
    options: {
      chart: {
        height: h,
        width: w,
        type: typeChart,
        zoom: {
          enabled: true,
          type: "xy",
        },
      },
      plotOptions: {
        heatmap: {
          radius: 6,
        },
      },
      colors: ["#ffcd6d"],
      xaxis: {
        type: "category",
        categories: labels,
        title: {
          text: "Longitud",
        },
      },
      yaxis: {
        title: {
          text: "Latitud",
        },
      },
      dataLabels: {
        enabled: false,
      },
      noData: {
        text: "Cargando...",
      },
    },
  };
  return (
    <Card className="flex w-full h-full">
      <CardBody>
        <Grafico
          options={chartConfig.options}
          series={chartConfig.series}
          type={typeChart}
          width={w}
          height={h}
        />
      </CardBody>
    </Card>
  );
}
