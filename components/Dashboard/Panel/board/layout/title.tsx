import { useBoardStore } from "@/providers/board-store-provider";
import React from "react";

function TitleCardBoard() {
  const userData = useBoardStore((state) => state.userData);
  const id_boardSelected = useBoardStore((state) => state.id_boardSelected);

  return (
    <h1 className="text-center md:text-left md:text-5xl text-4xl font-semibold p-3">
      {userData[id_boardSelected].name}
    </h1>
  );
}

export default TitleCardBoard;
