import { Button } from "@nextui-org/button";
import React from "react";

interface PropType {
  set_v_modalCrearChart: (bool: boolean) => void;
}

function ButtonAddChart(props: PropType) {
  const { set_v_modalCrearChart } = props;
  return (
    <div className="flex self-center mr-5">
      <Button
        size="lg"
        color="primary"
        onPress={() => {
          set_v_modalCrearChart(true);
        }}
      >
        Add New Chart
      </Button>
    </div>
  );
}

export default ButtonAddChart;
