"use client";
import { data } from "@/components/Graphic/dataexample";
import Visualizador from "@/components/Graphic/general";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

export default function Page() {
  return (
    <div className="flex sm:flex-row w-full h-full justify-center self-center mt-6 gap-15">
      <Sidebar />
      <div className="w-full sm:w-3/4 h-auto overflow-auto">
        <Visualizador data={data} typeChart="heatmap" />
      </div>
    </div>
  );
}
