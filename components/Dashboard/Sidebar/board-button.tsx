import { Button } from "@nextui-org/button";
import React, { useEffect, useState } from "react";
import deleteIcon from "@/public/delete.svg";
import editIcon from "@/public/edit.svg";
import { Logo, Trash } from "@/components/icons";
import Image from "next/image";
import { Board } from "@/types/board";

interface PropType {
  id: number;
  board: { name: string };
  isActual: boolean;
  setBoardSelected: (id: number) => void;
  deleteBoard: (id: number) => void;
}

function BoardButton(props: PropType) {
  const { id, board, isActual, setBoardSelected, deleteBoard } = props;

  return (
    <div className="flex flex-row gap-1">
      {isActual && (
        <Button
          isIconOnly
          variant="light"
          color="secondary"
          onPress={() => {
            deleteBoard(id);
            if (id > 0) setBoardSelected(id - 1);
          }}
        >
          <Image alt="DeleteIcon" src={deleteIcon} width={24} height={24} />
        </Button>
      )}

      <Button
        className="w-full text-left text-base"
        variant={isActual ? "bordered" : "light"}
        color="primary"
        onClick={() => setBoardSelected(id)}
      >
        {board.name}
      </Button>
      {isActual && (
        <Button isIconOnly variant="light" color="secondary">
          <Image alt="DelteIcon" src={editIcon} width={24} height={24} />
        </Button>
      )}
    </div>
  );
}

export default BoardButton;
