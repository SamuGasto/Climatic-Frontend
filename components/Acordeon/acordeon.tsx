import {Accordion, AccordionItem} from "@nextui-org/accordion";
import React from "react";

export default function Acordeon(){
    
  return (
    <Accordion variant="splitted">
        <AccordionItem key="1" aria-label="Pregunta 1" title="¿Con qué datos se realizan los gráficos en Climatic?">
            Se utilizan datos con resolución horaria y grilla de 0.25°x0.25° del reanálisis ERA5, tanto de niveles superficiales como niveles de presión. Climatic permite seleccionar un conjunto de variables de ERA5 que son relevantes para el análisis del clima local, como viento, temperatura, humedad relativa, precipitación, entre otras.
        </AccordionItem>
        <AccordionItem key="2" aria-label="Pregunta 2" title="¿Qué es ERA5?">
            Corresponde a un reanálisis atmosférico global. Esto quiere decir que se utiliza un modelo pronóstico meteorológico numérico en conjunto con observaciones meteorológicas de superficie y de altura para estimar el estado real de la atmósfera en un tiempo determinado y con la mayor precisión posible. ERA5 es constantemente actualizado por el European Centre for Medium-Range Weather Forecasts (ECMWF, https://www.ecmwf.int/en/about), abarcando entre el año 1950 hasta el presente.
        </AccordionItem>
        <AccordionItem key="3" aria-label="Pregunta 3" title="¿Cómo puedo acceder a los datos de ERA5?">
            Los datos originales se encuentran públicamente disponible en el sitio Climate Data Store (CDS) de Copernicus (https://doi.org/10.24381/cds.143582cf). Climatic sin embargo, utiliza la versión Analysis-Ready, Cloud-Optimized (ARCO) disponible a través de Google Cloud Store (https://cloud.google.com/storage/docs/public-datasets/era5?hl=es-419)
        </AccordionItem>
        <AccordionItem key="4" aria-label="Pregunta 4" title="¿Qué tipo de gráficos puedo crear en Climatic?">
            Puedes crear una gran variedad de gráficos, incluyendo mapas de temperatura, gráficos de precipitación, visualizaciones de viento, y más. Los tipos de gráficos dependerán de las variables climáticas que desees analizar.
        </AccordionItem>
    </Accordion>
  );
}
