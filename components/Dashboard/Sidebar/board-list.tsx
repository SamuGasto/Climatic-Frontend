"use client";
import { useBoardStore } from "@/providers/board-store-provider";
import React from "react";
import BoardButton from "./board-button";

function BoardList() {
  const userData = useBoardStore((state) => state.userData);

  return (
    <ul className="flex flex-col items-start md:items-center space-y-2">
      {userData.map((board, index) => (
        <li key={index}>
          <BoardButton id={index} board={board} />
        </li>
      ))}
    </ul>
  );
}

export default BoardList;
