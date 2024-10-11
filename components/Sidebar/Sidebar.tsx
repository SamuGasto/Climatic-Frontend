import React, { useState, useEffect } from "react";
import Desplegable from "@/components/Sidebar/select";
import OpcionesArea from "@/components/Sidebar/opciones-area";
import OpcionesTiempo from "@/components/Sidebar/opciones-tiempo";
import Boton from "@/components/Sidebar/boton";
import { variables2 } from "@/config/variables";
import { Consulta } from "@/types/consulta";
import { useTheme } from "next-themes";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const actualTheme = useTheme();
  

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
  const [consulta, setConsulta] = useState<Consulta>({
    variable: "",
    latitud: [0, 0],
    longitud: [0, 0],
  imagen :true});

  const handleSelect = (key: string) => {
    const newConsulta = { ...consulta };
    newConsulta.variable = key;
    setConsulta(newConsulta);

    setVariableSeleccionada(key);
    key === "u10" || key === "t2m"
      ? setDesabilitarTiempo(false)
      : setDesabilitarTiempo(true);

    if (key === "anor") {
      setDesabilitarTiempo(true);
    }
  };

  const sidebarContent = (
    <>
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
      <OpcionesTiempo desabilitado={desabilitarTiempo} />
      <Boton texto="Graficar" funcion={() => console.log([consulta])} />
    </>
  );

  return (
    <>
      {isMobile ? (
        <>
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
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            scrollBehavior={"inside"}
            placement="center"
            closeButton
          >
            <ModalContent>
              <ModalHeader className="flex flex-col gap-1">Configuración</ModalHeader>
              <ModalBody>{sidebarContent}</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onOpenChange}>
                  Cerrar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      ) : (
        <div className="hidden md:flex flex-col gap-12 p-6 w-1/3">
          {sidebarContent}
        </div>
      )}
    </>
  );
};

export default Sidebar;