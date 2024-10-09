import { Chart } from "@/types/chart";
import { create } from "zustand";

interface ChartStore {
  chartSelected: Chart | null;
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
  selectChart: (newChart: Chart | null) => void;
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
  chartSelected: null,
  typeChart: "image",
  selectChart: (newChart: Chart | null) => {
    set((state) => ({ ...state, chartSelected: newChart }));
    console.log(newChart);
  },
  changeTypeChart: (newType) => {
    set((state) => ({ ...state, typeChart: newType }));
  },
}));
