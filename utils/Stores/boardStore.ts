import { Board } from "@/types/board";
import { Chart, ChartConfig } from "@/types/chart";
import { create } from "zustand";
import { CreateEmpyChart } from "../GenerateChart";

interface CounterState {
  userData: Board[];
  id_boardSelected: number;
  loadData: () => void;
  addNewBoard: (name: string) => void;
  addNewChart: (boardFather: Board, title: string, subtitle: string) => void;
  updateBoard: (
    board: Board,
    newName: string,
    newCharts?: Chart[],
    newLastChartId?: number
  ) => void;
  updateChart: (
    boardFather: Board,
    chart: Chart,
    newTitle?: string,
    newSubtitle?: string,
    newConfig?: ChartConfig,
    newInactiveConfig?: ChartConfig
  ) => void;
  deleteBoard: (id: number) => void;
  deleteChart: (boardFather: Board, chart: Chart) => void;
  selectBoard: (id: number) => void;
}

export const useBoardStore = create<CounterState>((set, get) => ({
  userData: [],
  id_boardSelected: 0,
  loadData: () => {
    const data = localStorage.getItem("UserData.data");
    const lastBoardSelected = localStorage.getItem("UserData.boardSelected");
    if (data) {
      const b_selected = lastBoardSelected
        ? Number.parseInt(lastBoardSelected)
        : JSON.parse(data)[0].id;

      set((state) => ({
        ...state,
        userData: JSON.parse(data),
        id_boardSelected: b_selected,
      }));
    } else {
      const newBoard: Board = {
        id: 0,
        name: "Primer tablero",
        charts: [],
        lastChartId: 0,
      };
      set((state) => ({ ...state, userData: [newBoard], id_boardSelected: 0 }));
      localStorage.setItem("UserData.data", JSON.stringify([newBoard]));
      localStorage.setItem("UserData.boardSelected", newBoard.id.toString());
    }
  },
  addNewBoard: async (name) => {
    try {
      const newBoard: Board = {
        id: get().userData.length,
        name: name,
        charts: [],
        lastChartId: 0,
      };

      const finalData = [...get().userData, newBoard];

      set((state) => ({
        ...state,
        userData: finalData,
        id_boardSelected: newBoard.id,
      }));
      localStorage.setItem("UserData.data", JSON.stringify(finalData));
      localStorage.setItem("UserData.boardSelected", newBoard.id.toString());
    } catch (error) {
      console.error(error);
    }
  },
  addNewChart: (boardFather: Board, title: string, subtitle: string) => {
    try {
      const { Interactive, NoInteractive } = CreateEmpyChart();

      const newChart: Chart = {
        id: boardFather.lastChartId + 1,
        title: title,
        subtitle: subtitle,
        config: Interactive,
        inactiveConfig: NoInteractive,
      };

      let finalData = [...get().userData];

      finalData.map((boardLocal) => {
        if (boardLocal.id === boardFather.id) {
          boardLocal.charts.push(newChart);
          boardLocal.lastChartId = boardLocal.lastChartId + 1;
        }
        return boardLocal;
      });

      set((state) => ({ ...state, userData: finalData }));
      localStorage.setItem("UserData.data", JSON.stringify(finalData));
    } catch (error) {
      console.error(error);
    }
  },
  updateBoard: (
    board: Board,
    newName: string,
    newCharts?: Chart[],
    newLastChartId?: number
  ) => {
    try {
      let newValues = board;

      if (newName) newValues.name = newName;
      if (newCharts) newValues.charts = newCharts;
      if (newLastChartId) newValues.lastChartId = newLastChartId;

      let finalData = [...get().userData];

      finalData.map((boardLocal) => {
        if (boardLocal.id === board.id) {
          board = newValues;
        }
        return boardLocal;
      });

      set((state) => ({ ...state, userData: finalData }));
      localStorage.setItem("UserData.data", JSON.stringify(finalData));
    } catch (error) {
      console.error(error);
    }
  },
  updateChart: (
    boardFather: Board,
    chart: Chart,
    newTitle?: string,
    newSubtitle?: string,
    newConfig?: ChartConfig,
    newInactiveConfig?: ChartConfig
  ) => {
    try {
      let newValues = chart;

      if (newTitle) newValues.title = newTitle;
      if (newSubtitle) newValues.subtitle = newSubtitle;
      if (newConfig) newValues.config = newConfig;
      if (newInactiveConfig) newValues.inactiveConfig = newInactiveConfig;

      let finalData = [...get().userData];
      finalData.map((boardLocal) => {
        if (boardLocal.id === boardFather.id) {
          boardFather.charts.map((chart) => {
            if (chart.id === newValues.id) {
              chart = newValues;
            }
          });
        }
        return boardLocal;
      });

      set((state) => ({ ...state, userData: finalData }));
      localStorage.setItem("UserData.data", JSON.stringify(finalData));
    } catch (error) {
      console.error(error);
    }
  },
  deleteBoard: (id: number) => {
    try {
      const dataFilter = get().userData.filter((value) => value.id !== id);
      set((state) => ({
        ...state,
        userData: dataFilter.map((board, index) => {
          board.id = index;
          return board;
        }),
        id_boardSelected: id - 1,
      }));
      localStorage.setItem("UserData.data", JSON.stringify(dataFilter));
      localStorage.setItem("UserData.boardSelected", (id - 1).toString());
    } catch (error) {
      console.error(error);
    }
  },
  deleteChart: (boardFather: Board, chart: Chart) => {
    try {
      const newData = get().userData.map((board) => {
        let finalBoard = board;
        if (board.id === boardFather.id) {
          finalBoard.charts = board.charts.filter(
            (chartActual) => chartActual.id !== chart.id
          );
        }
        board.charts.map((chart, index) => {
          chart.id = index;
          return chart;
        });
        return finalBoard;
      });

      set((state) => ({ ...state, userData: newData }));
      localStorage.setItem("UserData.data", JSON.stringify(newData));
    } catch (error) {
      console.error(error);
    }
  },
  selectBoard: (id: number) => {
    set((state) => ({ ...state, id_boardSelected: id }));
    localStorage.setItem("UserData.boardSelected", id.toString());
  },
}));
