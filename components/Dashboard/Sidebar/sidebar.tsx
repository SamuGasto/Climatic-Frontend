import { AddIcon, Logo } from "@/components/icons";
import { Button } from "@nextui-org/button";
import React from "react";
import ButtonAddBoard from "./add-new-board";
import BoardButton from "./board-button";
import { Board } from "@/types/board";
import { Image } from "@nextui-org/image";

interface PropType {
  boards: Board[];
  setBoardSelected: (id: number) => void;
}

function Sidebar(props: PropType) {
  const { boards, setBoardSelected } = props;
  return (
    <div className="w-full h-full basis-1/12 px-6">
      <div className="p-4">
        <div className="mb-8 justify-center">
          <Image src="/logo.png" alt="Di-Dema Logo" width={50} height={50} />
        </div>
        <nav>
          <ul className="space-y-2">
            {boards.map((board, index) => (
              <li key={index}>
                <BoardButton
                  id={index}
                  board={board}
                  setBoardSelected={setBoardSelected}
                />
              </li>
            ))}
          </ul>
        </nav>
        <ButtonAddBoard />
      </div>
    </div>
  );
}
export default Sidebar;
