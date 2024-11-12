import React, { ReactNode } from "react";
import ButtonAddBoard from "./add-new-board";
import { Card, CardBody } from "@nextui-org/card";
import BoardList from "./board-list";
import { Divider } from "@nextui-org/react";
import Image from "next/image";

interface PropType {
  inNavMenu?: boolean; // Nueva prop para diferenciar cuándo el Sidebar está en mobile
}

function Sidebar({ inNavMenu = false }: PropType) {
  return (
    <div
      className={`${!inNavMenu ? "hidden md:visible" : ""} md:flex md:flex-col md:basis-1/12 md:px-6 md:mr-5 md:h-full md:min-h-[700]`}
    >
      <Card
        className="w-full h-full bg-transparent md:bg-default-50"
        shadow={inNavMenu ? "none" : "md"}
      >
        <CardBody>
          {/* Mostrar imagen solo si no está en móvil */}
          {!inNavMenu ? (
            <div className="flex w-full mt-1 mb-4 justify-center">
              <Image
                src="/logo2.png"
                alt="Climatic Logo"
                width={50}
                height={50}
              />
            </div>
          ) : (
            <h1 className="text-left text-xl pb-2">Mis Tableros</h1>
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
