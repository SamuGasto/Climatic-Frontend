import { ImportIcon } from "@/components/icons";
import { useBoardStore } from "@/providers/board-store-provider";
import { useModalStore } from "@/providers/modal-store-provider";
import { Button } from "@nextui-org/button";
import React from "react";

function ButtonImportBoard() {
  const toggleModalImportBoard = useModalStore(
    (state) => state.toggleModalImportBoard
  );

  return (
    <Button
      isIconOnly
      color="success"
      onClick={() => {
        toggleModalImportBoard(true);
      }}
    >
      <ImportIcon width={28} />
    </Button>
  );
}

export default ButtonImportBoard;
