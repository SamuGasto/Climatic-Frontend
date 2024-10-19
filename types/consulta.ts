export interface Consulta {
  variable: string;
  latitud: number[];
  longitud: number[];
  imagen?: string;
  typeChart?:
    | "image"
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
  tiempo?: string[];
  nivel?: number;
}
