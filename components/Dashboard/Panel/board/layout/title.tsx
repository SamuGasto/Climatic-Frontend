import { useBoardStore } from "@/utils/Stores/boardStore";
import React from "react";

function TitleCardBoard() {
  const { userData, id_boardSelected } = useBoardStore.getState();

  return (
    <h1 className="text-5xl font-semibold p-3">
      {userData[id_boardSelected].name}
    </h1>
  );
}

export default TitleCardBoard;
