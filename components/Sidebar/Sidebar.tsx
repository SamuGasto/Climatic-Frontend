import React, { useState } from "react";
import Desplegable from "@/components/Sidebar/select";
import OpcionesArea from "@/components/Sidebar/opciones-area";
import OpcionesTiempo from "@/components/Sidebar/opciones-tiempo";
import Boton from "@/components/Sidebar/boton";
import Slider2 from "./slider2";

import { variables } from "@/config/variables";
import { Consulta } from "@/types/consulta";
import { varConAltura } from "@/config/var_con_altura";
import { componentes } from "@/config/componente";
import { varComponente } from "@/config/var_componente";
import { varConTiempo } from "@/config/var_con_tiempo";
import OpcionesVariable from "./opciones-variable";

//Al elegir var con el Enter, no se actualiza
const Sidebar = () => {
  const [hayAltura, sethayAltura] = useState(false);
  const [hayComponente, sethayComponente] = useState(false);
  const [componente, setcomponente] = useState("");
  const [hayTiempo, setHayTiempo] = useState(false);
  const [consulta, setConsulta] = useState<Consulta>({
    variable: "",
    latitud: [-34.75, -34.25],
    longitud: [108.25, 109],
    tiempo: ["2021-12-31T23:00:00.000000000", "2021-12-31T23:00:00.000000000"],
    nivel: 1,
  });

  const [variable, setVariable] = useState("");
  const [latitud, setLatitud] = useState([-34.75, -34.25]);
  const [longitud, setLongitud] = useState([108.25, 109]);
  const [nivel, setNivel] = useState(1);
  const [tiempo, setTiempo] = useState([
    "2021-12-31T23:00:00.000000000",
    "2021-12-31T23:00:00.000000000",
  ]);

  const handleSelect = (key: string) => {
    if (varComponente.includes(key)) {
      //console.log("AGREGAR CAMBIAR COMPONENTE");

      definirVariable(key, componente);
    }

    const newConsulta = { ...consulta };
    newConsulta.variable = key;
    setConsulta(newConsulta);

    {
      varConAltura.includes(newConsulta.variable)
        ? sethayAltura(true)
        : sethayAltura(false);
    }

    {
      varComponente.includes(newConsulta.variable)
        ? sethayComponente(true)
        : sethayComponente(false);
    }

    {
      varConTiempo.includes(newConsulta.variable)
        ? setHayTiempo(true)
        : setHayTiempo(false);
    }
  };

  const handleComponente = (key: string) => {
    setcomponente(key);
    definirVariable(consulta.variable, key);
  };

  const definirVariable = (variable: string, componente: string) => {
    let newConsulta = { ...consulta };
    let resultado = "";

    switch (variable) {
      case "u":
        if (componente === "u") {
          resultado = "u";
        } else {
          resultado = "v";
        }
        break;
      case "u10":
        if (componente === "u") {
          resultado = "u10";
        } else {
          resultado = "v10";
        }
        break;
    }
    newConsulta.variable = resultado;

    setConsulta(newConsulta);
  };

  const funcionBoton = () => {
    console.log([consulta]);
    console.log(variable);
    console.log(latitud);
    console.log(longitud);
    console.log(nivel);
    console.log(tiempo);
  };

  return (
    <div className="flex flex-col gap-12 p-6 w-1/3 shadow-md">
      <div className="flex flex-col gap-3">
        <p className="text-center">Configuración del gráfico</p>
        <hr />
      </div>

      <div className="flex flex-col gap-3 w-full">
        <Desplegable
          titulo="Variable"
          explicacion="Elija la variable que desea graficar"
          elementos={variables}
          onSelect={handleSelect}
        />

        {hayAltura ? <Slider2 setNivel={setNivel} /> : null}

        {hayComponente ? (
          <Desplegable
            titulo="Componente del viento"
            explicacion="Elija el componente del viento"
            elementos={componentes}
            onSelect={handleComponente}
          />
        ) : null}
      </div>

      <OpcionesVariable
        setHayTiempo={setHayTiempo}
        setVariable={setVariable}
        setNivel={setNivel}
      />

      <OpcionesArea setLatitud={setLatitud} setLongitud={setLongitud} />

      <OpcionesTiempo
        setConsulta={setConsulta}
        consultaOriginal={consulta}
        desabilitado={!hayTiempo}
      />

      <Boton texto="Graficar" funcion={funcionBoton} />

      <div className="flex flex-col w-full items-end"></div>
    </div>
  );
};

export default Sidebar;
