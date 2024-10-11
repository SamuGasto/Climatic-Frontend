import { Button } from "@nextui-org/button";
import React, { useEffect, useState } from "react";
import { useBoardStore } from "@/utils/Stores/boardStore";
import { Board } from "@/types/board";
import {
  DeleteOffOutlineIcon,
  DeleteOutlineIcon,
  EditIcon,
} from "@/components/icons";
import useModalStore from "@/utils/Stores/modalStore";

interface PropType {
  id: number;
  board: Board;
  refresh: () => void;
}

function BoardButton(props: PropType) {
  const { id, board, refresh } = props;
  const { id_boardSelected, selectBoard, deleteBoard } =
    useBoardStore.getState();
  const { toggleModalConfirm, toggleModalEditBoard } = useModalStore.getState();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (id === id_boardSelected) setActive(true);
    else setActive(false);
  }, [active, id_boardSelected]);

  return (
    <div className="flex flex-row gap-1 justify-center">
      {active && (
        <Button
          isIconOnly
          variant="light"
          color="danger"
          onPress={() => {
            if (id > 0) {
              toggleModalConfirm(
                true,
                "¿Estás seguro de eliminar este tablero?",
                () => {
                  deleteBoard(id);
                  refresh();
                }
              );
              refresh();
            }
          }}
        >
          {id > 0 ? (
            <DeleteOutlineIcon width={28} />
          ) : (
            <DeleteOffOutlineIcon width={28} />
          )}
        </Button>
      )}

      <Button
        className="w-44 text-center"
        variant={active ? "solid" : "light"}
        color="primary"
        onClick={() => {
          selectBoard(id);
          setActive(true);
          refresh();
        }}
      >
        <h1 className="w-full text-center text-pretty truncate">
          {board.name}
        </h1>
      </Button>

      {active && (
        <Button
          isIconOnly
          variant="light"
          color="primary"
          onPress={() => {
            toggleModalEditBoard(true);
            refresh();
          }}
        >
          <EditIcon width={28} />
        </Button>
      )}
    </div>
  );
}

export default BoardButton;
