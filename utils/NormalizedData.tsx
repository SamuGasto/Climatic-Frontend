import BackendData from "@/types/data";

function NormalizedData(data: BackendData) {
  let maxValue = 0;
  let minValue = 10000;

  const firstData = [...data.data];
  const anotherData = [...data.data];
  const real = firstData.map((latitud, index) => {
    const max = Math.max(...latitud);
    const min = Math.min(...latitud);
    if (max > maxValue) maxValue = max;
    if (min < minValue) minValue = min;
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

  let visual = anotherData.map((latitud, index) => {
    return {
      name: data.latitude[index].toString(),
      data: latitud.map((element, i) => {
        return {
          x: data.longitude[i].toString(),
          y: (element - minValue) / (maxValue - minValue),
        };
      }),
    };
  });

  return { real, visual };
}

export default NormalizedData;
