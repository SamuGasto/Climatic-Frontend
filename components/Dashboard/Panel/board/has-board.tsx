import { Chart } from "@/types/chart";
import React, { useEffect, useState } from "react";
import Search from "./layout/search";
import ButtonAddChart from "../add-chart";
import TitleCardBoard from "./layout/title";
import ChartsCards from "./Charts-Cards/charts-card";
import { useBoardStore } from "@/utils/boardStore";
import { Board } from "@/types/board";

interface PropType {
  refresh: () => void;
}

function BoardPanel(props: PropType) {
  const { refresh } = props;
  const { userData, id_boardSelected } = useBoardStore.getState();
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
  }, [filterQuery]);

  return (
    <div className="">
      <section className="flex flex-row w-full mb-8">
        <div className="flex flex-col w-full gap-2 justify-items-start">
          <TitleCardBoard />
          <Search filterQuery={filterQuery} setFilterQuery={setFilterQuery} />
        </div>
        <ButtonAddChart refresh={refresh} />
      </section>
      <ChartsCards charts={dataFiltered} />
    </div>
  );
}

export default BoardPanel;
