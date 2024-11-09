import { useBoardStore } from "@/utils/Stores/boardStore";
import React, { useState } from "react";
import BoardButton from "./board-button";

function BoardList() {
  const { userData } = useBoardStore.getState();

  return (
    <ul className="flex flex-col space-y-2">
      {userData.map((board, index) => (
        <li key={index}>
          <BoardButton id={index} board={board} />
        </li>
      ))}
    </ul>
  );
}

export default BoardList;
