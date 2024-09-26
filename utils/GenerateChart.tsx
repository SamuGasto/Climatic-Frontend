import {
  ChartConfig,
  ChartConfigInteractive,
  ChartConfigNoInteractive,
} from "@/types/chart";
import BackendData from "@/types/data";
import NormalizedData from "./NormalizedData";
import { UseThemeProps } from "next-themes/dist/types";

interface ChartOptions {
  color?: any[];
  isNormalized?: boolean;
  theme?: UseThemeProps;
}

interface FinalCharts {
  Interactive: ChartConfig;
  NoInteractive: ChartConfig;
}

function GenerateChart(
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
  const { real, visual } = NormalizedData(data);

  const labels = data.longitude.map((l) => {
    return l.toString();
  });

  const finalVisualData = options?.isNormalized ? visual : real;

  const InteractiveChart = ChartConfigInteractive({
    originalData: real,
    visualData: finalVisualData,
    units: data.units,
    theme: options?.theme?.theme === "light" ? "light" : "dark",
    typeChart: typeChart,
    categories: labels,
    colors: options?.color ? options?.color : ["#858585"],
  });
  const NoInteractiveChart = ChartConfigNoInteractive({
    originalData: real,
    visualData: finalVisualData,
    units: data.units,
    theme: options?.theme?.theme === "light" ? "light" : "dark",
    typeChart: typeChart,
    categories: labels,
    colors: options?.color ? options?.color : ["#858585"],
  });
  return { Interactive: InteractiveChart, NoInteractive: NoInteractiveChart };
}

export default GenerateChart;
