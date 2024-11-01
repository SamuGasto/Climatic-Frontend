"use client";
import Visualizador from "@/components/Graphic/general";
import { BarChartOffIcon } from "@/components/icons";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useChartStore } from "@/utils/Stores/chartStore";
import React, { useEffect } from "react";

export default function page() {
  const { loadChartData } = useChartStore.getState();

  useEffect(() => {
    loadChartData();
    if (chartSelected.id !== -1) {
      setHasChart(true);
    }
  }, []);

  useEffect(() => {
    if (chartSelected.id !== -1) {
      setHasChart(true);
    }
  }, [chartSelected]);

  return (
    <div className="grid grid-cols-1 md:flex md:flex-row h-full w-full justify-center self-start -mt-10 ">
      <Sidebar />
      <Visualizador />
    </div>
  );
}