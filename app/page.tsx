"use client";
import Modal from "@/components/Dashboard/Modals/components";
import PanelComponents from "@/components/Dashboard/Panel/components";
import Sidebar from "@/components/Dashboard/Sidebar/sidebar";
import { useBoardStore } from "@/utils/Stores/boardStore";
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
        <Sidebar refresh={Refresh} />
        <PanelComponents.MainPanel refresh={Refresh} />
        <Modal.create_board refresh={Refresh} />
        <Modal.create_chart refresh={Refresh} />
        <Modal.edit_board refresh={Refresh} />
        <Modal.confirm refresh={Refresh} />
      </div>
    </section>
  );
}
