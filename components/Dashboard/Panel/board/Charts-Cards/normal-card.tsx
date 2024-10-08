"use-client";
import { Chart } from "@/types/chart";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import React from "react";
import ChartImage from "../../chart-image";
import { useChartStore } from "@/utils/Stores/chartStore";
import { useRouter } from "next/navigation";
import { DeleteOutline } from "@/components/icons";
import { Button } from "@nextui-org/button";
import { useBoardStore } from "@/utils/Stores/boardStore";
import useModalStore from "@/utils/Stores/modalStore";
import { useNavbarStore } from "@/utils/Stores/navbarStore";
import { useNavbarContext } from "@nextui-org/navbar";

interface PropType {
  refresh: () => void;
  index: number;
  chart: Chart;
}

function NormalCard(props: PropType) {
  const { refresh, index, chart } = props;
  const { userData, id_boardSelected, deleteChart } = useBoardStore.getState();
  const { toggleModalConfirm } = useModalStore.getState();
  const { selectChart } = useChartStore.getState();

  const router = useRouter();

  return (
    <Card
      className="h-72 w-full"
      key={index}
      shadow="sm"
      isPressable
      onPress={() => {
        selectChart(chart);
        router.push("/visualizer");
      }}
    >
      <CardHeader>
        <div className="flex flex-row w-full justify-between">
          <div>
            <h1 className="text-xl font-semibold text-left">{chart.title}</h1>
            <h1>{chart.subtitle}</h1>
          </div>
          <Button
            isIconOnly
            color="danger"
            variant="light"
            onPress={() => {
              toggleModalConfirm(
                true,
                "¿Estás seguro en eliminar este gráfico?",
                () => {
                  deleteChart(userData[id_boardSelected], chart);
                  refresh();
                }
              );
              refresh();
            }}
          >
            <DeleteOutline width={28} />
          </Button>
        </div>
      </CardHeader>
      <CardBody>
        <ChartImage config={chart.inactiveConfig} />
      </CardBody>
    </Card>
  );
}

export default NormalCard;
