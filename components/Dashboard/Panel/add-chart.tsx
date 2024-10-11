import { AddChartIcon } from "@/components/icons";
import useModalStore from "@/utils/Stores/modalStore";
import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import React from "react";

interface PropType {
  refresh: () => void;
}

function ButtonAddChart(props: PropType) {
  const { refresh } = props;
  const { toggleModalCreateChart } = useModalStore.getState();

  const actualTheme = useTheme();
  return (
    <div className="flex md:self-center self-start mr-5">
      <Button
        size="lg"
        color="primary"
        onPress={() => {
          toggleModalCreateChart(true);
          refresh();
        }}
        variant={actualTheme.theme === "light" ? "bordered" : "solid"}
      >
        <div className="flex flex-row items-center gap-3 p-2">
          <AddChartIcon width={28} />
          <h1>Nuevo Gráfico</h1>
        </div>
      </Button>
    </div>
  );
}

export default ButtonAddChart;
