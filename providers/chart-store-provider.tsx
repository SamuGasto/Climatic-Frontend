"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";

import { type ChartStore, createChartStore } from "@/stores/chartStore";
import { useStore } from "zustand";

export type ChartStoreApi = ReturnType<typeof createChartStore>;

export const ChartStoreContext = createContext<ChartStoreApi | undefined>(
  undefined
);

export interface ChartStoreProviderProps {
  children: ReactNode;
}

export const ChartStoreProvider = ({ children }: ChartStoreProviderProps) => {
  const storeRef = useRef<ChartStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createChartStore();
  }

  return (
    <ChartStoreContext.Provider value={storeRef.current}>
      {children}
    </ChartStoreContext.Provider>
  );
};

export const useChartStore = <T,>(selector: (store: ChartStore) => T): T => {
  const chartStoreContext = useContext(ChartStoreContext);

  if (!chartStoreContext) {
    throw new Error(`useChartStore must be used within ChartStoreProvider`);
  }

  return useStore(chartStoreContext, selector);
};
