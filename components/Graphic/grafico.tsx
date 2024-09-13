import React from "react";
import { ApexOptions } from "apexcharts";
import { Card, CardBody } from "@nextui-org/card";
import VentanaGrafico from "./ventana-grafico";
import Mapa from "./mapa.jpg";
import { Image } from "@nextui-org/image";

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

export default function Grafico(props: PropType) {
  const { seriesData, typeChart } = props;

  //Transformar la data en algo legible para el ApexChart
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

  //Consegir las labels para el gráfico
  const labels = seriesData.longitude.map((l) => {
    return l.toString();
  });

  //Generar la configuración
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
        decimalsInFloat: 1,
      },
      yaxis: {
        title: {
          text: "Latitud",
        },
        decimalsInFloat: 1,
      },
      tooltip: {
        y: {
          formatter: (value) => {
            return value.toFixed(3).toString();
          },
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

  //Renderizar el gráfico
  return (
    <div className="flex w-full h-full relative justify-center">
      <Card
        className="flex w-full h-full z-10 absolute opacity-75"
        shadow="none"
      >
        <CardBody>
          <VentanaGrafico
            className="p-2"
            options={chartConfig.options}
            series={chartConfig.series}
            type={typeChart}
            width={w}
            height={h}
          />
        </CardBody>
      </Card>
      <Image className="flex w-full h-full p-10 z-0" src={Mapa.src} />
    </div>
  );
}
