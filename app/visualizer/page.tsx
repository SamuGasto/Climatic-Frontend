"use client";
import CardBody from "@/components/Graphic/card-body";
import React, { useState } from "react";
import Desplegable from "@/components/Sidebar/select";
import { DateRangePicker } from "@nextui-org/react";
import SeleccionHora from "@/components/Sidebar/time-input";
import OpcionesArea from "@/components/Sidebar/opciones-area";
import OpcionesTiempo from "@/components/Sidebar/opciones-tiempo";
import Boton from "@/components/Sidebar/boton";
import { variables2 } from "@/config/variables";

export default function page() {
  const componenteViento = [
    {
      key: "0",
      label: "U (Este - Oeste)",
    },
    {
      key: "1",
      label: "V (Norte - Sur)",
    },
  ];

  const nivelViento = [
    { key: "0", label: "A 10 metros sobre la superficie" },
    { key: "1", label: "otro nivel 1" },
    { key: "2", label: "otro nivel 2" },
    { key: "3", label: "..." },
  ];

  const nivelTemperatura = [
    { key: "0", label: "A 2 metros sobre la superficie" },
    { key: "1", label: "otro nivel 1" },
    { key: "2", label: "otro nivel 2" },
    { key: "3", label: "..." },
  ];

  const [variableSeleccionada, setvariableSeleccionada] = useState("");
  const [desabilitarTiempo, setDesabilitarTiempo] = useState(true);

  const handleSelect = (key: string) => {
    setvariableSeleccionada(key);
    {
      key == "u10" || key == "t2m"
        ? setDesabilitarTiempo(false)
        : setDesabilitarTiempo(true);
    }
    if (key == "anor") {
      setDesabilitarTiempo(true);
    }
  };

  return (
    <div className="flex flex-col gap-8 p-6 w-80 shadow-md">
      <p className="text-center">Configuración del gráfico</p>
      <div className="flex flex-col gap-3 w-full">
        <Desplegable
          titulo="Variable"
          explicacion="Elija la variable que desea graficar"
          elementos={variables2}
          onSelect={handleSelect}
        />

        {variableSeleccionada == "u10" ? (
          <Desplegable
            titulo="Componente del viento"
            explicacion="Elija el componente del viento"
            elementos={componenteViento}
          />
        ) : null}

        {variableSeleccionada == "u10" ? (
          <Desplegable
            titulo="Altura de los datos"
            explicacion="Elija la altura de los datos"
            elementos={nivelViento}
          />
        ) : null}

        {variableSeleccionada == "t2m" ? (
          <Desplegable
            titulo="Altura de los datos"
            explicacion="Elija la altura de los datos"
            elementos={nivelTemperatura}
          />
        ) : null}
      </div>

      <OpcionesArea />

      <OpcionesTiempo desabilitado={desabilitarTiempo} />

      <Boton
        texto="Graficar"
        funcion={() => console.log([variableSeleccionada])}
      />
    </div>
  );
}
