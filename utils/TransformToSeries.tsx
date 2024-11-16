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

    if (!Array.isArray(firstData[0][0])) {
      return [
        { name: "Conjunto de datos incorrecto", data: [{ x: "nada", y: 0 }] },
      ];
    }

    let finalData: Series = {
      data: [{ x: time[0].split("T")[0], y: firstData[0][0][0] }],
    };

    firstData.map((latitud, index) => {
      if (index > 0 && Array.isArray(latitud[0]))
        finalData.data.push({ x: time[index].split("T")[0], y: latitud[0][0] });
    });

    return [finalData];
  } else if (typeChart === "clasificacion") {
    // Mapa de clasificación
    return [{ name: "Respuesta clasificación", data: [{ x: "nada", y: 0 }] }];
  } else if (typeChart === "polares") {
    // Gráfico polar
    const firstData = [...data.data];
    let time = data.time;

    if (!Array.isArray(firstData[0][0])) {
      return [
        { name: "Conjunto de datos incorrecto", data: [{ x: "nada", y: 0 }] },
      ];
    }

    let finalData: Series[] = [
      {
        name: time[0],
        data: [firstData[0][0][0]],
      },
    ];

    firstData.map((latitud, index) => {
      if (index > 0 && Array.isArray(latitud[0]))
        finalData.push({ name: time[index], data: [latitud[0][0]] });
    });

    return finalData;
  } else {
    return [{ name: "Respuesta por defecto", data: [{ x: "nada", y: 0 }] }];
  }
}
