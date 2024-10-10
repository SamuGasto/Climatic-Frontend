"use client";
import Visualizador from "@/components/Graphic/general";
import Sidebar from "@/components/Sidebar/Sidebar";
import BackendData from "@/types/backend-data";
import { exampleData } from "@/config/test-data";
import { useChartStore } from "@/utils/Stores/chartStore";
import React, { useEffect, useState } from "react";

export default function page() {
  return (
    <div className="flex sm:flex-row w-full h-full justify-center self-center mt-6 gap-15">
      <Sidebar />
      <Visualizador data={data} typeChart="heatmap" />
    </div>
  );
}
