import React, { useState, useEffect } from "react";
import Desplegable from "@/components/Sidebar/select";
import OpcionesArea from "@/components/Sidebar/opciones-area";
import OpcionesTiempo from "@/components/Sidebar/opciones-tiempo";
import Boton from "@/components/Sidebar/boton";
import { Consulta } from "@/types/consulta";
import { useTheme } from "next-themes";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Slider2 from "./slider2";

import { variables } from "@/config/variables";
import { varConAltura } from "@/config/var_con_altura";
import { componentes } from "@/config/componente";
import { varComponente } from "@/config/var_componente";
import { varConTiempo } from "@/config/var_con_tiempo";
import { SendQuery } from "@/utils/QueryBackend";
import { useChartStore } from "@/utils/Stores/chartStore";

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const actualTheme = useTheme();
  const [hayAltura, sethayAltura] = useState(false);
  const [hayComponente, sethayComponente] = useState(false);
  const [componente, setcomponente] = useState("");
  const [hayTiempo, setHayTiempo] = useState(false);
  const [consulta, setConsulta] = useState<Consulta>({
    variable: "",
    latitud: [-34.75, -34.25],
    longitud: [108.25, 109],
    imagen: "True",
    typeChart: "image",
    tiempo: ["2021-12-31T23:00:00.000000000", "2021-12-31T23:00:00.000000000"],
    altura: [1],
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Detecta si el ancho es menor que 768px (mobile)
    };
    handleResize(); // Ejecutar al cargar
    window.addEventListener("resize", handleResize); // Escuchar cambios en el tamaño de la pantalla
    return () => window.removeEventListener("resize", handleResize); // Limpieza al desmontar
  }, []);

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

  const [variableSeleccionada, setVariableSeleccionada] = useState("");
  const [desabilitarTiempo, setDesabilitarTiempo] = useState(true);

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

  const sidebarContent = (
    <div className="flex flex-col gap-12 md:p-6 w-full md:shadow-md">
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
        {hayAltura ? (
          <Slider2 setConsulta={setConsulta} consultaOriginal={consulta} />
        ) : null}
        {hayComponente ? (
          <Desplegable
            titulo="Componente del viento"
            explicacion="Elija el componente del viento"
            elementos={componentes}
            onSelect={handleComponente}
          />
        ) : null}
      </div>

      <OpcionesArea setConsulta={setConsulta} consultaOriginal={consulta} />

      <OpcionesTiempo
        setConsulta={setConsulta}
        consultaOriginal={consulta}
        desabilitado={!hayTiempo}
      />

      <Boton
        texto="Graficar"
        funcion={() => {
          SendQuery(consulta);
        }}
      />

      <div className="flex flex-col w-full items-end"></div>
    </div>
  );

  return (
    <div className="flex w-full px-12 md:px-0 md:w-1/3">
      {isMobile ? (
        <div className="flex w-full self-center">
          <Button
            className="mb-8 mt-10"
            onPress={onOpen}
            color="primary"
            size="md"
            variant={actualTheme.theme === "light" ? "bordered" : "solid"}
          >
            Abrir configuración de gráfico
          </Button>
          <Modal
            className="flex w-full"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            scrollBehavior={"inside"}
            placement="center"
            closeButton
          >
            <ModalContent>
              <ModalHeader className="flex flex-col gap-1">
                Configuración
              </ModalHeader>
              <ModalBody >{sidebarContent}</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onOpenChange}>
                  Cerrar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      ) : (
        <div className="hidden md:flex flex-col gap-12 p-6 w-full">
          {sidebarContent}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
