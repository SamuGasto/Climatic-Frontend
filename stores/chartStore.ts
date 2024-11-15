import { Chart, typeChart } from "@/types/chart";
import { produce } from "immer";
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
          set(
            produce((state: ChartStates) => {
              if (newChart) {
                if (state.chartSelected)
                  Object.assign(state.chartSelected, {
                    id: newChart.id,
                    active: newChart.active,
                    backendData: {
                      data: newChart.backendData.data,
                      image: newChart.backendData.image,
                      latitude: newChart.backendData.latitude,
                      longitude: newChart.backendData.longitude,
                      level: newChart.backendData.level,
                      time: newChart.backendData.time,
                      units: newChart.backendData.units,
                    },
                    typeChart: newChart.typeChart,
                    title: newChart.title,
                    subtitle: newChart.subtitle,
                  });
                else {
                  state.chartSelected = { ...newChart };
                }
              } else {
                state.chartSelected = null;
              }
            })
          );
        },
        changeTypeChart: (newType) => {
          set((state) => ({ ...state, typeChart: newType }));
        },
      }),
      { name: "chart-storage", storage: createJSONStorage(() => localStorage) }
    )
  );
};
