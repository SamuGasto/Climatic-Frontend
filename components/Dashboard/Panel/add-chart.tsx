import { AddChartIcon } from "@/components/icons";
import useModalStore from "@/utils/Stores/modalStore";
import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import React from "react";

function ButtonAddChart() {
  const { toggleModalCreateChart } = useModalStore.getState();

  return (
    <div className="flex md:self-center mr-5">
      <Button
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
