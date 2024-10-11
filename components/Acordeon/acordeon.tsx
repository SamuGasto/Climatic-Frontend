import {Accordion, AccordionItem} from "@nextui-org/accordion";
import React from "react";

export default function Acordeon(){
    
  return (
    <Accordion variant="splitted">
        <AccordionItem key="1" aria-label="Pregunta 1" title="¿Con qué datos se realizan los gráficos en Climatic?">
            En Climatic se usan datos de ERA5 para la realización de los gráficos.
        </AccordionItem>
        <AccordionItem key="2" aria-label="Pregunta 2" title="¿Qué es ERA5?">
            ERA5 es el quinto conjunto de datos de reanálisis climático producido por el Centro Europeo de Previsiones Meteorológicas a Medio Plazo (ECMWF). Proporciona estimaciones horarias de variables climáticas desde 1979 hasta la actualidad.
        </AccordionItem>
        <AccordionItem key="3" aria-label="Pregunta 3" title="¿Cómo puedo acceder a los datos de ERA5?">
            Los datos de ERA5 están disponibles a través del Servicio de Cambio Climático de Copernicus (C3S) y se pueden descargar desde el Climate Data Store (CDS) del ECMWF.
        </AccordionItem>
        <AccordionItem key="4" aria-label="Pregunta 4" title="¿Qué tipo de gráficos puedo crear en Climatic?">
            Puedes crear una variedad de gráficos, incluyendo mapas de temperatura, gráficos de precipitación, visualizaciones de viento, y más. Los tipos de gráficos dependerán de las variables climáticas que desees analizar.
        </AccordionItem>
        <AccordionItem className="mb-24" key="5" aria-label="Pregunta 5" title="¿Hay algún cobro por utilizar Climatic?">
            No. Por ahora...
        </AccordionItem>
    </Accordion>
  );
}
