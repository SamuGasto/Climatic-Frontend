import { Chart, typeChart } from "@/types/chart";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type ChartStates = {
  chartSelected: Chart;
  typeChart: typeChart;
};

export type ChartActions = {
  selectChart: (newChart: Chart) => void;
  changeTypeChart: (newType: typeChart) => void;
};

export type ChartStore = ChartStates & ChartActions;

export const createChartStore = () => {
  return create<ChartStore>()(
    persist(
      (set, get) => ({
        chartSelected: {
          id: -1,
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
          typeChart: "barras",
        },
        typeChart: "contorno",
        selectChart: (newChart: Chart) => {
          set((state) => ({ ...state, chartSelected: newChart }));
        },
        changeTypeChart: (newType) => {
          set((state) => ({ ...state, typeChart: newType }));
        },
      }),
      { name: "chart-storage", storage: createJSONStorage(() => localStorage) }
    )
  );
};
