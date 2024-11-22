import BackendData from "@/types/backend-data";
import { ChartStats } from "@/types/stats";
import { CalcularEstadisticas } from "../obtener-estadisticas";

export function ProcessSingleVar(res: BackendData): {
  backendData: BackendData;
  stats: ChartStats[];
} {
  const res1: BackendData = res;

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

  const newStats: ChartStats = CalcularEstadisticas(datos1);

  const finalBackendData: BackendData = {
    var: res1.var,
    latitude: res1.latitude,
    longitude: res1.longitude,
    image: res1.image,
    time: res1.time,
    level: res1.level,
    data: res1.data,
    units: res1.units,
  };

  return { backendData: finalBackendData, stats: [newStats] };
}
