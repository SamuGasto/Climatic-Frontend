"use client";
import Visualizador from "@/components/Graphic/general";
import { BarChartOffIcon } from "@/components/icons";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useChartStore } from "@/providers/chart-store-provider";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";

export default function page() {
  const chartSelected = useChartStore((state) => state.chartSelected);

  return (
    <div className="flex w-screen mt-4">
      {chartSelected ? (
        <div className="grid grid-cols lg:flex lg:flex-row h-full w-full justify-center self-start -mt-10 ">
          <Sidebar />
          <Visualizador />
        </div>
      ) : (
        <div className="flex flex-col gap-4 w-full h-full justify-between items-center p-44">
          <h1 className="flex font-semibold text-4xl">
            Todavía no se ha seleccionado ningún gráfico...
          </h1>
          <BarChartOffIcon className="flex justify-center" width={120} />
          <Link href={"/"}>
            <Button
              className="flex w-44"
              size="lg"
              variant="solid"
              color="primary"
            >
              Volver a los Tableros
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
//Sidebar modifica su ancho cuando se elige una variable con nombre largo
