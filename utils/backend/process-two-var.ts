import BackendData from "@/types/backend-data";
import { ChartStats } from "@/types/stats";
import { CalcularEstadisticas } from "../obtener-estadisticas";

export function ProcessTwoVar(
  res1: BackendData,
  res2: BackendData
): { backendData: BackendData; stats: ChartStats[] } {
  let datos1: number[] = [];
  res1.data.map((lat: number[] | number[][]) => {
    lat.map((long) => {
      if (Array.isArray(long))
        long.map((data) => {
          datos1.push(data);
        });
      else {
        datos1.push(long);
      }
    });
  });

  let datos2: number[] = [];

  res2.data.map((lat: number[] | number[][]) => {
    lat.map((long) => {
      if (Array.isArray(long))
        long.map((data) => {
          datos2.push(data);
        });
      else {
        datos2.push(long);
      }
    });
  });

  // Juntar dos variables para desplegar un solo conjunto de datos
  const finalDatos: number[][] = [];
  for (let i = 0; i < datos1.length; i++) {
    finalDatos.push([datos1[i], datos2[i]]);
  }

  // Calcular las estadísticas finales
  const newStats: ChartStats = CalcularEstadisticas(datos1);
  const newStats2: ChartStats = CalcularEstadisticas(datos2);

  // Establecer el backend final
  const finalBackendData: BackendData = {
    var: res2.var === "" ? res1.var : `${res1.var} v/s ${res2.var}`,
    latitude: res1.latitude,
    longitude: res1.longitude,
    image: res1.image,
    time: res1.time,
    level: res1.level,
    data: res2.data.length > 0 ? finalDatos : res1.data,
    units: res1.units,
  };

  console.log("------------- RESPUESTA 2 --------------");
  console.log(res2);
  console.log("--------------");

  return { backendData: finalBackendData, stats: [newStats, newStats2] };
}
