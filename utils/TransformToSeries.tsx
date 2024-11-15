import BackendData from "@/types/backend-data";
import { Series, typeChart } from "@/types/chart";

export function TransformToSeries(
  typeChart: typeChart,
  data: BackendData
): Series[] {
  if (!data.time) {
    return [{ name: "Falta tiempo", data: [{ x: "nada", y: 0 }] }];
  }

  if (typeChart === "lineas") {
    // Linea de tiempo

    let time = data.time;

    const firstData = [...data.data];

    let finalData: Series = {
      data: [{ x: time[0].split("T")[0], y: firstData[0][0][0] }],
    };

    firstData.map((latitud, index) => {
      console.log(time[index].split("T")[0]);
      if (index > 0)
        finalData.data.push({ x: time[index].split("T")[0], y: latitud[0][0] });
    });
    console.log(finalData);

    return [finalData];
  } else if (typeChart === "clasificacion") {
    // Mapa de clasificación
    return [{ name: "Respuesta clasificación", data: [{ x: "nada", y: 0 }] }];
  } else if (typeChart === "polares") {
    // Gráfico polar
    return [{ name: "Respuesta polares", data: [{ x: "nada", y: 0 }] }];
  } else {
    return [{ name: "Respuesta por defecto", data: [{ x: "nada", y: 0 }] }];
  }
}
