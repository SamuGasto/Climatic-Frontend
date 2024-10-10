"use client";
import React, { useEffect } from "react";
import ButtonAddBoard from "./add-new-board";
import BoardButton from "./board-button";
import { Image } from "@nextui-org/image";
import { Card, CardBody } from "@nextui-org/card";
import { useBoardStore } from "@/utils/Stores/boardStore";
import BoardList from "./board-list";

interface PropType {
  refresh: () => void;
  isMobile?: boolean; // Nueva prop para diferenciar cuándo el Sidebar está en mobile
}

function Sidebar({ refresh, isMobile = false }: PropType) {
  const { loadData } = useBoardStore.getState();

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div
      className={`${
        isMobile ? "block" : "hidden md:flex"
      } md:flex-col md:basis-1/12 md:px-6 md:mr-5`}
    >
      <Card className="w-full h-full bg-white dark:bg-black">
        <CardBody>
          {/* Mostrar imagen solo si no está en móvil */}
          {!isMobile && (
            <div className="flex w-full mb-8 justify-center">
              <Image
                radius="none"
                src="/logo2.png"
                alt="Climatic Logo"
                width={50}
                height={50}
              />
            </div>
          )}
          <nav>
            <BoardList refresh={refresh} />
          </nav>
          <ButtonAddBoard refresh={refresh} />
        </CardBody>
      </Card>
    </div>
  );
}

export default Sidebar;
