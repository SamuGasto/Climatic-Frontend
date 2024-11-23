import { ChartConfig } from "@/types/chart-config";
import { Series } from "@/types/series";
import { typeChart } from "@/types/typeChart";

interface Props {
  data: Series[];
  theme: "dark" | "light";
  typeChart: typeChart;
  categories?: string[];
  x_axis: string;
  y_axis: string;
  colors: any[] | undefined;
  decimals?: number;
  title?: string;
}

export function ChartConfigNoInteractive(props: Props): ChartConfig {
  const { data, typeChart, categories, x_axis, y_axis, colors, title } = props;

  let type:
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
    | "treemap"
    | undefined = "area";
  if (typeChart === "lineas") {
    type = "line";
  } else if (typeChart === "dispersion") {
    type = "scatter"; // HAY QUE ARREGLAR ESTO
  } else if (typeChart === "polares") {
    type = "polarArea";
  }

  return {
    series: data,
    options: {
      chart: {
        height: "98%",
        width: "98%",
        type: type,
        zoom: {
          enabled: false,
        },
        toolbar: { show: false },
        animations: { enabled: false },
        offsetX: -12,
        offsetY: -8,
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      markers: {
        size: 4,
      },
      colors: colors,
      xaxis: {
        labels: {
          show: false,
        },
        type: "category",
        categories: categories,
        title: {
          text: `${x_axis.slice(0, 30)}...`,
          style: {
            color: "#767676",
          },
        },
        offsetY: -35,
        decimalsInFloat: 1,
      },
      yaxis: {
        labels: {
          show: false,
        },
        title: {
          text: `${y_axis.slice(0, 11)}...`,
          style: {
            color: "#767676",
          },
        },

        decimalsInFloat: 1,
      },
      tooltip: { enabled: false },
      dataLabels: {
        enabled: false,
      },
      legend: { show: false },
      noData: {
        text: "Cargando...",
      },
    },
  };
}
