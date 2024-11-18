import React, { useState } from "react";
import OpcionesArea from "@/components/Sidebar/opciones-area";
import OpcionesTiempo from "@/components/Sidebar/opciones-tiempo";
import Boton from "@/components/Sidebar/boton";
import { Consulta } from "@/types/consulta";
import OpcionesVariable from "./opciones-variable";
import { typeChart } from "@/types/chart";
import { RequestData } from "@/utils/BackendConection";
import { useChartStore } from "@/providers/chart-store-provider";
import { useBoardStore } from "@/providers/board-store-provider";
import toast from "react-hot-toast";
import { varConAltura } from "@/config/var_con_altura";
import { varConTiempo } from "@/config/var_con_tiempo";
import { CalcularEstadisticas } from "@/utils/ObtenerEstadisticas";
import { ChartStats } from "@/types/stats";

const consultaInicial: Consulta = {
  variable: "",
  latitud: [-34, -35],
  longitud: [108, 110],
  typeChart: "contorno",
};

//Al elegir var con el Enter, no se actualiza
const Sidebar = () => {
  const [hayTiempo, setHayTiempo] = useState(false);
  const chartSelected = useChartStore((state) => state.chartSelected);
  const selectChart = useChartStore((state) => state.selectChart);
  const updateChart = useBoardStore((state) => state.updateChart);
  const id_boardSelected = useBoardStore((state) => state.id_boardSelected);

  const [variable, setVariable] = useState("");
  const [latitud, setLatitud] = useState<number[]>([-34, -35]);
  const [longitud, setLongitud] = useState<number[]>([108, 110]);
  const [nivel, setNivel] = useState<number | null>(null);
  const [fecha, setFecha] = useState<string[] | null>(null);
  const [hora, setHora] = useState("00:00:00.000000000");
  const [typeChart, setTypeChart] = useState<typeChart>("contorno");
  const [unidadMedida, setUnidadMedida] = useState<string>("K");
  const [calculoDatos, setCalculoDatos] = useState<string>("mean");

  const [consulta, setConsulta] = useState<Consulta>(consultaInicial);
  const [cargandoConsulta, setCargandoConsulta] = useState(false);

  const funcionBoton = async () => {
    if (!chartSelected) return;
    setCargandoConsulta(true);

    let newConsulta: Consulta = {
      variable: variable,
      latitud: latitud,
      longitud: longitud,
      typeChart: typeChart,
      unidadMedida: unidadMedida,
      calculoDatos: calculoDatos,
    };

    if (nivel && varConAltura.includes(variable)) {
      newConsulta.nivel = nivel;
    } else {
      newConsulta.nivel = undefined;
    }

    if (fecha && varConTiempo.includes(variable)) {
      if (fecha[1]) {
        newConsulta.tiempo = [fecha[0] + "T" + hora, fecha[1] + "T" + hora];
      } else {
        newConsulta.tiempo = [fecha[0] + "T" + hora];
      }
    } else {
      newConsulta.tiempo = undefined;
    }

    if (calculoDatos && typeChart === "lineas") {
      newConsulta.calculoDatos = calculoDatos;
    } else {
      newConsulta.calculoDatos = undefined;
    }

    newConsulta.typeChart = typeChart;
    console.log(typeChart);

    if (typeChart !== "lineas") {
      console.log("no lineas");

      newConsulta.latitud = consultaInicial.latitud;
      newConsulta.longitud = consultaInicial.longitud;
    }

    setConsulta(newConsulta);

    console.log(newConsulta);

    RequestData(newConsulta).then((res) => {
      if ("Mensaje del Servidor" in res) {
        setCargandoConsulta(false);
        toast.error(res["Mensaje del Servidor"]);
        return;
      }

      let datos: number[] = [];
      res.data.map((lat: number[] | number[][]) => {
        lat.map((long) => {
          if (Array.isArray(long))
            long.map((data) => {
              datos.push(data);
            });
          else {
            datos.push(long);
          }
        });
      });

      const newStats: ChartStats = CalcularEstadisticas(datos);

      console.log(newStats);

      updateChart(
        id_boardSelected,
        chartSelected,
        true,
        res,
        typeChart,
        chartSelected.title,
        chartSelected.subtitle,
        newStats
      );
      selectChart({
        ...chartSelected,
        typeChart: typeChart,
        active: true,
        backendData: res,
        stats: newStats,
      });
      console.log(res);
      setCargandoConsulta(false);
      toast.success("Se ha cargado el gráfico correctamente");
    });
  };

  return (
    <div className="flex flex-col gap-12 p-6 w-full shadow-md order-last lg:w-1/3 lg:order-first">
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
    </div>
  );
};

export default Sidebar;
