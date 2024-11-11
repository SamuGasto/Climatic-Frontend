export const mapaVariables: { [key: string]: string[] } = {
  "contorno": [
    "t", //temperatura
    "t2m", //t a 2 m de la superficie
    "q", //humedad especifica
    "tisr", //radiación solar incidentes
    "sst" //temperatura en la superficie del mat
  ],
  "dispersion": [
    "anor", //ángulo de la orografía a escala subcuadrícula.
    "slor", //pendiente de la orografía a escala subcuadrícula.
  ]
}