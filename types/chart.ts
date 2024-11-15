import { ApexOptions } from "apexcharts";
import BackendData from "./backend-data";

export type Series =
  | {
      data: number[];
    }
  | {
      data: [number, number][];
    }
  | {
      data: { x: number; y: number }[];
    }
  | { data: { x: string; y: number }[] }
  | {
      name: string;
      data: { x: string; y: number }[];
    }
  | {
      name: string;
      data: number[];
    };

export interface ChartConfig {
  series: Series[];
  options: ApexOptions;
}

export type typeChart =
  | "contorno"
  | "vectoriales"
  | "clasificacion"
  | "lineas"
  | "dispersion"
  | "polares";

export interface Chart {
  id: number;
  title: string;
  subtitle: string;
  active: boolean;
  backendData: BackendData;
  typeChart: typeChart;
}

interface Props {
  data: Series[];
  theme: "dark" | "light";
  typeChart: typeChart;
  categories: string[];
  x_axis: string;
  y_axis: string;
  colors: any[] | undefined;
}

export function ChartConfigInteractive(props: Props): ChartConfig {
  const { data, theme, typeChart, categories, x_axis, y_axis, colors } = props;
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
  } else if (typeChart === "clasificacion") {
    type = "pie"; // HAY QUE ARREGLAR ESTO
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
      },
      plotOptions: {
        heatmap: {
          radius: 6,
        },
      },
      colors: colors,
      xaxis: {
        type: "category",
        categories: categories,
        title: {
          text: x_axis,
        },
        decimalsInFloat: 1,
      },
      yaxis: {
        title: {
          text: y_axis,
        },
        decimalsInFloat: 5,
      },
      tooltip: {
        y: {
          title: {
            formatter: (seriesName) => "",
          },
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

export function ChartConfigNoInteractive(props: Props): ChartConfig {
  const { data, typeChart, categories, x_axis, y_axis, colors } = props;

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
  } else if (typeChart === "clasificacion") {
    type = "pie"; // HAY QUE ARREGLAR ESTO
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

      colors: colors,
      xaxis: {
        labels: {
          show: false,
        },
        type: "category",
        categories: categories,
        title: {
          text: x_axis,
        },
        offsetY: -35,
        decimalsInFloat: 1,
      },
      yaxis: {
        labels: {
          show: false,
        },
        title: {
          text: y_axis,
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
