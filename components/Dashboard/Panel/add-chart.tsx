import { AddChartIcon } from "@/components/icons";
import useModalStore from "@/utils/modalStore";
import { Button } from "@nextui-org/button";
import React from "react";

interface PropType {
  refresh: () => void;
}

function ButtonAddChart(props: PropType) {
  const { refresh } = props;
  const { toggleModalCreateChart } = useModalStore.getState();
  return (
    <div className="flex self-center mr-5">
      <Button
        size="lg"
        color="primary"
        onPress={() => {
          toggleModalCreateChart(true);
          refresh();
        }}
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
