"use-client";
import { Chart } from "@/types/chart";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import React, { useEffect, useState } from "react";
import ChartImage from "../../chart-image";
import { useChartStore } from "@/providers/chart-store-provider";
import { BarChartOffIcon, DeleteOutlineIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import { useBoardStore } from "@/providers/board-store-provider";
import { useModalStore } from "@/providers/modal-store-provider";
import { motion } from "framer-motion";
import ImageChartCard from "./image-chart-card";
import Link from "next/link";
import { Divider } from "@nextui-org/react";

interface PropType {
  index: number;
  chart: Chart;
}

function NormalCard(props: PropType) {
  const { index, chart } = props;
  const id_boardSelected = useBoardStore((state) => state.id_boardSelected);
  const deleteChart = useBoardStore((state) => state.deleteChart);
  const toggleModalConfirm = useModalStore((state) => state.toggleModalConfirm);
  const selectChart = useChartStore((state) => state.selectChart);
  const chartSelected = useChartStore((state) => state.chartSelected);

  return (
    <motion.div whileHover={{ scale: 1.02 }}>
      <Card className="h-64 w-80 shrink-0 grow-0" key={index} shadow="sm">
        <CardHeader>
          <div className="flex flex-row w-full justify-between">
            <div className="flex w-5/6 flex-col">
              <h1 className="text-xl font-semibold text-left truncate">
                {chart.title}
              </h1>
              <p className="truncate ">{chart.subtitle}</p>
            </div>
            <Button
              aria-label="Eliminar gráfico"
              isIconOnly
              color="danger"
              variant="light"
              onClick={(e) => {
                e.stopPropagation();
                toggleModalConfirm(
                  true,
                  "¿Estás seguro en eliminar este gráfico?",
                  () => {
                    if (chart.id === chartSelected?.id) {
                      selectChart(null);
                    }
                    deleteChart(id_boardSelected, chart.id);
                  }
                );
              }}
            >
              <DeleteOutlineIcon width={28} />
            </Button>
          </div>
        </CardHeader>
        <Divider />
        <Link href={"/visualizer"}>
          <CardBody
            className="flex-1 items-center"
            onClick={() => {
              selectChart(chart);
              console.log(chart);
            }}
          >
            {!chart.active ? (
              <div className="flex-1 justify-center items-center">
                <BarChartOffIcon aria-label="No posee gráfico" width={100} />
              </div>
            ) : (
              <div className="flex w-5/6 h-5/6 justify-center items-center">
                {chart.typeChart == "contorno" ||
                chart.typeChart == "vectoriales" ||
                chart.typeChart == "isobaras" ||
                chart.typeChart == "dispersion" ? (
                  <ImageChartCard chart={chart} />
                ) : (
                  <ChartImage />
                )}
              </div>
            )}
          </CardBody>
        </Link>
      </Card>
    </motion.div>
  );
}

export default NormalCard;
