import React, { useState } from "react";
import Tittle from "./board/layout/title";
import Search from "./board/layout/search";
import ButtonAddChart from "./add-chart";
import BoardPanel from "./board/has-board";
import { Board } from "@/types/board";
import { Chart } from "@/types/chart";
import useStorage from "@/hooks/useStorage";
import { useCounterStore } from "@/utils/counterStore";
import NoBoard from "./board/no-board";
import ModalCreateBoard from "./board/modal-create-board";
import { NextRouter } from "next/router";

interface PropType {
  boardSelected: Board;
  accionSeleccionarGrafico: (chart: Chart) => void;
  set_v_modalCrearTablero: (value: boolean) => void;
  set_v_modalCrearChart: (value: boolean) => void;
}

function MainPanel(props: PropType) {
  const {
    boardSelected,
    accionSeleccionarGrafico,
    set_v_modalCrearTablero,
    set_v_modalCrearChart,
  } = props;

  return (
    <div className="flex flex-col basis-11/12 gap-6 w-full h-full -mt-16">
      {boardSelected ? (
        <BoardPanel
          boardName={boardSelected.name}
          charts={boardSelected.charts}
          seleccionarGrafico={accionSeleccionarGrafico}
          set_v_modalCrearChart={set_v_modalCrearChart}
        />
      ) : (
        <NoBoard
          accionCrearNuevoTablero={() => {
            set_v_modalCrearTablero(true);
          }}
        />
      )}
    </div>
  );
}

export default MainPanel;
