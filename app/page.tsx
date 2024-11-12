import ModalConfirm from "@/components/Dashboard/Modals/modal-confirm";
import ModalCreateBoard from "@/components/Dashboard/Modals/modal-create-board";
import ModalCreateChart from "@/components/Dashboard/Modals/modal-create-chart";
import ModalEditBoard from "@/components/Dashboard/Modals/modal-edit-board";
import MainPanel from "@/components/Dashboard/Panel/main-panel";
import Sidebar from "@/components/Dashboard/Sidebar/sidebar";

export default function Home() {
  return (
    <div className="flex w-full h-full">
      <section className="flex flex-row h-full w-full items-center py-8 md:py-10 mb-6">
        <Sidebar />
        <MainPanel />
      </section>
      <section>
        <ModalCreateBoard />
        <ModalCreateChart />
        <ModalEditBoard />
        <ModalConfirm />
      </section>
    </div>
  );
}
