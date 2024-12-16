import BackendData from "./backend-data";
import { ChartStats } from "./stats";
import { typeChart } from "./typeChart";

export interface Chart {
  id: number;
  title: string;
  subtitle: string;
  active: boolean;
  backendData: BackendData;
  typeChart: typeChart;
  stats: ChartStats[];
}
