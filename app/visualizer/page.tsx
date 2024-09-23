"use client";
import { data } from "@/components/Graphic/dataexample";
import Visualizador from "@/components/Graphic/general";
import React from "react";

export default function page() {
  return (
    <div className="flex h-full w-full justify-center self-center">
      <Visualizador data={data} typeChart="heatmap" />
    </div>
  );
}
