import Modal from "@/components/Dashboard/Modals/components";
import PanelComponents from "@/components/Dashboard/Panel/components";
import Sidebar from "@/components/Dashboard/Sidebar/sidebar";

export default function Home() {
  return (
    <section className="flex flex-col w-full h-full items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-row min-h-[720] w-full">
        <Sidebar />
        <PanelComponents.MainPanel />
        <Modal.create_board />
        <Modal.create_chart />
        <Modal.edit_board />
        <Modal.confirm />
      </div>
    </section>
  );
}
