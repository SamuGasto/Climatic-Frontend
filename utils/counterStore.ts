import { Board } from "@/types/board";
import { create } from "zustand";

interface CounterState {
  userData: Board[];
  saveData: (newData: Board[]) => void;
}

export const useCounterStore = create<CounterState>((set, get) => ({
  userData: [],
  saveData: (newData: Board[]) => set((state) => ({ userData: newData })),
}));
