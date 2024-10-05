import { AddIcon, Logo } from "@/components/icons";
import { Button } from "@nextui-org/button";
import React from "react";
import ButtonAddBoard from "./add-new-board";
import BoardButton from "./board-button";
import { Board } from "@/types/board";
import { Image } from "@nextui-org/image";

interface PropType {
  boards: Board[];
  boardSelected: number;
  setBoardSelected: (id: number) => void;
  set_v_modalCrearTablero: (value: boolean) => void;
  deleteBoard: (id: number) => void;
}

function Sidebar(props: PropType) {
  const {
    boards,
    boardSelected,
    setBoardSelected,
    set_v_modalCrearTablero,
    deleteBoard,
  } = props;
  return (
    <div className="flex max-w-96 h-full basis-1/12 px-6 border-r-1 mr-5">
      <div className="p-4">
        <div className="flex w-full mb-8 justify-center">
          <Image src="/logo2.png" alt="Climatic Logo" width={50} height={50} />
        </div>
        <nav>
          <ul className="flex flex-col space-y-2">
            {boards.map((board, index) => (
              <li key={index}>
                <BoardButton
                  id={index}
                  board={board}
                  setBoardSelected={setBoardSelected}
                  isActual={board.id === boardSelected - 1 ? true : false}
                  deleteBoard={deleteBoard}
                />
              </li>
            ))}
          </ul>
        </nav>
        <ButtonAddBoard action={set_v_modalCrearTablero} />
      </div>
    </div>
  );
}
export default Sidebar;
