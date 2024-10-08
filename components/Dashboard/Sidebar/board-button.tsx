import { Button } from "@nextui-org/button";
import React, { useEffect, useState } from "react";
import { useBoardStore } from "@/utils/boardStore";
import { Board } from "@/types/board";
import { DeleteOffOutline, DeleteOutline, Edit } from "@/components/icons";
import useModalStore from "@/utils/modalStore";

interface PropType {
  id: number;
  board: Board;
  refresh: () => void;
}

function BoardButton(props: PropType) {
  const { id, board, refresh } = props;
  const { id_boardSelected, selectBoard, deleteBoard } =
    useBoardStore.getState();
  const { toggleModalEditBoard } = useModalStore.getState();
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
              deleteBoard(id);
              selectBoard(id - 1);
            }
            refresh();
          }}
        >
          {id > 0 ? (
            <DeleteOutline width={28} />
          ) : (
            <DeleteOffOutline width={28} />
          )}
        </Button>
      )}

      <Button
        className="w-44 text-center"
        variant={active ? "bordered" : "light"}
        color="primary"
        onClick={() => {
          selectBoard(id);
          setActive(true);
          refresh();
        }}
      >
        <h1 className="w-full text-center text-pretty">{board.name}</h1>
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
          <Edit width={28} />
        </Button>
      )}
    </div>
  );
}

export default BoardButton;
