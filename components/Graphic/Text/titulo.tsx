"use client";
import React, { useState } from "react";
import { useChartStore } from "@/providers/chart-store-provider";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { SaveIcon } from "@/components/icons";
import { useBoardStore } from "@/providers/board-store-provider";

export default function Titulo() {
  const userData = useBoardStore((state) => state.userData);
  const id_boardSelected = useBoardStore((state) => state.id_boardSelected);
  const updateChart = useBoardStore((state) => state.updateChart);
  const chartSelected = useChartStore((state) => state.chartSelected);
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(chartSelected?.title);

  function SaveTitle() {
    if (chartSelected)
      updateChart(
        userData[id_boardSelected],
        chartSelected,
        chartSelected.active,
        undefined,
        undefined,
        title === "" ? "Sin título" : title
      );
  }

  return (
    <div className="flex text-center md:text-5xl text-3xl font-bold items-center justify-center">
      {editMode ? (
        <div className="flex md:flex-row flex-col gap-1">
          <Input
            className="w-auto"
            value={title}
            onValueChange={(value) => {
              setTitle(value);
            }}
            variant="bordered"
          ></Input>
          <Button
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
