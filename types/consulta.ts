export interface Consulta {
  variable: string,
  latitud: number[],
  longitud: number[],
  tiempo: string[],
  altura?: number,
  esMapaCalor?: boolean
}
