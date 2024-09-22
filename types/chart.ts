import { ApexOptions } from "apexcharts";
import BackendData from "./data";

export interface Chart {
  tittle: string;
  subtittle: string;
  config: ChartConfig;
}

export interface ChartConfig {
  series: { name: string; data: { x: string; y: number }[] }[];
  options: ApexOptions;
}
