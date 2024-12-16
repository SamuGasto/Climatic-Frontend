import { useBoardStore } from "@/providers/board-store-provider";
import React from "react";

function TitleCardBoard() {
  const userData = useBoardStore((state) => state.userData);
  const id_boardSelected = useBoardStore((state) => state.id_boardSelected);

  return (
    <h1 className="max-w-none md:max-w-[360px]  lg:max-w-[400px] xl:max-w-[800px]  text-center truncate md:text-left md:text-5xl text-4xl font-semibold p-3 ">
      {userData[id_boardSelected].name}
    </h1>
  );
}

export default TitleCardBoard;
