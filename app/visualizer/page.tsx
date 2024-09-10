"use client";
import CardBody from "@/components/Graphic/card-body";
import React from "react";
import Desplegable from "@/components/Sidebar/select";
import { DateRangePicker } from "@nextui-org/react";
import SeleccionHora from "@/components/Sidebar/time-input";

export default function page() {
  const variables = [
    {
      key: 0,
      label: "Velocidad del viento a 10m sobre la superficie",
    },
    {
      key: 1,
      label: "Temperatura a 2m sobre la superficie",
    },
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
      label: "Geopotencial",
    },
  ];

  return (
    <div className="flex flex-col space-y-6">
      <Desplegable
        titulo="Variable"
        explicacion="Elija la variable que desea graficar"
        elementos={variables}
      />

      <DateRangePicker label="Seleccione un rango de fechas" isRequired />

      <SeleccionHora />
    </div>
  );
}
