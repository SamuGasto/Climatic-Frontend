import { Board } from "@/types/board";
import { Chart, typeChart } from "@/types/chart";
import { create } from "zustand";
import { exampleData } from "@/config/test-data";
import BackendData from "@/types/backend-data";
import { useChartStore } from "./chartStore";
import { createJSONStorage, persist } from "zustand/middleware";
import _ from "lodash";

interface CounterState {
  userData: Board[];
  id_boardSelected: number;
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
    typeChart?: typeChart,
    newTitle?: string,
    newSubtitle?: string
  ) => void;
  deleteBoard: (id: number) => void;
  deleteChart: (boardFather: Board, chart: Chart) => void;
  selectBoard: (id: number) => void;
}

const { selectChart } = useChartStore.getState();

export const useBoardStore = create<CounterState>()(
  persist(
    (set, get) => ({
      userData: [],
      id_boardSelected: 0,

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

          // DEBE MODIFICAR EL BOARDSELECTED
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
            typeChart: "contorno",
          };

          let finalData = [...get().userData];

          finalData.map((boardLocal) => {
            if (boardLocal.id === boardFather.id) {
              boardLocal.charts.push(newChart);
            }
            return boardLocal;
          });

          set((state) => ({ ...state, userData: finalData }));
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
        } catch (error) {
          console.error(error);
        }
      },
      updateChart: (
        boardFather: Board,
        chart: Chart,
        active: boolean,
        backendData?: BackendData,
        typeChart?: typeChart,
        newTitle?: string,
        newSubtitle?: string
      ) => {
        try {
          let newChart: Chart = {
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
        } catch (error) {
          console.error(error);
        }
      },
      deleteBoard: (id: number) => {
        try {
          const { chartSelected, selectChart } = useChartStore.getState();
          const dataFilter = get().userData.filter((value) => value.id !== id);

          get().userData[id].charts.map((chart) => {
            if (_.isEqual(chart, chartSelected)) {
              selectChart({
                id: -1,
                title: "",
                subtitle: "",
                active: false,
                typeChart: "barras",
                backendData: {
                  latitude: [],
                  longitude: [],
                  image: "",
                  data: [],
                  time: [],
                  level: [],
                  units: "",
                },
              });
            }
            return chart;
          });

          set((state) => ({
            ...state,
            userData: dataFilter.map((board, index) => {
              board.id = index;
              return board;
            }),
            id_boardSelected: id - 1,
          }));

          // Hay que hacer que cambie el boardselected
        } catch (error) {
          console.error(error);
        }
      },
      deleteChart: (boardFather: Board, chart: Chart) => {
        try {
          const { chartSelected, selectChart } = useChartStore.getState();

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

          if (_.isEqual(chart, chartSelected))
            selectChart({
              id: -1,
              title: "",
              subtitle: "",
              active: false,
              typeChart: "barras",
              backendData: {
                latitude: [],
                longitude: [],
                image: "",
                data: [],
                time: [],
                level: [],
                units: "",
              },
            });

          set((state) => ({ ...state, userData: newData }));
        } catch (error) {
          console.error(error);
        }
      },
      selectBoard: (id: number) => {
        set((state) => ({ ...state, id_boardSelected: id }));
      },
    }),
    { name: "board-store", storage: createJSONStorage(() => localStorage) }
  )
);
