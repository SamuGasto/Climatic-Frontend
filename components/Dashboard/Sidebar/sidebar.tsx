import React, { useEffect, useState } from "react";
import ButtonAddBoard from "./add-new-board";
import BoardButton from "./board-button";
import { Board } from "@/types/board";
import { Image } from "@nextui-org/image";
import { Card, CardBody } from "@nextui-org/card";
import { useBoardStore } from "@/utils/boardStore";
import BoardList from "./board-list";

interface PropType {
  refresh: () => void;
}

function Sidebar(props: PropType) {
  const { refresh } = props;

  return (
    <div className="flex max-w-80 h-full basis-1/12 px-6 mr-5">
      <Card shadow="md">
        <CardBody>
          <div className="p-4">
            <div className="flex w-full mb-8 justify-center">
              <Image
                src="/logo.png"
                alt="Di-Dema Logo"
                width={50}
                height={50}
              />
            </div>
            <nav>
              <BoardList refresh={refresh} />
            </nav>
            <ButtonAddBoard refresh={refresh} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
export default Sidebar;
