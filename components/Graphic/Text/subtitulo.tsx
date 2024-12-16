"use client";
import { SaveIcon } from "@/components/icons";
import { useBoardStore } from "@/providers/board-store-provider";
import { useChartStore } from "@/providers/chart-store-provider";
import { Chart } from "@/types/chart";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import React, { useState } from "react";

function Subtitulo() {
  const id_boardSelected = useBoardStore((state) => state.id_boardSelected);
  const updateChart = useBoardStore((state) => state.updateChart);
  const chartSelected = useChartStore((state) => state.chartSelected);
  const selectChart = useChartStore((state) => state.selectChart);
  const [editMode, setEditMode] = useState(false);
  const [subtitle, setSubtitle] = useState(
    chartSelected ? chartSelected.subtitle : "Sin subtitulo"
  );

  function SaveSubtitle() {
    if (chartSelected) {
      const newChart: Chart = {
        active: chartSelected.active,
        backendData: chartSelected.backendData,
        id: chartSelected.id,
        stats: chartSelected.stats,
        subtitle: subtitle === "" ? "Sin subtitulo" : subtitle,
        title: chartSelected.title,
        typeChart: chartSelected.typeChart,
      };

      updateChart(id_boardSelected, chartSelected.id, newChart);
      selectChart({
        ...chartSelected,
        subtitle: subtitle === "" ? "Sin subtitulo" : subtitle,
      });
    }
  }

  return (
    <div className="flex w-3/4 text-center text-wrap text-base items-center justify-center">
      {editMode ? (
        <div className="flex w-full md:min-h-48 gap-1 items-center">
          <Textarea
            value={subtitle}
            onValueChange={(value) => {
              setSubtitle(value);
            }}
            variant="bordered"
          />
          <Button
            isIconOnly
            onClick={() => {
              setEditMode(false);
              SaveSubtitle();
            }}
            variant="light"
          >
            <SaveIcon width={24} />
          </Button>
        </div>
      ) : (
        <p
          className="whitespace-pre hover:cursor-pointer"
          onClick={() => {
            setEditMode(true);
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default Subtitulo;
