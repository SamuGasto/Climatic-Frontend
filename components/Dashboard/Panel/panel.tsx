import React from "react";
import Tittle from "./tittle";
import Search from "./search";
import ButtonAddChart from "./add-chart";
import Board from "./board";

function MainPanel() {
  return (
    <div className="flex flex-col w-full h-full">
      <section className="flex flex-row w-full">
        <div className="flex flex-col w-full">
          <Tittle />
          <Search />
        </div>
        <ButtonAddChart />
      </section>
      <Board />
    </div>
  );
}

export default MainPanel;
