import { typeChart } from "./chart";

export interface Consulta {
  variable: string;
  latitud: number[];
  longitud: number[];
  typeChart: typeChart;
  tiempo?: string[];
  nivel?: number;
}
