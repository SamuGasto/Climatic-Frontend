import { PlusIcon } from "@/components/icons";
import useModalStore from "@/utils/Stores/modalStore";
import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import React from "react";

interface PropType {
  refresh: () => void;
}

function ButtonAddBoard(props: PropType) {
  const { refresh } = props;
  const { toggleModalCreateBoard } = useModalStore.getState();
  const actualTheme = useTheme();
  return (
    <div className="mt-8">
      <Button
        color="primary"
        className ="w-auto text-base flex flex-row container mx-auto"
        onPress={() => {
          toggleModalCreateBoard(true);
          refresh();
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
