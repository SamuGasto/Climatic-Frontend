import { AddIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import React from "react";

interface PropType {
  action: (value: boolean) => void;
}

function ButtonAddBoard(props: PropType) {
  const { action } = props;
  return (
    <div className="mt-8">
      <Button
        color="primary"
        className="w-full text-base"
        onPress={() => action(true)}
      >
        <AddIcon size={16} className="mr-2" />
        Nuevo tablero
      </Button>
    </div>
  );
}

export default ButtonAddBoard;
