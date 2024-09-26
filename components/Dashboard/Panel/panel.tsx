import React from "react";
import Tittle from "./tittle";
import Search from "./search";
import ButtonAddChart from "./add-chart";
import BoardPanel from "./board";
import { Board } from "@/types/board";
import { Chart } from "@/types/chart";

interface PropType {
  boardSelected: Board;
  accionSeleccionarGrafico: (chart: Chart) => void;
}

function MainPanel(props: PropType) {
  const { boardSelected, accionSeleccionarGrafico } = props;
  return (
    <div className="flex flex-col basis-11/12 gap-6 w-full h-full -mt-16">
      <section className="flex flex-row w-full">
        <div className="flex flex-col w-full gap-2 justify-items-start">
          <Tittle text={boardSelected.name} />
          <Search />
        </div>
        <ButtonAddChart />
      </section>
      <BoardPanel
        charts={boardSelected.charts}
        seleccionarGrafico={accionSeleccionarGrafico}
      />
    </div>
  );
}

export default MainPanel;
