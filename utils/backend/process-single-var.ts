import BackendData from "@/types/backend-data";
import { ChartStats } from "@/types/stats";
import { CalcularEstadisticas } from "../obtener-estadisticas";

export async function ProcessSingleVar(res: BackendData): Promise<{
  backendData: BackendData;
  stats: ChartStats[];
}> {
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

  let finalUnidadMedida = "";
  if (Array.isArray(res1.units)) {
    finalUnidadMedida = res1.units[0];
  } else {
    finalUnidadMedida = res1.units;
  }

  const finalBackendData: BackendData = {
    var: res1.var,
    latitude: res1.latitude,
    longitude: res1.longitude,
    image: res1.image,
    time: res1.time,
    level: res1.level,
    data: res1.data,
    units: [finalUnidadMedida],
  };

  return { backendData: finalBackendData, stats: [newStats] };
}
