import { SaveIcon } from "@/components/icons";
import { useBoardStore } from "@/utils/Stores/boardStore";
import { useChartStore } from "@/utils/Stores/chartStore";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import React, { useState } from "react";

function Subtitulo() {
  const { userData, id_boardSelected, updateChart } = useBoardStore.getState();
  const { chartSelected } = useChartStore.getState();
  const [editMode, setEditMode] = useState(false);
  const [subtitle, setSubtitle] = useState(chartSelected.subtitle);

  function SaveSubtitle() {
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
        <div className="flex w-full min-h-48 gap-1">
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
