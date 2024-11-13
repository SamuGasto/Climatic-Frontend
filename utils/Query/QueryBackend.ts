import BackendData from "@/types/backend-data";
import { Consulta } from "@/types/consulta";
import { useBoardStore } from "../../providers/board-store-provider";
import axios from "axios";
import { useChartStore } from "../../providers/chart-store-provider";

export async function SendQuery(consulta: Consulta) {
  const userData = useBoardStore((state) => state.userData);
  const id_boardSelected = useBoardStore((state) => state.id_boardSelected);
  const updateChart = useBoardStore((state) => state.updateChart);

  const chartSelected = useChartStore((state) => state.chartSelected);

  let backendData: BackendData = {
    latitude: [],
    longitude: [],
    data: [],
    image: "",
    units: "",
  };

  const latitude = consulta.latitud;
  const longitude = consulta.longitud;


  let time: string[] = [];
  if (consulta.tiempo) {
    time = [
      consulta.tiempo[0],
      consulta.tiempo.length > 1
        ? `,${consulta.tiempo[consulta.tiempo.length - 1]}`
        : "",
    ];
  }

  let active = false;

  let imagen = false;

  if (
    consulta.typeChart == "contorno" ||
    consulta.typeChart == "vectoriales" ||
    consulta.typeChart == "isobaras" ||
    consulta.typeChart == "dispersion"
  ) {
    imagen = true;
  }
  try {
    let finalText = "";
    if (consulta.tiempo && consulta.nivel) {
      finalText = `http://127.0.0.1:8000/zarr/${consulta.variable}/${imagen}/${latitude[0]}${latitude[1]}/${longitude[0]}${longitude[1]}/${time[0]}${time[1]}/${consulta.nivel}`;
    } else if (consulta.tiempo) {
      finalText = `http://127.0.0.1:8000/zarr/${consulta.variable}/${imagen}/${latitude[0]}${latitude[1]}/${longitude[0]}${longitude[1]}/${time[0]}${time[1]}`;
    } else {
      finalText = `http://127.0.0.1:8000/zarr/${consulta.variable}/${imagen}/${latitude[0]}${latitude[1]}/${longitude[0]}${longitude[1]}`;
    }

    console.log(finalText);
    

    backendData = await axios.get(finalText).then((res) => {
      active = true;
      console.log(backendData);
      console.log(active);

      if (chartSelected)
        updateChart(
          userData[id_boardSelected],
          chartSelected,
          active,
          backendData,
          consulta.typeChart
        );
      return res.data;
    });
  } catch (error) {
    console.error(error);
  }
}
