"use client";
import { Chart } from "@/types/chart";
import React, { useEffect, useState } from "react";
import Search from "./layout/search";
import ButtonAddChart from "../add-chart";
import TitleCardBoard from "./layout/title";
import ChartsCards from "./Charts-Cards/charts-card";
import { useBoardStore } from "@/providers/board-store-provider";
import { Divider } from "@nextui-org/react";

function BoardPanel() {
  const userData = useBoardStore((state) => state.userData);
  const id_boardSelected = useBoardStore((state) => state.id_boardSelected);
  const [filterQuery, setFilterQuery] = useState("");
  const [dataFiltered, setDataFiltered] = useState<Chart[]>(
    userData[id_boardSelected].charts
  );

  useEffect(() => {
    if (filterQuery === "") setDataFiltered(userData[id_boardSelected].charts);
    else
      setDataFiltered(
        userData[id_boardSelected].charts.filter(
          (chart) =>
            chart.title
              .toLowerCase()
              .trim()
              .includes(filterQuery.toLowerCase().trim()) ||
            chart.subtitle
              .toLowerCase()
              .trim()
              .includes(filterQuery.toLowerCase().trim())
        )
      );
  }, [filterQuery, id_boardSelected, userData]);

  return (
    <div className=" flex flex-col w-full h-full gap-4">
      <section className="flex md:flex-row flex-col w-full">
        <div className="flex flex-col w-full gap-2 justify-items-start">
          <TitleCardBoard />
          <Search filterQuery={filterQuery} setFilterQuery={setFilterQuery} />
        </div>
        <ButtonAddChart />
      </section>
      <Divider />
      <ChartsCards charts={dataFiltered} />
    </div>
  );
}

export default BoardPanel;
