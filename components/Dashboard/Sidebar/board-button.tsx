import { Button } from "@nextui-org/button";
import React from "react";

interface PropType {
  id: number;
  board: { name: string };
  setBoardSelected: (id: number) => void;
}

function BoardButton(props: PropType) {
  const { id, board, setBoardSelected } = props;
  return (
    <Button
      className="w-full text-left text-base"
      variant="light"
      color="primary"
      onClick={() => setBoardSelected(id)}
    >
      {board.name}
    </Button>
  );
}

export default BoardButton;
