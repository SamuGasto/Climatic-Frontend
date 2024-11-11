export const mapaVariables: { [key: string]: string[] } = {
  "contorno": [
    "t", //temperatura
    "t2m", //t a 2 m de la superficie
    "q", //humedad especifica
    "tisr", //radiación solar incidentes
    "sst" //temperatura en la superficie del mat
  ],
  "vectoriales": [
    "u", //viento
    "u10", //viento a 10 metros sobre la superficie.
    "w", //Velocidad vertical en la atmósfera
  ],
  "dispersion": [
    "anor", //ángulo de la orografía a escala subcuadrícula.
    "slor", //pendiente de la orografía a escala subcuadrícula.
  ]
}