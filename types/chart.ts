import { ApexOptions } from "apexcharts";
import BackendData from "./backend-data";

export interface Series {
  name: string;
  data: { x: string; y: number }[];
}

export interface ChartConfig {
  series: Series[];
  options: ApexOptions;
}

export interface Chart {
  id: number;
  title: string;
  subtitle: string;
  active: boolean;
  backendData: BackendData;
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

interface Props {
  data: Series[];
  theme: "dark" | "light";
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
  categories: string[];
  colors: any[] | undefined;
}

export function ChartConfigInteractive(props: Props): ChartConfig {
  const { data, theme, typeChart, categories, colors } = props;

  return {
    series: data,
    options: {
      chart: {
        height: "98%",
        width: "98%",
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
      colors: colors,
      xaxis: {
        type: "category",
        categories: categories,
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
  const { data, typeChart, categories, colors } = props;
  return {
    series: data,
    options: {
      chart: {
        height: "98%",
        width: "98%",
        type: typeChart,
        zoom: {
          enabled: false,
        },
        toolbar: { show: false },
        animations: { enabled: false },
      },

      colors: colors,
      xaxis: {
        type: "category",
        categories: categories,
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
      tooltip: { enabled: false },
      dataLabels: {
        enabled: false,
      },
      noData: {
        text: "Cargando...",
      },
    },
  };
}
