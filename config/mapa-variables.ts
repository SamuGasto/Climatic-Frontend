export const mapaVariables: { [key: string]: string[] } = {
  contorno: [
    "t", //temperatura
    "t2m", //t a 2 m de la superficie
    "q", //humedad especifica
    "tisr", //radiación solar incidentes
    "sst", //temperatura en la superficie del mat
    "anor", //Ángulo de la orografía a escala subcuadrícula
    "slor", //Pendiente de la orografía
    "sdfor", //Desviación estándar de la orografía filtrada
    "sdor", //Desviación estándar de la orografía
    "z", //Geopotencial
    "z_surface", //Geopotencial en la superficie
    "msl", //Presión media a nivel del mar
    "sp", //Presión en la superficie
    "swvl", //Contenido volumétrico de agua
  ],
  vectoriales: [
    "u", //viento
    "u10", //viento a 10 metros sobre la superficie.
    //"w", //Velocidad vertical en la atmósfera
  ],
  clasificacion: [
    "cvh", //Covertura de vegetación
    "cl", //Covertura de lago
    "lsm", //Segmentación entre tierra y mar
    "siconc", //Covertura de hielo en el mar
    "tcc", //Covertura total de nubes
    "slt", //Tipo de suelo
    "swvl", //Contenido volumétrico de agua
  ],
  lineas: [
    "u", //viento
    "t", //temperatura
    "t2m", //t a 2 m de la superficie
    "sst", //temperatura en la superficie del mar
    "msl", //Presión media a nivel del mar
    "sp", //Presión en la superficie
    "q", //humedad especifica
    "tisr", //radiación solar incidentes
    "swvl", //Contenido volumétrico de agua
  ],
  dispersion: [
    "anor", //ángulo de la orografía a escala subcuadrícula.
    "slor", //pendiente de la orografía a escala subcuadrícula.
    "swvl", //Contenido volumétrico de agua
  ],
  polares: [
    "isor", //Anisotropía de la orografía a escala subcuadrícula
    "u", //viento
    "u10", //viento a 10 metros sobre la superficie.
  ],
  barras: [
    "siconc", //Covertura de hielo en el mar
    "tisr", //radiación solar incidentes
    "tcc", //Covertura total de nubes
  ],
};
