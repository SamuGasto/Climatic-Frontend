import BackendData from "@/types/data";
import { Data, PlotType } from "plotly.js";

export default function ProcessData(
  initial_data: BackendData,
  type: PlotType
): Data {
  console.log("Start: ", initial_data);
  //Transformar la data en algo legible para el ApexChart
  const values = initial_data.data.map((latitud, index) => {
    return latitud.map((element, i) => {
      return {
        x: initial_data.longitude[i],
        y: element,
      };
    });
  });

  //Consegir las labels para el gráfico
  const labels = initial_data.longitude.map((l) => {
    return l.toString();
  });

  console.log("Final: ", values);

  const data: Data = {};

  return data;
}
