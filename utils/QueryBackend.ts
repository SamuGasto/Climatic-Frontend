import BackendData from "@/types/backend-data";
import { Chart } from "@/types/chart";
import { Consulta } from "@/types/consulta";
import { useBoardStore } from "./Stores/boardStore";
import axios from "axios";
import { useChartStore } from "./Stores/chartStore";

export async function SendQuery(consulta: Consulta) {
  const { userData, id_boardSelected, updateChart } = useBoardStore.getState();

  const { chartSelected } = useChartStore.getState();

  let backendData: BackendData = {
    latitude: [],
    longitude: [],
    data: [],
    image: "",
    units: "",
  };

  const latitude = [
    consulta.latitud.length > 1
      ? `${consulta.latitud[consulta.latitud.length - 1]}`
      : "",
    `,${consulta.latitud[0]}`,
  ];
  const longitude = [
    consulta.longitud[0],
    consulta.longitud.length > 1
      ? `,${consulta.longitud[consulta.longitud.length - 1]}`
      : "",
  ];
  let time: string[] = [];
  if (consulta.tiempo) {
    time = [
      consulta.tiempo[0],
      consulta.tiempo.length > 1
        ? `,${consulta.tiempo[consulta.tiempo.length - 1]}`
        : "",
    ];
  }

  let altura: (string | number)[] = [];
  if (consulta.altura) {
    altura = [
      consulta.altura[0],
      consulta.altura.length > 1
        ? `,${consulta.altura[consulta.altura.length - 1]}`
        : "",
    ];
  }

  let active = false;

  try {
    let finalText = "";
    if (consulta.tiempo && consulta.altura) {
      finalText = `http://127.0.0.1:8000/zarr/${consulta.variable}/${consulta.imagen}/${latitude[0]}${latitude[1]}/${longitude[0]}${longitude[1]}/${time[0]}${time[1]}/${altura[0]}${altura[1]}`;
    } else if (consulta.tiempo) {
      finalText = `http://127.0.0.1:8000/zarr/${consulta.variable}/${consulta.imagen}/${latitude[0]}${latitude[1]}/${longitude[0]}${longitude[1]}/${time[0]}${time[1]}`;
    } else {
      finalText = `http://127.0.0.1:8000/zarr/${consulta.variable}/${consulta.imagen}/${latitude[0]}${latitude[1]}/${longitude[0]}${longitude[1]}`;
    }

    backendData = await axios.get(finalText).then((res) => {
      active = true;
      return res.data;
    });
  } catch (error) {
    console.error(error);
  } finally {
    console.log(backendData);
    console.log(active);

    updateChart(
      userData[id_boardSelected],
      chartSelected,
      active,
      backendData,
      consulta.typeChart
    );
  }
}
