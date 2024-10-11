import React, { useState, useEffect } from "react";
import Desplegable from "@/components/Sidebar/select";
import OpcionesArea from "@/components/Sidebar/opciones-area";
import OpcionesTiempo from "@/components/Sidebar/opciones-tiempo";
import Boton from "@/components/Sidebar/boton";
import { variables2 } from "@/config/variables";
import { Consulta } from "@/types/consulta";

const Sidebar = () => {
  const [variableSeleccionada, setvariableSeleccionada] = useState("");
  const [desabilitarTiempo, setDesabilitarTiempo] = useState(true);
  const [consulta, setConsulta] = useState<Consulta>({
    variable: "",
    latitud: [0, 0],
    longitud: [0, 0],
    imagen: true,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSelect = (key: string) => {
    const newConsulta = { ...consulta };
    newConsulta.variable = key;
    setConsulta(newConsulta);

    setvariableSeleccionada(key);
    key === "u10" || key === "t2m"
      ? setDesabilitarTiempo(false)
      : setDesabilitarTiempo(true);

    if (key === "anor") {
      setDesabilitarTiempo(true);
    }
  };

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

  return (
    <div>
      {isMobile ? (
        <>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Abrir Configuración
          </button>

          {/* Modal responsive */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
              <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg overflow-y-auto max-h-full">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Configuración del gráfico</h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    X
                  </button>
                </div>

                <div className="flex flex-col gap-3 mt-4">
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
                </div>

                <div className="flex justify-end gap-3 mt-4">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="bg-gray-300 p-2 rounded-md"
                  >
                    Cerrar
                  </button>
                  <Boton texto="Graficar" funcion={() => console.log([consulta])} />
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        // Barra lateral completa para pantallas más grandes
        <div className="flex flex-col gap-12 p-6 w-full max-w-sm lg:max-w-md shadow-md">
          <div className="flex flex-col gap-3">
            <p className="text-center text-lg">Configuración del gráfico</p>
            <hr />
          </div>

          <div className="flex flex-col gap-3 w-full">
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
          </div>

          <OpcionesArea setConsulta={setConsulta} consultaOriginal={consulta} />
          <OpcionesTiempo desabilitado={desabilitarTiempo} />

          <Boton texto="Graficar" funcion={() => console.log([consulta])} />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
