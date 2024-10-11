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
    <div className="grid grid-cols-1 md:flex md:flex-row h-full w-full justify-center self-start -mt-10 ">
      <Sidebar />
      <Visualizador />
    </div>
  );
}