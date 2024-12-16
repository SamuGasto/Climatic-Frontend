import { Button } from "@nextui-org/button";
import React, { useEffect, useState } from "react";

import { Board } from "@/types/board";
import {
  DeleteOffOutlineIcon,
  DeleteOutlineIcon,
  EditIcon,
} from "@/components/icons";
import { useModalStore } from "@/providers/modal-store-provider";
import { useBoardStore } from "@/providers/board-store-provider";

interface PropType {
  id: number;
  board: Board;
}

function BoardButton(props: PropType) {
  const { id, board } = props;
  const boardLenght = useBoardStore((state)=> state.userData).length
  const id_boardSelected = useBoardStore((state) => state.id_boardSelected);
  const selectBoard = useBoardStore((state) => state.selectBoard);
  const deleteBoard = useBoardStore((state) => state.deleteBoard);
  const toggleModalConfirm = useModalStore((state) => state.toggleModalConfirm);
  const toggleModalEditBoard = useModalStore(
    (state) => state.toggleModalEditBoard
  );
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (id === id_boardSelected) setActive(true);
    else setActive(false);
  }, [active, id_boardSelected]);

  return (
    <div className="flex flex-row gap-1 justify-center">
      {active && (
        <Button
          aria-label="Eliminar tablero"
          isIconOnly
          variant="light"
          color="danger"
          onPress={() => {
            if (boardLenght > 1) {
              toggleModalConfirm(
                true,
                "¿Estás seguro de eliminar este tablero?",
                () => {
                  deleteBoard(id);
                }
              );
            }
          }}
        >
          {boardLenght > 1 ? (
            <DeleteOutlineIcon width={28} />
          ) : (
            <DeleteOffOutlineIcon width={28} />
          )}
        </Button>
      )}

      <Button
        aria-label={`Tablero ${board.name}`}
        className="w-44 text-center"
        variant={active ? "solid" : "light"}
        color="primary"
        onClick={() => {
          selectBoard(id);
          setActive(true);
        }}
      >
        <h1 className="w-full text-center text-pretty truncate">
          {board.name}
        </h1>
      </Button>

      {active && (
        <Button
          aria-label="Editar tablero"
          isIconOnly
          variant="light"
          color="primary"
          onPress={() => {
            toggleModalEditBoard(true);
          }}
        >
          <EditIcon width={28} />
        </Button>
      )}
    </div>
  );
}

export default BoardButton;
