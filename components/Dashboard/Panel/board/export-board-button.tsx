import { ExportIcon } from "@/components/icons";
import { useModalStore } from "@/providers/modal-store-provider";
import { Button } from "@nextui-org/button";
import React from "react";

function ButtonExportBoard() {
  const toggleModalExportBoard = useModalStore(
    (state) => state.toggleModalExportBoard
  );
  return (
    <Button
      isIconOnly
      color="warning"
      onClick={() => {
        toggleModalExportBoard(true);
      }}
    >
      <ExportIcon width={28} />
    </Button>
  );
}

export default ButtonExportBoard;
