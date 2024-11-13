"use client";
import { PlusIcon } from "@/components/icons";
import { useModalStore } from "@/providers/modal-store-provider";
import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import React from "react";

function ButtonAddBoard() {
  const toggleModalCreateBoard = useModalStore(
    (state) => state.toggleModalCreateBoard
  );
  return (
    <div className="py-4 w-2/3">
      <Button
        color="primary"
        className="w-full text-base"
        onPress={() => {
          toggleModalCreateBoard(true);
        }}
        variant="solid"
      >
        <PlusIcon width={24} className="mr-2" />
        Nuevo tablero
      </Button>
    </div>
  );
}

export default ButtonAddBoard;
