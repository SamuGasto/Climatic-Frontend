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
        className="w-full text-base"
        onPress={() => {
          toggleModalCreateBoard(true);
          refresh();
        }}
        variant={actualTheme.theme === "light" ? "bordered" : "solid"}
      >
        <PlusIcon width={24} className="mr-2" />
        Nuevo tablero
      </Button>
    </div>
  );
}

export default ButtonAddBoard;
