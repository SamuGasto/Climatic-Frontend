export interface Consulta {
  variable: string;
  latitud: number[];
  longitud: number[];
  imagen: boolean;
  tiempo?: string;
  altura?: number;
}
