import React, { useState } from "react";
import OpcionesArea from "@/components/Sidebar/opciones-area";
import OpcionesTiempo from "@/components/Sidebar/opciones-tiempo";
import Boton from "@/components/Sidebar/boton";
import { Consulta } from "@/types/consulta";
import OpcionesVariable from "./opciones-variable";

//Al elegir var con el Enter, no se actualiza
const Sidebar = () => {
  const [hayTiempo, setHayTiempo] = useState(false);
  const [consulta, setConsulta] = useState<Consulta>({
    variable: "",
    latitud: [-34.75, -34.25],
    longitud: [108.25, 109],
    tiempo: ["2021-12-31T23:00:00.000000000", "2021-12-31T23:00:00.000000000"],
    nivel: 1,
    typeChart: "heatmap",
  });

  const [variable, setVariable] = useState("");
  const [latitud, setLatitud] = useState([-34.75, -34.25]);
  const [longitud, setLongitud] = useState([108.25, 109]);
  const [nivel, setNivel] = useState(1);
  const [fecha, setFecha] = useState(["2021-12-31", "2021-12-31"]);
  const [hora, setHora] = useState("00:00:00.000000000");
  const [typeChart, setTypeChart] = useState("heatmap");

  const funcionBoton = () => {
    let newConsulta = { ...consulta };

    newConsulta.variable = variable;
    newConsulta.latitud = latitud;
    newConsulta.longitud = longitud;
    newConsulta.nivel = nivel;
    if (fecha[1]) {
      newConsulta.tiempo = [fecha[0] + "T" + hora, fecha[1] + "T" + hora];
    } else {
      newConsulta.tiempo = [fecha[0] + "T" + hora];
    }
    newConsulta.typeChart = typeChart;

    setConsulta(newConsulta);
    console.log(newConsulta);
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
      />

      <OpcionesArea setLatitud={setLatitud} setLongitud={setLongitud} />

      <OpcionesTiempo
        desabilitado={!hayTiempo}
        setFecha={setFecha}
        setHora={setHora}
        setTypeChart={setTypeChart}
        typeChart={typeChart}
      />

      <Boton texto="Graficar" funcion={funcionBoton} />

      <div className="flex flex-col w-full items-end"></div>
    </div>
  );
};

export default Sidebar;
