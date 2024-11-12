export interface Consulta {
  variable: string;
  latitud: number;
  longitud: number;
  typeChart: string;
  imagen: boolean;
  tiempo?: string[];
  nivel?: number;
  unidadMedida?: string;
  calculoDatos?: string;
}
