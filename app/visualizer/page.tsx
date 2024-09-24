"use client";
import { data } from "@/components/Graphic/dataexample";
import Visualizador from "@/components/Graphic/general";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-row h-full w-full justify-center self-center -mt-10">
      <Sidebar />
      <Visualizador data={data} typeChart="heatmap" />
    </div>
  );
}
