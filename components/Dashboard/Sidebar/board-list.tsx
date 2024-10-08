import { useBoardStore } from "@/utils/boardStore";
import React, { useState } from "react";
import BoardButton from "./board-button";

interface PropType {
  refresh: () => void;
}

function BoardList(props: PropType) {
  const { refresh } = props;
  const { userData } = useBoardStore.getState();

  return (
    <ul className="flex flex-col space-y-2">
      {userData.map((board, index) => (
        <li key={index}>
          <BoardButton id={index} board={board} refresh={refresh} />
        </li>
      ))}
    </ul>
  );
}

export default BoardList;
