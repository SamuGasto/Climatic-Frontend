import { Board } from "@/types/board";
import { Chart, ChartConfig } from "@/types/chart";
import { create } from "zustand";
import { CreateEmptyApexChart } from "../GenerateChart";
import { exampleData } from "@/config/test-data";
import BackendData from "@/types/backend-data";
import { title } from "process";
import { subtitle } from "@/components/primitives";
import { useChartStore } from "./chartStore";

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
    active: boolean,
    backendData?: BackendData,
    typeChart?:
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
      | "treemap",
    newTitle?: string,
    newSubtitle?: string
  ) => void;
  deleteBoard: (id: number) => void;
  deleteChart: (boardFather: Board, chart: Chart) => void;
  selectBoard: (id: number) => void;
}

const { selectChart } = useChartStore.getState();

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
      const newChart: Chart = {
        id: boardFather.charts.length,
        title: title,
        subtitle: subtitle,
        active: false,
        backendData: exampleData,
        typeChart: "area",
      };

      let finalData = [...get().userData];

      finalData.map((boardLocal) => {
        if (boardLocal.id === boardFather.id) {
          boardLocal.charts.push(newChart);
        }
        return boardLocal;
      });

      set((state) => ({ ...state, userData: finalData }));
      localStorage.setItem("UserData.data", JSON.stringify(finalData));
    } catch (error) {
      console.error(error);
    }
  },
  updateBoard: (board: Board, newName: string, newCharts?: Chart[]) => {
    try {
      let newValues = board;

      if (newName) newValues.name = newName;
      if (newCharts) newValues.charts = newCharts;

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
    active: boolean,
    backendData?: BackendData,
    typeChart?:
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
      | "treemap",
    newTitle?: string,
    newSubtitle?: string
  ) => {
    try {
      let newChart = {
        ...chart,
        active: active,
        backendData: backendData ? backendData : chart.backendData,
        typeChart: typeChart ? typeChart : chart.typeChart,
        title: newTitle ? newTitle : chart.title,
        subtitle: newSubtitle ? newSubtitle : chart.subtitle,
      };

      const newData = get().userData.map((boardLocal) => {
        if (boardLocal.id === boardFather.id) {
          const updatedCharts = boardFather.charts.map((chart) => {
            if (chart.id === newChart.id) {
              return newChart;
            }
            return chart;
          });
          return { ...boardLocal, charts: updatedCharts };
        }
        return boardLocal;
      });

      set((state) => ({ ...state, userData: newData }));
      selectChart(newChart);
      localStorage.setItem("UserData.data", JSON.stringify(newData));
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
