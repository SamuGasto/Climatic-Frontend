import { Chart, typeChart } from "@/types/chart";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type ChartStates = {
  chartSelected: Chart | null;
  typeChart: typeChart;
};

export type ChartActions = {
  selectChart: (newChart: Chart | null) => void;
  changeTypeChart: (newType: typeChart) => void;
};

export type ChartStore = ChartStates & ChartActions;

export const createChartStore = () => {
  return create<ChartStore>()(
    persist(
      (set, get) => ({
        chartSelected: null,
        typeChart: "contorno",
        selectChart: (newChart: Chart | null) => {
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
