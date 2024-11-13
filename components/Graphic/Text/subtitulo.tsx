"use client";
import { SaveIcon } from "@/components/icons";
import { useBoardStore } from "@/providers/board-store-provider";
import { useChartStore } from "@/providers/chart-store-provider";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import React, { useState } from "react";

function Subtitulo() {
  const userData = useBoardStore((state) => state.userData);
  const id_boardSelected = useBoardStore((state) => state.id_boardSelected);
  const updateChart = useBoardStore((state) => state.updateChart);
  const chartSelected = useChartStore((state) => state.chartSelected);
  const [editMode, setEditMode] = useState(false);
  const [subtitle, setSubtitle] = useState(chartSelected?.subtitle);

  function SaveSubtitle() {
    if (chartSelected)
      updateChart(
        userData[id_boardSelected],
        chartSelected,
        chartSelected.active,
        undefined,
        undefined,
        undefined,
        subtitle === "" ? "Sin título" : subtitle
      );
  }

  return (
    <div className="flex w-3/4 text-center text-wrap text-base items-center justify-center">
      {editMode ? (
        <div className="flex w-full md:min-h-48 gap-1 items-center">
          <Textarea
            value={subtitle}
            onValueChange={(value) => {
              setSubtitle(value);
              console.log(value);
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
