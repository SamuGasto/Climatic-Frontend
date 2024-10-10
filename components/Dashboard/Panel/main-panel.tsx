import React, { useEffect, useState } from "react";
import BoardPanel from "./board/has-board";
import { Board } from "@/types/board";
import { Chart } from "@/types/chart";
import { CircularProgress } from "@nextui-org/progress";
import { useBoardStore } from "@/utils/Stores/boardStore";

interface PropType {
  refresh: () => void;
}

function MainPanel(props: PropType) {
  const { refresh } = props;

  const { userData, id_boardSelected } = useBoardStore.getState();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (userData[id_boardSelected]) setIsLoading(false);
  }, [id_boardSelected]);

  return (
    <div className="flex sm:flex-row flex-col basis-11/12 gap-6 w-full h-full -mt-16">
      {isLoading ? (
        <CircularProgress className="flex w-full h-full justify-center self-center" />
      ) : (
        <BoardPanel refresh={refresh} />
      )}
    </div>
  );
}

export default MainPanel;
