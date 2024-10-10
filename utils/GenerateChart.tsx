import {
  ChartConfig,
  ChartConfigInteractive,
  ChartConfigNoInteractive,
} from "@/types/chart";
import BackendData from "@/types/backend-data";
import { UseThemeProps } from "next-themes/dist/types";
import { TransformToSeries } from "./TransformToSeries";

interface ChartOptions {
  color?: any[];
  isNormalized?: boolean;
  theme?: UseThemeProps;
}

interface FinalCharts {
  Interactive: ChartConfig;
  NoInteractive: ChartConfig;
}

export function CreateEmptyApexChart() {
  const emptyData: BackendData = {
    latitude: [],
    longitude: [],
    image: "",
    data: [],
    time: "",
    units: "",
  };
  const { Interactive, NoInteractive } = GenerateApexChart(emptyData, "bar");
  return { Interactive, NoInteractive };
}

function GenerateApexChart(
  data: BackendData,
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
    | "treemap",
  options?: ChartOptions
): FinalCharts {
  const seriesData = TransformToSeries(data);

  const labels = data.longitude.map((l) => {
    return l.toString();
  });

  const InteractiveChart = ChartConfigInteractive({
    data: seriesData,
    theme: options?.theme?.theme === "light" ? "light" : "dark",
    typeChart: typeChart,
    categories: labels,
    colors: options?.color ? options?.color : ["#858585"],
  });
  const NoInteractiveChart = ChartConfigNoInteractive({
    data: seriesData,
    theme: options?.theme?.theme === "light" ? "light" : "dark",
    typeChart: typeChart,
    categories: labels,
    colors: options?.color ? options?.color : ["#858585"],
  });
  return { Interactive: InteractiveChart, NoInteractive: NoInteractiveChart };
}

export default GenerateApexChart;
