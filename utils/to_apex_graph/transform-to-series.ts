import BackendData from "@/types/backend-data";
import { Series } from "@/types/series";
import { typeChart } from "@/types/typeChart";
import {
  isArrayOfArrayOfArrays,
  isArrayOfArrays,
} from "@/utils/to_apex_graph/check-arrays";

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

    if (!Array.isArray(firstData[0][0]) || !Array.isArray(time)) {
      return [
        { name: "Conjunto de datos incorrecto", data: [{ x: "nada", y: 0 }] },
      ];
    }

    const initialTime = time[0].split("T")[0];
    const initialValue = firstData[0][0][0];

    const finalData: { x: string; y: number }[] = [
      { x: initialTime, y: initialValue },
    ];

    firstData.map((latitud, index) => {
      if (index > 0 && Array.isArray(latitud[0])) {
        const t: string = time[index].split("T")[0];
        const value = latitud[0][0] as number;
        const newData: { x: string; y: number } = { x: t, y: value };
        finalData.push(newData);
      }
    });

    let DataResponse: Series = {
      data: finalData,
    };

    return [DataResponse];
  } else if (typeChart === "dispersion") {
    // Gráfico de dispersión
    const final_data: Series[] = [];
    if (isArrayOfArrays(data.data)) {
      // Es arreglo de arreglos
      final_data.push({ name: data.var, data: data.data });
    }
    if (isArrayOfArrayOfArrays(data.data)) {
      // Es arreglo de arreglos de arreglos
      final_data.push({
        name: "Conjunto de datos incorrecto",
        data: [{ x: "nada", y: 0 }],
      });
    }
    return final_data;
  } else if (typeChart === "polares") {
    // Gráfico polar, recibe solamente lo del viento, osea: data: [[1,...], [2,...], ...]

    let finalData: Series[] = [];
    if (isArrayOfArrays(data.data)) {
      //Es arreglo de arreglos
      data.data.map((valor, index) => {
        valor.map((valor2) => {
          finalData.push(valor2);
        });
      });
    }

    return finalData;
  } else {
    return [{ name: "Respuesta por defecto", data: [{ x: "nada", y: 0 }] }];
  }
}
