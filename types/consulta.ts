import { typeChart } from "./chart";

export interface Consulta {
  variable: string;
  variable2?: string;
  latitud: number[];
  longitud: number[];
  typeChart: typeChart;
  tiempo?: string | string[];
  nivel?: number;
  unidadMedida?: string;
  unidadMedida2?: string;
  calculoDatos?: string;
}
