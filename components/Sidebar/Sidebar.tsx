import React, { useState } from "react";
import OpcionesArea from "@/components/Sidebar/opciones-area";
import OpcionesTiempo from "@/components/Sidebar/opciones-tiempo";
import Boton from "@/components/Sidebar/boton";
import { Consulta } from "@/types/consulta";
import OpcionesVariable from "./opciones-variable";
import { RequestData } from "@/utils/backend/BackendConection";
import { useChartStore } from "@/providers/chart-store-provider";
import { useBoardStore } from "@/providers/board-store-provider";
import toast from "react-hot-toast";
import { varConAltura } from "@/config/var_con_altura";
import { varConTiempo } from "@/config/var_con_tiempo";
import { CalcularEstadisticas } from "@/utils/obtener-estadisticas";
import { ChartStats } from "@/types/stats";
import BackendData from "@/types/backend-data";
import { typeChart } from "@/types/typeChart";
import { ProcessTwoVar } from "@/utils/backend/process-two-var";
import { ProcessSingleVar } from "@/utils/backend/process-single-var";
import { Chart } from "@/types/chart";

const consultaInicial: Consulta = {
  variable: "",
  latitud: [-34, -35],
  longitud: [108, 110],
  typeChart: "contorno",
  unidadMedida: "K",
};

//Al elegir var con el Enter, no se actualiza
const Sidebar = () => {
  const [hayTiempo, setHayTiempo] = useState(false);
  const chartSelected = useChartStore((state) => state.chartSelected);
  const selectChart = useChartStore((state) => state.selectChart);
  const updateChart = useBoardStore((state) => state.updateChart);
  const id_boardSelected = useBoardStore((state) => state.id_boardSelected);

  const [variable, setVariable] = useState("");
  const [variable2, setVariable2] = useState("");
  const [latitud, setLatitud] = useState<number[]>([-34, -35]);
  const [longitud, setLongitud] = useState<number[]>([108, 110]);
  const [nivel, setNivel] = useState<number | null>(null);
  const [fecha, setFecha] = useState<string[] | null>(null);
  const [hora, setHora] = useState("00:00:00.000000000");
  const [typeChart, setTypeChart] = useState<typeChart>("contorno");
  const [unidadMedida, setUnidadMedida] = useState<string>("K");
  const [unidadMedida2, setUnidadMedida2] = useState<string>("K");
  const [calculoDatos, setCalculoDatos] = useState<string>("mean");

  const [consulta, setConsulta] = useState<Consulta>(consultaInicial);
  const [cargandoConsulta, setCargandoConsulta] = useState(false);

  const funcionBoton = async () => {
    if (!chartSelected) return;
    setCargandoConsulta(true);

    let newConsulta2: Consulta = {
      variable: variable2,
      variable2: variable,
      latitud: latitud,
      longitud: longitud,
      typeChart: typeChart,
      unidadMedida: unidadMedida2,
      unidadMedida2: unidadMedida,
      calculoDatos: calculoDatos,
    };

    let newConsulta: Consulta = {
      variable: variable,
      variable2: variable2,
      latitud: latitud,
      longitud: longitud,
      typeChart: typeChart,
      unidadMedida: unidadMedida,
      unidadMedida2: unidadMedida2,
      calculoDatos: calculoDatos,
    };

    if (nivel && varConAltura.includes(variable)) {
      newConsulta.nivel = nivel;
      newConsulta2.nivel = nivel;
    } else {
      newConsulta.nivel = undefined;
      newConsulta2.nivel = undefined;
    }

    if (fecha && varConTiempo.includes(variable)) {
      if (fecha[1]) {
        newConsulta.tiempo = [fecha[0] + "T" + hora, fecha[1] + "T" + hora];
        newConsulta2.tiempo = [fecha[0] + "T" + hora, fecha[1] + "T" + hora];
      } else {
        newConsulta.tiempo = [fecha[0] + "T" + hora];
        newConsulta2.tiempo = [fecha[0] + "T" + hora];
      }
    } else {
      newConsulta.tiempo = undefined;
      newConsulta2.tiempo = undefined;
    }

    if (calculoDatos && typeChart === "lineas") {
      newConsulta.calculoDatos = calculoDatos;
      newConsulta2.calculoDatos = calculoDatos;
    } else {
      newConsulta.calculoDatos = undefined;
      newConsulta2.calculoDatos = undefined;
    }

    newConsulta.typeChart = typeChart;
    newConsulta2.typeChart = typeChart;

    if (typeChart !== "lineas") {
      console.log("no lineas");

      newConsulta.latitud = consultaInicial.latitud;
      newConsulta.longitud = consultaInicial.longitud;
      newConsulta2.latitud = consultaInicial.latitud;
      newConsulta2.longitud = consultaInicial.longitud;
    }

    if (typeChart !== "dispersion") {
      newConsulta.variable2 = "";
      newConsulta.unidadMedida2 = "";
      newConsulta2.variable2 = "";
      newConsulta2.unidadMedida2 = "";
    }

    setConsulta(newConsulta);

    console.log("------- NEW CONSULTA -------");
    console.log(newConsulta);
    console.log(newConsulta2);
    console.log("--------------");

    RequestData(newConsulta).then((res1) => {
      if ("Mensaje del Servidor" in res1) {
        setCargandoConsulta(false);
        toast.error(res1["Mensaje del Servidor"]);
        return;
      }

      let finalBackendData: BackendData = res1;
      let stats: ChartStats[] = [];

      if (newConsulta2.variable2 !== "") {
        RequestData(newConsulta2).then((res2) => {
          if ("Mensaje del Servidor" in res2) {
            setCargandoConsulta(false);
            toast.error(res2["Mensaje del Servidor"]);
            return;
          }

          const response = ProcessTwoVar(res1, res2);
          finalBackendData = response.backendData;
          stats = response.stats;
        });
      } else {
        console.log("Consulta 1");

        const response = ProcessSingleVar(res1);
        finalBackendData = response.backendData;
        stats = response.stats;
      }

      const newChart: Chart = {
        id: chartSelected.id,
        title: chartSelected.title,
        subtitle: chartSelected.subtitle,
        active: true,
        backendData: finalBackendData,
        typeChart: typeChart,
        stats: stats,
      };

      updateChart(id_boardSelected, chartSelected.id, newChart);
      selectChart({
        ...chartSelected,
        typeChart: typeChart,
        active: true,
        backendData: res1,
        stats: stats,
      });

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
        setVariable2={setVariable2}
        setNivel={setNivel}
        setTypeChart={setTypeChart}
        setUnidadMedida={setUnidadMedida}
        setUnidadMedida2={setUnidadMedida2}
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
