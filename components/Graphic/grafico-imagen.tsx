"use client";
import { useChartStore } from "@/providers/chart-store-provider";
import { Image } from "@nextui-org/image";
import { CircularProgress } from "@nextui-org/progress";
import React, { useEffect, useState } from "react";

function GraficoImagen() {
  const chartSelected = useChartStore((state) => state.chartSelected);

  return (
    <div className="flex w-full justify-center align-middle">
      {!chartSelected ? (
        <CircularProgress />
      ) : (
        <Image
          aria-label="Imágen del gráfico"
          src={`data:image/png;base64,${chartSelected.backendData.image}`}
        />
      )}
    </div>
  );
}

export default GraficoImagen;
