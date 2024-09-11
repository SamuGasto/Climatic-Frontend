"use client";
import CardBody from "@/components/Graphic/card-body";
import React, { useState } from "react";
import Desplegable from "@/components/Sidebar/select";
import { DateRangePicker } from "@nextui-org/react";
import SeleccionHora from "@/components/Sidebar/time-input";
import OpcionesArea from "@/components/Sidebar/opciones-area";
import OpcionesTiempo from "@/components/Sidebar/opciones-tiempo";

export default function page() {
  const variables = [
    {
      key: 0,
      label: "Velocidad del viento", // U/V wind component
    },
    /*{
      key: 22,
      label: "Componente del viento", // U/V
    },*/
    {
      key: 18,
      label: "Temperatura",
    },
    /*{
      key: 1,
      label: "Temperatura en la superficie",
    },*/
    {
      key: 2,
      label: "Ángulo de la orografía a escala subcuadrícula",
    },
    {
      key: 3,
      label: "Anisotropía de la orografía a escala subcuadrícula",
    },
    {
      key: 4,
      label: "Geopotencial",
    },
    {
      key: 5,
      label: "Geopotencial en la superficie",
    },
    {
      key: 6,
      label: "Covertura de vegetación alta", // tambien existe vegetación baja
    },
    {
      key: 7,
      label: "Profundidad del lago",
    },
    {
      key: 8,
      label: "Segmentación entre tierra y mar",
    },
    {
      key: 9,
      label: "Presión media a nivel del mar",
    },
    {
      key: 10,
      label: "Covertura de hielo en el mar",
    },
    {
      key: 11,
      label: "Temperatura en la superfice del mar",
    },
    {
      key: 12,
      label: "Pendiente de la orografía",
    },
    {
      key: 13,
      label: "Tipo de suelo",
    },
    {
      key: 14,
      label: "Humedad específica",
    },
    {
      key: 15,
      label: "Desviación estándar de la orografía filtrada",
    },
    {
      key: 16,
      label: "Desviación estándar de la orografía", // se podría convinar con la anterior
    },
    {
      key: 17,
      label: "Presión en la superficie",
    },
    {
      key: 19,
      label: "Radiación solar incidente",
    },
    {
      key: 20,
      label: "Covertura total de nubes",
    },
    {
      key: 21,
      label: "Tipo de vegetación alta", // tambien esta la baja
    },
    {
      key: 23,
      label: "Contenido volumétrico de agua", // capa 1, 2, 3 o 4
    },
  ];

  const componenteViento = [
    {
      key: 0,
      label: "U (Este - Oeste)",
    },
    {
      key: 1,
      label: "V (Norte - Sur)",
    },
  ];

  const nivelViento = [
    { key: 0, label: "A 10 metros sobre la superficie" },
    { key: 1, label: "otro nivel 1" },
    { key: 2, label: "otro nivel 2" },
    { key: 3, label: "..." },
  ];

  const nivelTemperatura = [
    { key: 0, label: "A 2 metros sobre la superficie" },
    { key: 1, label: "otro nivel 1" },
    { key: 2, label: "otro nivel 2" },
    { key: 3, label: "..." },
  ];

  const [variableSeleccionada, setvariableSeleccionada] = useState(-1);
  const [desabilitarTiempo, setDesabilitarTiempo] = useState(true);
  const [desabilitarArea, setDesabilitarArea] = useState(true);

  const habilitarTiempoArea = () => {
    setDesabilitarTiempo(false);
    setDesabilitarArea(false);
  };
  const deshabilitarTiempoArea = () => {
    setDesabilitarTiempo(true);
    setDesabilitarArea(true);
  };

  const handleSelect = (key: number) => {
    setvariableSeleccionada(key);
    {
      key == 0 || key == 18 ? habilitarTiempoArea() : deshabilitarTiempoArea();
    }
    if (key == 2) {
      setDesabilitarTiempo(true);
      setDesabilitarArea(false);
    }
  };

  return (
    <div className="flex flex-col gap-3 p-6 w-full shadow-md">
      <div className="flex flex-col gap-3 w-full">
        <Desplegable
          titulo="Variable"
          explicacion="Elija la variable que desea graficar"
          elementos={variables}
          onSelect={handleSelect}
        />

        {variableSeleccionada == 0 ? (
          <Desplegable
            titulo="Componente del viento"
            explicacion="Elija el componente del viento"
            elementos={componenteViento}
          />
        ) : null}

        {variableSeleccionada == 0 ? (
          <Desplegable
            titulo="Altura de los datos"
            explicacion="Elija la altura de los datos"
            elementos={nivelViento}
          />
        ) : null}

        {variableSeleccionada == 18 ? (
          <Desplegable
            titulo="Altura de los datos"
            explicacion="Elija la altura de los datos"
            elementos={nivelTemperatura}
          />
        ) : null}
      </div>

      <OpcionesTiempo desabilitado={desabilitarTiempo} />

      <OpcionesArea desabilitado={desabilitarArea} />
    </div>
  );
}
