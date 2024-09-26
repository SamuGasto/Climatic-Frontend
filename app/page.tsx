"use client";
import MainPanel from "@/components/Dashboard/Panel/panel";
import Sidebar from "@/components/Dashboard/Sidebar/sidebar";
import { boards } from "@/config/test-data";
import { Board } from "@/types/board";
import { Chart } from "@/types/chart";
import { useState } from "react";

export default function Home() {
  const [boardSelected, setBoardSelected] = useState(0);
  const [graficoSeleccionado, setGraficoSeleccionado] = useState<Chart>();
  return (
    <section className="flex flex-col w-full h-full items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-row h-full w-full">
        <Sidebar boards={boards} setBoardSelected={setBoardSelected} />
        <MainPanel
          boardSelected={boards[boardSelected]}
          accionSeleccionarGrafico={setGraficoSeleccionado}
        />
      </div>
    </section>
  );
}
