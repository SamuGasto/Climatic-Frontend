"use-client";
import { Chart } from "@/types/chart";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import React from "react";
import ChartImage from "../../chart-image";
import { useChartStore } from "@/utils/Stores/chartStore";
import { useRouter } from "next/navigation";
import { BarChartOffIcon, DeleteOutlineIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import { useBoardStore } from "@/utils/Stores/boardStore";
import useModalStore from "@/utils/Stores/modalStore";
import { motion } from "framer-motion";
import ImageChartCard from "./image-chart-card";

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
      <Card className="h-64 w-[360]" key={index} shadow="sm">
        <CardHeader>
          <div className="flex flex-row w-full justify-between">
            <div
              className="flex w-5/6 flex-col"
              onClick={() => {
                selectChart(chart);
                router.push("/visualizer");
              }}
            >
              <h1 className="text-xl font-semibold text-left truncate">
                {chart.title}
              </h1>
              <p className="truncate ">{chart.subtitle}</p>
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
              <DeleteOutlineIcon width={28} />
            </Button>
          </div>
        </CardHeader>
        <CardBody
          className="flex w-full h-full justify-center items-center"
          onClick={() => {
            selectChart(chart);
            router.push("/visualizer");
          }}
        >
          {!chart.active ? (
            <div className="flex w-full h-full justify-center items-center">
              <BarChartOffIcon width={100} />
            </div>
          ) : (
            <div className="flex w-5/6 h-5/6 justify-center items-center">
              {chart.typeChart !== "image" ? (
                <ChartImage />
              ) : (
                <ImageChartCard chart={chart} />
              )}
            </div>
          )}
        </CardBody>
      </Card>
    </motion.div>
  );
}

export default NormalCard;
