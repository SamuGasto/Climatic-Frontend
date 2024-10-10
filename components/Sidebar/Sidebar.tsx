import React, { useState } from "react";
import Desplegable from "@/components/Sidebar/select";
import OpcionesArea from "@/components/Sidebar/opciones-area";
import OpcionesTiempo from "@/components/Sidebar/opciones-tiempo";
import Boton from "@/components/Sidebar/boton";
import { variables2 } from "@/config/variables";
import { Consulta } from "@/types/consulta";

const Sidebar = () => {
  const componenteViento = [
    { key: "0", label: "U (Este - Oeste)" },
    { key: "1", label: "V (Norte - Sur)" },
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
  });
  
  // Estado para el menú
  const [menuAbierto, setMenuAbierto] = useState(false);

  const handleSelect = (key: string) => {
    const newConsulta = { ...consulta };
    newConsulta.variable = key;
    setConsulta(newConsulta);

    setvariableSeleccionada(key);
    setDesabilitarTiempo(key === "u10" || key === "t2m" ? false : true);
  };

  return (
    <div className="relative flex flex-col gap-10 p-6 sm:gap-4 sm:p-3 w-full sm:w-1/3 sm:-mt-5 shadow-md">
      <button
        className="block sm:hidden p-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        {menuAbierto ? "✖️" : "☰"}
      </button>

      {menuAbierto && (
        <div className="flex flex-col gap-3 w-full sm:block">
          <div className="flex flex-col gap-2">
            <p className="text-center">Configuración del gráfico</p>
            <hr />
          </div>

          <Desplegable
            titulo="Variable"
            explicacion="Elija la variable que desea graficar"
            elementos={variables2}
            onSelect={handleSelect}
          />

          {variableSeleccionada === "u10" && (
            <>
              <Desplegable
                titulo="Componente del viento"
                explicacion="Elija el componente del viento"
                elementos={componenteViento}
              />
              <Desplegable
                titulo="Altura de los datos"
                explicacion="Elija la altura de los datos"
                elementos={nivelViento}
              />
            </>
          )}

          {variableSeleccionada === "t2m" && (
            <Desplegable
              titulo="Altura de los datos"
              explicacion="Elija la altura de los datos"
              elementos={nivelTemperatura}
            />
          )}

          <OpcionesArea setConsulta={setConsulta} consultaOriginal={consulta} />
          <OpcionesTiempo desabilitado={desabilitarTiempo} />
          <Boton texto="Graficar" funcion={() => console.log([consulta])} />
        </div>
      )}
      
      {/* Contenido del Sidebar para pantallas más grandes */}
      <div className="hidden sm:flex flex-col gap-2">
        <p className="text-center">Configuración del gráfico</p>
        <hr />
        <Desplegable
          titulo="Variable"
          explicacion="Elija la variable que desea graficar"
          elementos={variables2}
          onSelect={handleSelect}
        />
        {variableSeleccionada === "u10" && (
          <>
            <Desplegable
              titulo="Componente del viento"
              explicacion="Elija el componente del viento"
              elementos={componenteViento}
            />
            <Desplegable
              titulo="Altura de los datos"
              explicacion="Elija la altura de los datos"
              elementos={nivelViento}
            />
          </>
        )}
        {variableSeleccionada === "t2m" && (
          <Desplegable
            titulo="Altura de los datos"
            explicacion="Elija la altura de los datos"
            elementos={nivelTemperatura}
          />
        )}
        <OpcionesArea setConsulta={setConsulta} consultaOriginal={consulta} />
        <OpcionesTiempo desabilitado={desabilitarTiempo} />
        <Boton texto="Graficar" funcion={() => console.log([consulta])} />
      </div>
    </div>
  );
};

export default Sidebar;
