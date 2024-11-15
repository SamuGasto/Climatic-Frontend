import { Board } from "@/types/board";
import { Chart, typeChart } from "@/types/chart";
import { create } from "zustand";
import { exampleData } from "@/config/test-data";
import BackendData from "@/types/backend-data";
import { createJSONStorage, persist } from "zustand/middleware";
import _ from "lodash";
import { produce } from "immer";

export type BoardStates = {
  userData: Board[];
  id_boardSelected: number;
};

export type BoardActions = {
  addNewBoard: (name: string) => void;
  addNewChart: (boardFather: Board, title: string, subtitle: string) => void;
  updateBoard: (
    board: Board,
    newName: string,
    newCharts?: Chart[],
    newLastChartId?: number
  ) => void;
  updateChart: (
    id_boardFather: number,
    chart: Chart,
    active: boolean,
    backendData: BackendData,
    typeChart: typeChart,
    newTitle: string,
    newSubtitle: string
  ) => void;
  deleteBoard: (id: number) => void;
  deleteChart: (id_boardFather: number, id_chart: number) => void;
  selectBoard: (id: number) => void;
  getCharts: (id_board: number) => Chart[];
};

export type BoardStore = BoardStates & BoardActions;

export const createBoardStore = () => {
  return create<BoardStore>()(
    persist(
      (set, get) => ({
        userData: [
          {
            id: 0,
            name: "Mi primer tablero",
            charts: [],
          },
        ],
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
          } catch (error) {
            console.error(error);
          }
        },
        addNewChart: (boardFather: Board, title: string, subtitle: string) => {
          try {
            set(
              produce((state: BoardStates) => {
                const board = state.userData.find(
                  (b) => b.id === boardFather.id
                );

                if (board) {
                  board.charts.push({
                    id: boardFather.charts.length,
                    title: title,
                    subtitle: subtitle,
                    active: false,
                    backendData: exampleData,
                    typeChart: "contorno",
                  });
                }
              })
            );
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

            set(
              produce((state: BoardStates) => ({
                ...state,
                userData: finalData,
              }))
            );
          } catch (error) {
            console.error(error);
          }
        },
        updateChart: (
          id_boardFather: number,
          chart: Chart,
          active: boolean,
          backendData: BackendData,
          typeChart: typeChart,
          newTitle: string,
          newSubtitle: string
        ) => {
          try {
            set(
              produce((state: BoardStates) => {
                const board = state.userData.find(
                  (b) => b.id === id_boardFather
                );
                if (board) {
                  const grafico = board.charts.find((c) => c.id === chart.id);
                  if (grafico) {
                    Object.assign(grafico, {
                      active: active,
                      backendData: {
                        data: backendData.data,
                        image: backendData.image,
                        latitude: backendData.latitude,
                        longitude: backendData.longitude,
                        level: backendData.level,
                        time: backendData.time,
                        units: backendData.units,
                      },
                      typeChart: typeChart,
                      title: newTitle,
                      subtitle: newSubtitle,
                    });
                  }
                }
              })
            );
          } catch (error) {
            console.error(error);
          }
        },
        deleteBoard: (id: number) => {
          try {
            const dataFilter = get().userData.filter(
              (value) => value.id !== id
            );

            set((state) => ({
              ...state,
              userData: dataFilter.map((board, index) => {
                board.id = index;
                return board;
              }),
              id_boardSelected: id - 1,
            }));
          } catch (error) {
            console.error(error);
          }
        },
        deleteChart: (id_boardFather: number, id_chart: number) => {
          try {
            set(
              produce((state: BoardStates) => {
                const board = state.userData.find(
                  (b) => b.id === id_boardFather
                );
                if (board) {
                  board.charts = board.charts.filter((c) => c.id !== id_chart);
                }
              })
            );
          } catch (error) {
            console.error(error);
          }
        },
        selectBoard: (id: number) => {
          set((state) => ({ ...state, id_boardSelected: id }));
        },
        getCharts(id_board) {
          return get().userData[id_board].charts;
        },
      }),
      { name: "board-store", storage: createJSONStorage(() => localStorage) }
    )
  );
};
