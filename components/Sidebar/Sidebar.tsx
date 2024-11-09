"use client";
import React, { useState } from "react";
import OpcionesArea from "@/components/Sidebar/opciones-area";
import OpcionesTiempo from "@/components/Sidebar/opciones-tiempo";
import Boton from "@/components/Sidebar/boton";
import { Consulta } from "@/types/consulta";
import OpcionesVariable from "./opciones-variable";
import { varUsanImagen } from "@/config/var_usan_imagen";
import { SendQuery } from "@/utils/Query/QueryBackend";
import { typeChart } from "@/types/chart";

const consultaInicial: Consulta = {
  variable: "",
  latitud: [-34.75, -34.25],
  longitud: [108.25, 109],
  typeChart: "contorno",
};

//Al elegir var con el Enter, no se actualiza
const Sidebar = () => {
  const [hayTiempo, setHayTiempo] = useState(false);

  const [variable, setVariable] = useState("");
  const [latitud, setLatitud] = useState([-34.75, -34.25]);
  const [longitud, setLongitud] = useState([108.25, 109]);
  const [nivel, setNivel] = useState<number | null>(null);
  const [fecha, setFecha] = useState<string[] | null>(null);
  const [hora, setHora] = useState("00:00:00.000000000");
  const [typeChart, setTypeChart] = useState<typeChart>("contorno");

  const [consulta, setConsulta] = useState<Consulta>(consultaInicial);
  const [cargandoConsulta, setCargandoConsulta] = useState(false);

  const funcionBoton = async () => {
    setCargandoConsulta(true);

    let newConsulta: Consulta = {
      variable: variable,
      latitud: latitud,
      longitud: longitud,
      typeChart: "contorno",
    };

    if (nivel) newConsulta.nivel = nivel;

    if (fecha) {
      if (fecha[1]) {
        newConsulta.tiempo = [fecha[0] + "T" + hora, fecha[1] + "T" + hora];
      } else {
        newConsulta.tiempo = [fecha[0] + "T" + hora];
      }
    }

    newConsulta.typeChart = typeChart;

    setConsulta(newConsulta);
    SendQuery(newConsulta).then(() => setCargandoConsulta(false));
  };

  return (
    <div className="flex flex-col gap-12 p-6 w-1/3 shadow-md">
      <div className="flex flex-col gap-3">
        <p className="text-center">
          <strong>Configuración del gráfico</strong>
        </p>
        <hr />
      </div>

      <OpcionesVariable
        setHayTiempo={setHayTiempo}
        setVariable={setVariable}
        setNivel={setNivel}
        setTypeChart={setTypeChart}
      />

      <OpcionesArea setLatitud={setLatitud} setLongitud={setLongitud} />

      <OpcionesTiempo
        desabilitado={!hayTiempo}
        setFecha={setFecha}
        setHora={setHora}
        typeChart={typeChart}
      />

      <Boton
        texto="Graficar"
        Loading={cargandoConsulta}
        funcion={() => funcionBoton()}
      />
      <div className="flex flex-col w-full items-end"></div>
    </div>
  );
};

export default Sidebar;
