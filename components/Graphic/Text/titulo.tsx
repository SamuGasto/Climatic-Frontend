"use client";
import React, { useState } from "react";
import { useChartStore } from "@/providers/chart-store-provider";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { SaveIcon } from "@/components/icons";
import { useBoardStore } from "@/providers/board-store-provider";
import { Chart } from "@/types/chart";

export default function Titulo() {
  const id_boardSelected = useBoardStore((state) => state.id_boardSelected);
  const updateChart = useBoardStore((state) => state.updateChart);
  const chartSelected = useChartStore((state) => state.chartSelected);
  const selectChart = useChartStore((state) => state.selectChart);
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(
    chartSelected ? chartSelected.title : "Sin título"
  );

  function SaveTitle() {
    if (chartSelected) {
      const newChart: Chart = {
        id: chartSelected.id,
        title: title === "" ? "Sin título" : title,
        subtitle: chartSelected.subtitle,
        active: chartSelected.active,
        backendData: chartSelected.backendData,
        typeChart: chartSelected.typeChart,
        stats: chartSelected.stats,
      };
      updateChart(id_boardSelected, chartSelected.id, newChart);
      selectChart({
        ...chartSelected,
        title: title === "" ? "Sin título" : title,
      });
    }
  }

  return (
    <div className="flex text-center md:text-5xl text-3xl font-bold items-center justify-center">
      {editMode ? (
        <div className="flex flex-row gap-1">
          <Input
            className="w-full"
            value={title}
            onValueChange={(value) => {
              setTitle(value);
            }}
            variant="bordered"
          ></Input>
          <Button
            className="flex"
            isIconOnly
            onClick={() => {
              setEditMode(false);
              SaveTitle();
            }}
            variant="light"
          >
            <SaveIcon width={24} />
          </Button>
        </div>
      ) : (
        <h1
          className="hover:cursor-pointer"
          onClick={() => {
            setEditMode(true);
          }}
        >
          {title}
        </h1>
      )}
    </div>
  );
}
