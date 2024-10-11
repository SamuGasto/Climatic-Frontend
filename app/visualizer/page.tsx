"use client";
import Visualizador from "@/components/Graphic/general";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useChartStore } from "@/utils/Stores/chartStore";
import React, { useEffect } from "react";

export default function page() {
  const { loadChartData } = useChartStore.getState();

  useEffect(() => {
    loadChartData();
  }, []);

  return (
    <div className="flex flex-row h-full w-full justify-center self-center -mt-10">
      <Sidebar />
      <Visualizador />
    </div>
  );
}
//Sidebar modifica su ancho cuando se elige una variable con nombre largo
