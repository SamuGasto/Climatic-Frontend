import { Chart } from "./chart";

export interface Board {
  id: number;
  name: string;
  charts: Chart[];
  lastChartId: number;
}
