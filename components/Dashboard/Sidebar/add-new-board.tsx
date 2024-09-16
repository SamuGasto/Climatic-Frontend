import { AddIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import React from "react";

function ButtonAddBoard() {
  return (
    <div className="mt-8">
      <Button color="primary" className="w-full">
        <AddIcon size={16} className="mr-2" />
        Nuevo tablero
      </Button>
    </div>
  );
}

export default ButtonAddBoard;
