import React, { useState } from "react";
import Desplegable from "@/components/Sidebar/select";
import OpcionesArea from "@/components/Sidebar/opciones-area";
import OpcionesTiempo from "@/components/Sidebar/opciones-tiempo";
import Boton from "@/components/Sidebar/boton";
import { variables2 } from "@/config/variables";
import { Consulta } from "@/types/consulta";

const Sidebar = () => {
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
  const [consulta, setConsulta] = useState<Consulta>({
    variable: "",
    latitud: [0, 0],
    longitud: [0, 0],
  imagen :true});

  const handleSelect = (key: string) => {
    const newConsulta = { ...consulta };
    newConsulta.variable = key;
    setConsulta(newConsulta);

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
    <div className="flex flex-col gap-12 p-6 w-1/3 shadow-md">
      <div className="flex flex-col gap-3">
        <p className="text-center">Configuración del gráfico</p>
        <hr />
      </div>

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

      <OpcionesArea setConsulta={setConsulta} consultaOriginal={consulta} />

      <OpcionesTiempo desabilitado={desabilitarTiempo} />
      <Boton texto="Graficar" funcion={() => console.log([consulta])} />
      <div className="flex flex-col w-full items-end">
        
      </div>
    </div>
  );
};

export default Sidebar;