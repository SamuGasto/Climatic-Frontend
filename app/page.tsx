"use client";
import ModalCreateBoard from "@/components/Dashboard/Panel/board/modal-create-board";
import ModalCreateChart from "@/components/Dashboard/Panel/board/modal-create-chart";
import MainPanel from "@/components/Dashboard/Panel/main-panel";
import Sidebar from "@/components/Dashboard/Sidebar/sidebar";
import useStorage from "@/hooks/useStorage";
import { Chart } from "@/types/chart";
import { useState } from "react";

export default function Home() {
  const { userData, AddNewBoard, DeleteBoard, AddNewChart } = useStorage();
  const [boardSelected, setBoardSelected] = useState(0);
  const [graficoSeleccionado, setGraficoSeleccionado] = useState<Chart>();
  const [visibleModalCreateBoard, setVisibleModalCreateBoard] = useState(false);
  const [visibleModalCreateChart, setVisibleModalCreateChart] = useState(false);

  return (
    <section className="flex flex-col w-full h-full items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-row h-full w-full">
        {/* Sidebar solo visible en pantallas medianas o más grandes */}
        <Sidebar
          boards={userData}
          boardSelected={boardSelected}
          setBoardSelected={setBoardSelected}
          set_v_modalCrearTablero={setVisibleModalCreateBoard}
          deleteBoard={DeleteBoard}
        />
        <MainPanel
          boardSelected={userData[boardSelected]}
          accionSeleccionarGrafico={setGraficoSeleccionado}
          set_v_modalCrearTablero={setVisibleModalCreateBoard}
          set_v_modalCrearChart={setVisibleModalCreateChart}
        />
        <ModalCreateBoard
          open={visibleModalCreateBoard}
          handleOpen={(bool) => setVisibleModalCreateBoard(bool)}
          actionFunction={(newName: string) => {
            AddNewBoard(newName);
            setBoardSelected(userData.length);
          }}
        />
        <ModalCreateChart
          open={visibleModalCreateChart}
          boardFather={userData[boardSelected]}
          handleOpen={(bool) => setVisibleModalCreateChart(bool)}
          createChart={AddNewChart}
        />
      </div>
    </section>
  );
}
