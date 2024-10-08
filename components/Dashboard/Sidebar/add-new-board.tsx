import { AddIcon } from "@/components/icons";
import useModalStore from "@/utils/modalStore";
import { Button } from "@nextui-org/button";
import React from "react";

interface PropType {
  refresh: () => void;
}

function ButtonAddBoard(props: PropType) {
  const { refresh } = props;
  const { toggleModalCreateBoard } = useModalStore.getState();
  return (
    <div className="mt-8">
      <Button
        color="primary"
        className="w-full text-base"
        onPress={() => {
          toggleModalCreateBoard(true);
          refresh();
        }}
      >
        <AddIcon size={16} className="mr-2" />
        Nuevo tablero
      </Button>
    </div>
  );
}

export default ButtonAddBoard;
