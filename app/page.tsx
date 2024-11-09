import ModalConfirm from "@/components/Dashboard/Modals/modal-confirm";
import ModalCreateBoard from "@/components/Dashboard/Modals/modal-create-board";
import ModalCreateChart from "@/components/Dashboard/Modals/modal-create-chart";
import ModalEditBoard from "@/components/Dashboard/Modals/modal-edit-board";
import MainPanel from "@/components/Dashboard/Panel/main-panel";
import Sidebar from "@/components/Dashboard/Sidebar/sidebar";

export default function Home() {
  return (
    <section className="flex flex-col w-full h-full items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-row min-h-[720] w-full">
        <Sidebar />
        <MainPanel />
        <ModalCreateBoard />
        <ModalCreateChart />
        <ModalEditBoard />
        <ModalConfirm />
      </div>
    </section>
  );
}
