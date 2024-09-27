import { Board } from "@/types/board";
import { Chart, ChartConfig } from "@/types/chart";
import { useCounterStore } from "@/utils/counterStore";
import { CreateEmpyChart } from "@/utils/GenerateChart";
import React, { useEffect, useState } from "react";

function useStorage() {
  const { userData, saveData } = useCounterStore();

  function LoadData() {
    try {
      //localStorage.removeItem("UserData");
      const dataSaved = localStorage.getItem("UserData");
      if (dataSaved) {
        saveData(JSON.parse(dataSaved));
      } else {
        const newBoard: Board[] = [];
        saveData(newBoard);
        localStorage.setItem("UserData", JSON.stringify(newBoard));
      }
    } catch (error) {
      console.error(error);
    }
  }

  function SaveChanges(finalData: Board[]) {
    try {
      saveData(finalData);
      localStorage.setItem("UserData", JSON.stringify(finalData));
    } catch (error) {
      console.error(error);
    }
  }

  function AddNewBoard(name: string) {
    try {
      let copyData = [...userData];

      const newBoard: Board = {
        id: copyData.length - 1,
        name: name,
        charts: [],
        lastChartId: 0,
      };

      copyData.push(newBoard);

      SaveChanges(copyData);
    } catch (error) {
      console.error(error);
    }
  }

  function AddNewChart(boardFather: Board, title: string, subtitle: string) {
    try {
      const { Interactive, NoInteractive } = CreateEmpyChart();

      const newChart: Chart = {
        id: boardFather.lastChartId + 1,
        title: title,
        subtitle: subtitle,
        config: Interactive,
        inactiveConfig: NoInteractive,
      };
      let copyData = [...userData];

      copyData.map((boardLocal) => {
        if (boardLocal.id === boardFather.id) {
          boardLocal.charts.push(newChart);
          boardLocal.lastChartId = boardLocal.lastChartId + 1;
        }
        return boardLocal;
      });

      SaveChanges(copyData);
    } catch (error) {
      console.error(error);
    }
  }

  function UpdateBoard(
    board: Board,
    newName: string,
    newCharts?: Chart[],
    newLastChartId?: number
  ) {
    try {
      let newValues = board;

      if (newName) newValues.name = newName;
      if (newCharts) newValues.charts = newCharts;
      if (newLastChartId) newValues.lastChartId = newLastChartId;

      let copyData = [...userData];
      copyData.map((boardLocal) => {
        if (boardLocal.id === board.id) {
          board = newValues;
        }
        return boardLocal;
      });

      SaveChanges(copyData);
    } catch (error) {
      console.error(error);
    }
  }

  function UpdateChart(
    boardFather: Board,
    chart: Chart,
    newTitle?: string,
    newSubtitle?: string,
    newConfig?: ChartConfig,
    newInactiveConfig?: ChartConfig
  ) {
    try {
      let newValues = chart;

      if (newTitle) newValues.title = newTitle;
      if (newSubtitle) newValues.subtitle = newSubtitle;
      if (newConfig) newValues.config = newConfig;
      if (newInactiveConfig) newValues.inactiveConfig = newInactiveConfig;

      let copyData = [...userData];
      copyData.map((boardLocal) => {
        if (boardLocal.id === boardFather.id) {
          boardFather.charts.map((chart) => {
            if (chart.id === newValues.id) {
              chart = newValues;
            }
          });
        }
        return boardLocal;
      });

      SaveChanges(copyData);
    } catch (error) {
      console.error(error);
    }
  }

  function DeleteBoard(id: number) {
    try {
      let copyData = [...userData];

      const newData = copyData.splice(id, id);

      SaveChanges(copyData);
    } catch (error) {
      console.error(error);
    }
  }

  function DeleteChart(boardFather: Board, chart: Chart) {
    try {
      let copyData = [...userData];

      const newData = copyData.map((board) => {
        let finalBoard = board;
        if (board.id === boardFather.id) {
          finalBoard.charts = board.charts.filter(
            (chartActual) => chartActual.id !== chart.id
          );
        }
        return finalBoard;
      });

      SaveChanges(newData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    LoadData();
  }, []);

  return {
    userData,
    LoadData,
    AddNewBoard,
    AddNewChart,
    UpdateBoard,
    UpdateChart,
    DeleteBoard,
    DeleteChart,
  };
}

export default useStorage;
