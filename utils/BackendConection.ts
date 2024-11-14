import { Consulta } from "@/types/consulta";
import axios from "axios";

export const RequestData = async (consulta: Consulta) => {
  let time: string[] = [];
  if (consulta.tiempo) {
    time = [
      consulta.tiempo[0],
      consulta.tiempo.length > 1
        ? `,${consulta.tiempo[consulta.tiempo.length - 1]}`
        : "",
    ];
  }

  try {
    let finalText = "";
    if (consulta.tiempo && consulta.nivel) {
      finalText = `http://127.0.0.1:8000/zarr/${consulta.variable}/${consulta.typeChart}/${consulta.latitud[0]},${consulta.latitud[1]}/${consulta.longitud[0]},${consulta.longitud[1]}/${time[0]}${time[1]}/${consulta.nivel}`;
    } else if (consulta.tiempo) {
      finalText = `http://127.0.0.1:8000/zarr/${consulta.variable}/${consulta.typeChart}/${consulta.latitud[0]},${consulta.latitud[1]}/${consulta.longitud[0]},${consulta.longitud[1]}/${time[0]}${time[1]}`;
    } else {
      finalText = `http://127.0.0.1:8000/zarr/${consulta.variable}/${consulta.typeChart}/${consulta.latitud[0]},${consulta.latitud[1]}/${consulta.longitud[0]},${consulta.longitud[1]}`;
    }

    return (await axios.get(finalText)).data;
  } catch (error) {
    return null;
  }
};
