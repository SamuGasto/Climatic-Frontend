"use client";
import ModalConfirm from "@/components/Dashboard/Panel/board/modal-confirm";
import ModalCreateBoard from "@/components/Dashboard/Panel/board/modal-create-board";
import ModalCreateChart from "@/components/Dashboard/Panel/board/modal-create-chart";
import ModalEditBoard from "@/components/Dashboard/Panel/board/modal-edit-board";
import MainPanel from "@/components/Dashboard/Panel/main-panel";
import Sidebar from "@/components/Dashboard/Sidebar/sidebar";
import { useBoardStore } from "@/utils/Stores/boardStore";
import { CircularProgress } from "@nextui-org/progress";
import { useEffect, useState } from "react";

export default function Home() {
  const { loadData } = useBoardStore.getState();

  const [isLoading, setIsLoading] = useState(true);
  const [forceRefresh, setForceRefresh] = useState(false);

  function Refresh() {
    setForceRefresh(!forceRefresh);
  }

  useEffect(() => {
    loadData();
    setIsLoading(false);
  }, []);

  return (
    <section className="flex flex-col w-full h-full items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-row min-h-[720] w-full">
        {isLoading ? (
          <div className="flex w-full h-full justify-center self-center">
            <CircularProgress />
          </div>
        ) : (
          <div className="flex flex-row w-full h-full">
            <Sidebar refresh={Refresh} />
            <MainPanel refresh={Refresh} />
          </div>
        )}
        <ModalCreateBoard refresh={Refresh} />
        <ModalCreateChart refresh={Refresh} />
        <ModalEditBoard refresh={Refresh} />
        <ModalConfirm refresh={Refresh} />
      </div>
    </section>
  );
}
