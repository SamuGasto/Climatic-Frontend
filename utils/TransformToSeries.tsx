import BackendData from "@/types/backend-data";

export function TransformToSeries(data: BackendData) {
  const firstData = [...data.data];
  const finalData = firstData.map((latitud, index) => {
    return {
      name: data.latitude[index].toString(),
      data: latitud.map((element, i) => {
        return {
          x: data.longitude[i].toString(),
          y: element,
        };
      }),
    };
  });

  return finalData;
}
