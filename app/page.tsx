import BoardPanel from "@/components/Dashboard/Panel/board/has-board";
import Sidebar from "@/components/Dashboard/Sidebar/sidebar";

export default function Home() {
  return (
    <main className="flex flex-row w-screen">
      <Sidebar />
      <div className="flex w-full h-full">
        <BoardPanel />
      </div>
    </main>
  );
}
