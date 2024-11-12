import React from "react";
import ButtonAddBoard from "./add-new-board";
import { Card, CardBody } from "@nextui-org/card";
import BoardList from "./board-list";
import { Divider } from "@nextui-org/react";
import Image from "next/image";

interface PropType {
  isMobile?: boolean; // Nueva prop para diferenciar cuándo el Sidebar está en mobile
}

function Sidebar({ isMobile = false }: PropType) {
  return (
    <div className="md:flex md:flex-col md:basis-1/12 md:px-6 md:mr-5 md:h-full md:min-h-[700]">
      <Card className="w-full h-full" shadow={isMobile ? "none" : "md"}>
        <CardBody>
          {/* Mostrar imagen solo si no está en móvil */}
          {!isMobile && (
            <div className="flex w-full mb-8 justify-center">
              <Image
                src="/logo2.png"
                alt="Climatic Logo"
                width={50}
                height={50}
              />
            </div>
          )}
          <Divider />
          <nav className="py-4">
            <BoardList />
          </nav>
          <Divider />
          <ButtonAddBoard />
        </CardBody>
      </Card>
    </div>
  );
}

export default Sidebar;
