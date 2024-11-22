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
}

export function ChartConfigInteractive(props: Props): ChartConfig {
  const {
    data,
    theme,
    typeChart,
    categories,
    x_axis,
    y_axis,
    colors,
    decimals,
  } = props;
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

  let tooltip = {
    formatter: (seriesName: string) => "",
  };
  let type_xaxis: "category" | "numeric" | "datetime" | undefined = "category";
  if (typeChart === "lineas") {
    type = "line";
    type_xaxis = "datetime";
  } else if (typeChart === "dispersion") {
    type = "scatter";
    type_xaxis = "numeric";
    tooltip = {
      formatter: (seriesName: string) => seriesName,
    };
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
          enabled: true,
          type: "xy",
        },
        animations: {
          enabled: false,
        },
      },
      plotOptions: {
        heatmap: {
          radius: 6,
        },
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      markers: {
        size: 5,
      },
      colors: colors,
      xaxis: {
        type: type_xaxis,
        categories: categories,
        title: {
          text: x_axis,
        },
        decimalsInFloat: decimals,
      },
      yaxis: {
        title: {
          text: y_axis,
        },
        decimalsInFloat: decimals,
      },
      tooltip: {
        y: {
          title: tooltip,
        },
      },
      dataLabels: {
        enabled: false,
      },
      noData: {
        text: "Cargando...",
      },
      theme: {
        mode: theme,
      },
    },
  };
}
