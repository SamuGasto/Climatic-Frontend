import React, { useState } from "react";
import { useChartStore } from "@/utils/Stores/chartStore";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { SaveIcon } from "@/components/icons";
import { useBoardStore } from "@/utils/Stores/boardStore";

export default function Titulo() {
  const { userData, id_boardSelected, updateChart } = useBoardStore.getState();
  const { chartSelected } = useChartStore.getState();
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(chartSelected.title);

  function SaveTitle() {
    updateChart(
      userData[id_boardSelected],
      chartSelected,
      undefined,
      undefined,
      title === "" ? "Sin título" : title
    );
  }

  return (
    <div className="flex text-center text-5xl font-bold items-center justify-center">
      {editMode ? (
        <div className="flex flex-row gap-1">
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
