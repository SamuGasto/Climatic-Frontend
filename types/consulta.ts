export interface Consulta {
  variable: string;
  latitud: number[];
  longitud: number[];
  typeChart:
  | "contorno"
  | "vectoriales"
  | "clasificacion"
  | "isobaras"
  | "lineas"
  | "dispersion"
  | "rosa_de_vientos"
  | "polares"
  | "barras";
  imagen: boolean;
  tiempo?: string[];
  nivel?: number;
}
