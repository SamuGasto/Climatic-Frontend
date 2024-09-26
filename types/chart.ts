import { ApexOptions } from "apexcharts";
import BackendData from "./data";

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
  config: ChartConfig;
  inactiveConfig: ChartConfig;
}

interface Props {
  originalData: Series[];
  visualData: Series[];
  units: string;
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
  const {
    originalData,
    visualData,
    units,
    theme,
    typeChart,
    categories,
    colors,
  } = props;

  const finalJson: ChartConfig = {
    series: visualData,
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
      tooltip: {
        y: {
          formatter: (val: number, { seriesIndex, dataPointIndex }: any) => {
            return originalData[seriesIndex].data[dataPointIndex].y
              .toFixed(3)
              .toString();
          },
          title: {
            formatter: (seriesName: string) => {
              return units;
            },
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
  return finalJson;
}

export function ChartConfigNoInteractive(props: Props): ChartConfig {
  const { originalData, visualData, typeChart, categories, colors } = props;
  return {
    series: visualData,
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
