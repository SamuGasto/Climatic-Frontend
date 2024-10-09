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
import { motion } from "framer-motion";

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
    <motion.div
      className="hover:cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.9 }}
    >
      <Card className="h-72 w-full" key={index} shadow="sm">
        <CardHeader>
          <div className="flex flex-row w-full justify-between">
            <div
              className="flex grow flex-col"
              onClick={() => {
                selectChart(chart);
                router.push("/visualizer");
              }}
            >
              <h1 className="text-xl font-semibold text-left">{chart.title}</h1>
              <h1>{chart.subtitle}</h1>
            </div>
            <Button
              isIconOnly
              color="danger"
              variant="light"
              onClick={(e) => {
                e.stopPropagation();
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
        <CardBody
          onClick={() => {
            selectChart(chart);
            router.push("/visualizer");
          }}
        >
          <ChartImage config={chart.inactiveConfig} />
        </CardBody>
      </Card>
    </motion.div>
  );
}

export default NormalCard;
