"use client";
import { data } from "@/components/Graphic/dataexample";
import Visualizador from "@/components/Graphic/general";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

export default function page() {
  return (
    <div className="grid grid-cols-1 md:flex md:flex-row h-full w-full justify-center self-start -mt-10 ">
      <Sidebar />
      <Visualizador data={data} typeChart="heatmap" />
    </div>
  );
}
