import { BoardStoreProvider } from "@/providers/board-store-provider";
import { ChartStoreProvider } from "@/providers/chart-store-provider";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full h-full">
      <BoardStoreProvider>
        <ChartStoreProvider>{children}</ChartStoreProvider>
      </BoardStoreProvider>
    </div>
  );
}
