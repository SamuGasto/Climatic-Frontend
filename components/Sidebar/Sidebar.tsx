import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
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

  const [variableSeleccionada, setVariableSeleccionada] = useState("");
  const [deshabilitarTiempo, setDeshabilitarTiempo] = useState(true);
  const [consulta, setConsulta] = useState<Consulta>({
    variable: "",
    latitud: [0, 0],
    longitud: [0, 0],
  });
  const [visible, setVisible] = useState(false);

  const handleSelect = (key: string) => {
    const newConsulta = { ...consulta };
    newConsulta.variable = key;
    setConsulta(newConsulta);
    setVariableSeleccionada(key);
    if (key === "u10" || key === "t2m") {
      setDeshabilitarTiempo(false);
    } else {
      setDeshabilitarTiempo(true);
    }
  };

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <div className="flex flex-col gap-12 p-6 w-full">
      <Button
        onClick={() => setVisible(true)}
        className="block lg:hidden"
      >
        Configurar gráfico
      </Button>
      <Modal
        closeButton
        open={visible} 
        onClose={closeHandler}
        className="lg:hidden"
        width="90%"
        blur
      >
        <ModalHeader>
          <p className="text-center">Configuración del gráfico</p>
        </ModalHeader>

        <ModalBody>
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

          <OpcionesTiempo desabilitado={deshabilitarTiempo} /> {/* Corregido */}
        </ModalBody>

        <ModalFooter>
          <Boton texto="Graficar" funcion={() => console.log([consulta])} />
        </ModalFooter>
      </Modal>

      <div className="hidden lg:flex flex-col gap-12 p-6 w-1/3 shadow-md">
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

        <OpcionesTiempo desabilitado={deshabilitarTiempo} /> {/* Corregido */}
        <Boton texto="Graficar" funcion={() => console.log([consulta])} />
      </div>
    </div>
  );
};

export default Sidebar;
