import {
  ChartConfig,
  ChartConfigInteractive,
  ChartConfigNoInteractive,
  typeChart,
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
  const { Interactive, NoInteractive } = GenerateApexChart(
    emptyData,
    "contorno"
  );
  return { Interactive, NoInteractive };
}

function GenerateApexChart(
  data: BackendData,
  typeChart: typeChart,
  options?: ChartOptions
): FinalCharts {
  const seriesData = TransformToSeries(typeChart, data);
  let x_axis = "Longitud";
  let y_axis = "Latitud";

  let labels = data.longitude.map((l) => {
    return l.toString();
  });

  if (typeChart === "lineas" && Array.isArray(data.time)) {
    labels = data.time.map((t) => {
      return t;
    });
    x_axis = "Día";
    y_axis = "Valor";
  }

  const InteractiveChart = ChartConfigInteractive({
    data: seriesData,
    theme: options?.theme?.theme === "light" ? "light" : "dark",
    typeChart: typeChart,
    categories: labels,
    x_axis: x_axis,
    y_axis: y_axis,
    colors: options?.color ? options?.color : ["#858585"],
  });
  const NoInteractiveChart = ChartConfigNoInteractive({
    data: seriesData,
    theme: options?.theme?.theme === "light" ? "light" : "dark",
    typeChart: typeChart,
    categories: labels,
    x_axis: x_axis,
    y_axis: y_axis,
    colors: options?.color ? options?.color : ["#858585"],
  });
  return { Interactive: InteractiveChart, NoInteractive: NoInteractiveChart };
}

export default GenerateApexChart;
