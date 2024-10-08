import { Chart } from "@/types/chart";
import { create } from "zustand";

interface ChartStore {
  chartSelected: Chart | null;
  selectChart: (newChart: Chart | null) => void;
}

export const useChartStore = create<ChartStore>((set, get) => ({
  chartSelected: null,
  selectChart: (newChart: Chart | null) => {
    set((state) => ({ ...state, chartSelected: newChart }));
  },
}));
