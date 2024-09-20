import { Board } from "@/types/board";
import BackendData from "@/types/data";

const example_data: BackendData = {
  latitude: [-34.0, -34.25, -34.5, -34.75, -35.0],
  longitude: [
    108.0, 108.25, 108.5, 108.75, 109.0, 109.25, 109.5, 109.75, 110.0,
  ],
  time: "2021-12-31T21:00:00.000000000",
  data: [
    [
      290.15130615234375, 290.2373352050781, 290.3701477050781,
      290.5482482910156, 290.7625732421875, 290.89239501953125,
      290.95880126953125, 290.998046875, 290.9512634277344,
    ],
    [
      289.9595947265625, 290.0411071777344, 290.1422424316406,
      290.2750549316406, 290.45770263671875, 290.5799560546875,
      290.5965576171875, 290.6478576660156, 290.6931457519531,
    ],
    [
      289.8388671875, 289.9188537597656, 290.0048828125, 290.1150817871094,
      290.2584533691406, 290.3248596191406, 290.3414611816406,
      290.2705383300781, 290.32183837890625,
    ],
    [
      289.764892578125, 289.8116760253906, 289.9052734375, 290.0184631347656,
      290.1633605957031, 290.178466796875, 290.128662109375, 290.0365905761719,
      289.9429931640625,
    ],
    [
      289.5535888671875, 289.5852966308594, 289.6773681640625, 289.7890625,
      289.8690490722656, 289.888671875, 289.84185791015625, 289.77093505859375,
      289.7030029296875,
    ],
  ],
  units: "K",
};

const series_example = [
  {
    name: "-34",
    data: [
      { x: "108", y: 290.15130615234375 },
      { x: "108.25", y: 290.2373352050781 },
      { x: "108.5", y: 290.3701477050781 },
      { x: "108.75", y: 290.5482482910156 },
      { x: "109", y: 290.7625732421875 },
      { x: "109.25", y: 290.89239501953125 },
      { x: "109.5", y: 290.95880126953125 },
      { x: "109.75", y: 290.998046875 },
      { x: "110", y: 290.9512634277344 },
    ],
  },
  {
    name: "-34.25",
    data: [
      { x: "108", y: 289.9595947265625 },
      { x: "108.25", y: 290.0411071777344 },
      { x: "108.5", y: 290.1422424316406 },
      { x: "108.75", y: 290.2750549316406 },
      { x: "109", y: 290.45770263671875 },
      { x: "109.25", y: 290.5799560546875 },
      { x: "109.5", y: 290.5965576171875 },
      { x: "109.75", y: 290.6478576660156 },
      { x: "110", y: 290.6931457519531 },
    ],
  },
  {
    name: "-34.5",
    data: [
      { x: "108", y: 289.8388671875 },
      { x: "108.25", y: 289.9188537597656 },
      { x: "108.5", y: 290.0048828125 },
      { x: "108.75", y: 290.1150817871094 },
      { x: "109", y: 290.2584533691406 },
      { x: "109.25", y: 290.3248596191406 },
      { x: "109.5", y: 290.3414611816406 },
      { x: "109.75", y: 290.2705383300781 },
      { x: "110", y: 290.32183837890625 },
    ],
  },
  {
    name: "-34.75",
    data: [
      { x: "108", y: 289.764892578125 },
      { x: "108.25", y: 289.8116760253906 },
      { x: "108.5", y: 289.9052734375 },
      { x: "108.75", y: 290.0184631347656 },
      { x: "109", y: 290.1633605957031 },
      { x: "109.25", y: 290.178466796875 },
      { x: "109.5", y: 290.128662109375 },
      { x: "109.75", y: 290.0365905761719 },
      { x: "110", y: 289.9429931640625 },
    ],
  },
  {
    name: "-35",
    data: [
      { x: "108", y: 289.5535888671875 },
      { x: "108.25", y: 289.5852966308594 },
      { x: "108.5", y: 289.6773681640625 },
      { x: "108.75", y: 289.7890625 },
      { x: "109", y: 289.8690490722656 },
      { x: "109.25", y: 289.888671875 },
      { x: "109.5", y: 289.84185791015625 },
      { x: "109.75", y: 289.77093505859375 },
      { x: "110", y: 289.7030029296875 },
    ],
  },
];

const label_example = [
  "108",
  "108.25",
  "108.5",
  "108.75",
  "109",
  "109.25",
  "109.5",
  "109.75",
  "110",
];

export const simple_chart_config = {
  chart: {
    type: "heatmap",
  },
  series: series_example,
  xaxis: {
    categories: label_example,
  },
};

export const example_chart = {
  series: series_example,
  options: {
    chart: {
      height: "98%",
      width: "98%",
      type: "heatmap",
      zoom: {
        enabled: true,
        type: "xy",
      },
    },
    plotOptions: {
      heatmap: {
        radius: 6,
      },
    },
    colors: ["#ffcd6d"],
    xaxis: {
      type: "category",
      categories: label_example,
      title: {
        text: "Longitud",
      },
      decimalsInFloat: 1,
    },
    yaxis: {
      title: {
        text: "Latitud",
      },
      decimalsInFloat: 1,
    },
    tooltip: {
      y: {
        formatter: (value: number) => {
          return value.toFixed(3).toString();
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    noData: {
      text: "Cargando...",
    },
  },
};

export const boards: Board[] = [
  {
    name: "Tablero 1",
    charts: [
      {
        tittle: "Gráfico de ejemplo",
        subtittle: "Un gráfico para probar la aplicación",
        url: `https://quickchart.io/apex-charts/render?config=${JSON.stringify(simple_chart_config)}`,
      },
      {
        tittle: "Gráfico de ejemplo",
        subtittle: "Un gráfico para probar la aplicación",
        url: `https://quickchart.io/apex-charts/render?config=${JSON.stringify(simple_chart_config)}`,
      },
      {
        tittle: "Gráfico de ejemplo",
        subtittle: "Un gráfico para probar la aplicación",
        url: `https://quickchart.io/apex-charts/render?config=${JSON.stringify(simple_chart_config)}`,
      },
      {
        tittle: "Gráfico de ejemplo",
        subtittle: "Un gráfico para probar la aplicación",
        url: `https://quickchart.io/apex-charts/render?config=${JSON.stringify(simple_chart_config)}`,
      },
      {
        tittle: "Gráfico de ejemplo",
        subtittle: "Un gráfico para probar la aplicación",
        url: `https://quickchart.io/apex-charts/render?config=${JSON.stringify(simple_chart_config)}`,
      },
      {
        tittle: "Gráfico de ejemplo",
        subtittle: "Un gráfico para probar la aplicación",
        url: `https://quickchart.io/apex-charts/render?config=${JSON.stringify(simple_chart_config)}`,
      },
      {
        tittle: "Gráfico de ejemplo",
        subtittle: "Un gráfico para probar la aplicación",
        url: `https://quickchart.io/apex-charts/render?config=${JSON.stringify(simple_chart_config)}`,
      },
    ],
  },
  {
    name: "Tablero 2",
    charts: [
      {
        tittle: "Gráfico de ejemplo",
        subtittle: "Un gráfico para probar la aplicación",
        url: `https://quickchart.io/apex-charts/render?config=${JSON.stringify(simple_chart_config)}`,
      },
    ],
  },
];
