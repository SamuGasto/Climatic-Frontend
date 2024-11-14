import React, { useState } from "react";
import OpcionesArea from "@/components/Sidebar/opciones-area";
import OpcionesTiempo from "@/components/Sidebar/opciones-tiempo";
import Boton from "@/components/Sidebar/boton";
import { Consulta } from "@/types/consulta";
import OpcionesVariable from "./opciones-variable";
import { varUsanImagen } from "@/config/var_usan_imagen";
import { SendQuery } from "@/utils/QueryBackend";

const consultaInicial: Consulta = {
  variable: "",
  latitud: -34,
  longitud: 108,
  typeChart: "contorno",
  imagen: false,
};

//Al elegir var con el Enter, no se actualiza
const Sidebar = ({ refresh }: { refresh: () => void }) => {
  const [hayTiempo, setHayTiempo] = useState(false);

  const [variable, setVariable] = useState("");
  const [latitud, setLatitud] = useState(-34);
  const [longitud, setLongitud] = useState(108);
  const [nivel, setNivel] = useState<number | null>(null);
  const [fecha, setFecha] = useState<string[] | null>(null);
  const [hora, setHora] = useState("00:00:00.000000000");
  const [typeChart, setTypeChart] = useState<string>("contorno");
  const [unidadMedida, setUnidadMedida] = useState<string>("K");
  const [calculoDatos, setCalculoDatos] = useState<string>("mean");

  const [consulta, setConsulta] = useState<Consulta>(consultaInicial);
  const [cargandoConsulta, setCargandoConsulta] = useState(false);

  const funcionBoton = async () => {
    setCargandoConsulta(true);

    let newConsulta: Consulta = {
      variable: variable,
      latitud: latitud,
      longitud: longitud,
      imagen: true,
      typeChart: "contorno",
      unidadMedida: unidadMedida,
      calculoDatos: calculoDatos,
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

    if (varUsanImagen.includes(variable)) {
      newConsulta.imagen = true;
      newConsulta.typeChart = "contorno";
    } else {
      newConsulta.imagen = false;
    }

    setConsulta(newConsulta);
    SendQuery(newConsulta)
      .then(() => setCargandoConsulta(false))
      .then(() => {
        console.log("por recargar");
        refresh();
      });
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
        setUnidadMedida={setUnidadMedida}
        typeChart={typeChart}
        setCalculoDatos={setCalculoDatos}
      />

      {typeChart !== "lineas" ? (
        <OpcionesArea
          setLatitud={setLatitud}
          setLongitud={setLongitud}
          deshabilitado={false}
        />
      ) : (
        <OpcionesArea
          setLatitud={setLatitud}
          setLongitud={setLongitud}
          deshabilitado={true}
        />
      )}

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
