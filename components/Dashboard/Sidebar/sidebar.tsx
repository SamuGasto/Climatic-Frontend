import { AddIcon, Logo } from "@/components/icons";
import { Button } from "@nextui-org/button";
import React from "react";
import ButtonAddBoard from "./add-new-board";

const boards = [{ name: "Tablero 1" }, { name: "Tablero 2" }];

function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4">
        <div className="mb-8">
          <Logo size={40} />
        </div>
        <nav>
          <ul className="space-y-2">
            {boards.map((board, index) => (
              <li key={index}>
                <Button className="w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors">
                  {board.name}
                </Button>
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
