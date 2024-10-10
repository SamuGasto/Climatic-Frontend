import { Chart } from "@/types/chart";
import { create } from "zustand";

interface ChartStore {
  chartSelected: Chart;
  typeChart:
    | "image"
    | "line"
    | "area"
    | "bar"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "candlestick"
    | "boxPlot"
    | "radar"
    | "polarArea"
    | "rangeBar"
    | "rangeArea"
    | "treemap";
  loadChartData: () => void;
  selectChart: (newChart: Chart) => void;
  changeTypeChart: (
    newType:
      | "image"
      | "line"
      | "area"
      | "bar"
      | "pie"
      | "donut"
      | "radialBar"
      | "scatter"
      | "bubble"
      | "heatmap"
      | "candlestick"
      | "boxPlot"
      | "radar"
      | "polarArea"
      | "rangeBar"
      | "rangeArea"
      | "treemap"
  ) => void;
}

export const useChartStore = create<ChartStore>((set, get) => ({
  chartSelected: {
    id: 0,
    title: "",
    subtitle: "",
    active: false,
    backendData: {
      latitude: [],
      longitude: [],
      image: "",
      data: [],
      time: [],
      level: [],
      units: "",
    },
    image: "",
    config: { series: [], options: {} },
    inactiveConfig: { series: [], options: {} },
  },
  typeChart: "image",
  loadChartData: () => {
    try {
      const data = localStorage.getItem("UserData.chartSelected");
      if (data) {
        set((state) => ({ ...state, chartSelected: JSON.parse(data) }));
      } else {
        const provisionalChart: Chart = {
          id: 0,
          title: "",
          subtitle: "",
          active: false,
          backendData: {
            latitude: [],
            longitude: [],
            image: "",
            data: [],
            time: [],
            level: [],
            units: "",
          },
          image: "",
          config: { series: [], options: {} },
          inactiveConfig: { series: [], options: {} },
        };
        set((state) => ({ ...state, chartSelected: provisionalChart }));
        localStorage.setItem(
          "UserData.chartSelected",
          JSON.stringify(provisionalChart)
        );
      }
    } catch (error) {
      console.error(error);
    }
  },
  selectChart: (newChart: Chart) => {
    set((state) => ({ ...state, chartSelected: newChart }));
    localStorage.setItem("UserData.chartSelected", JSON.stringify(newChart));
  },
  changeTypeChart: (newType) => {
    set((state) => ({ ...state, typeChart: newType }));
  },
}));
