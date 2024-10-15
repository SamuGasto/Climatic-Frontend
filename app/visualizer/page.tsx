"use client";
import Visualizador from "@/components/Graphic/general";
import { BarChartOffIcon } from "@/components/icons";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useChartStore } from "@/utils/Stores/chartStore";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function page() {
  const { chartSelected, loadChartData } = useChartStore.getState();
  const [hasChart, setHasChart] = useState(false);

  const router = useRouter();

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
    <div className="flex w-full">
      {hasChart ? (
        <div className="grid grid-cols-1 md:flex md:flex-row h-full w-full justify-center self-start -mt-10">
          <Sidebar />
          <Visualizador />
        </div>
      ) : (
        <div className="flex flex-col gap-4 w-full h-full justify-between items-center p-44">
          <h1 className="flex font-semibold text-4xl">
            Todavía no se ha seleccionado ningún gráfico...
          </h1>
          <BarChartOffIcon className="flex justify-center" width={120} />
          <Button
            className="flex w-44"
            size="lg"
            variant="solid"
            color="primary"
            onPress={() => {
              router.push("/");
            }}
          >
            Volver a los Tableros
          </Button>
        </div>
      )}
    </div>
  );
}
