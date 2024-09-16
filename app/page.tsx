import MainPanel from "@/components/Dashboard/Panel/panel";
import Sidebar from "@/components/Dashboard/Sidebar/sidebar";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-row h-full w-full text-center justify-center">
        <Sidebar />
        <MainPanel />
      </div>
    </section>
  );
}
