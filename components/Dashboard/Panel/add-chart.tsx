import { AddChartIcon } from "@/components/icons";
import { useModalStore } from "@/providers/modal-store-provider";
import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import React from "react";

function ButtonAddChart() {
  const toggleModalCreateChart = useModalStore(
    (state) => state.toggleModalCreateChart
  );

  return (
    <div className="flex self-center mr-5">
      <Button
        aria-label="Añadir Gráfico"
        size="lg"
        color="primary"
        onPress={() => {
          toggleModalCreateChart(true);
        }}
        variant="solid"
      >
        <div className="flex w-full flex-row items-center gap-3 p-2">
          <AddChartIcon width={28} />
          <h1>Nuevo Gráfico</h1>
        </div>
      </Button>
    </div>
  );
}

export default ButtonAddChart;
