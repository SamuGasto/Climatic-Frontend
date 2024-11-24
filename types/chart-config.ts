import { ApexOptions } from "apexcharts";
import { Series } from "./series";

export interface ChartConfig {
  series: Series[];
  options: ApexOptions;
}
