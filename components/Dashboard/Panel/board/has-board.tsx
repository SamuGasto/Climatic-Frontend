import { Chart } from "@/types/chart";
import React, { useEffect, useState } from "react";
import Search from "./layout/search";
import ButtonAddChart from "../add-chart";
import TitleCardBoard from "./layout/title";
import ChartsCards from "./Charts-Cards/charts-card";
import { useBoardStore } from "@/utils/Stores/boardStore";
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
  }, [filterQuery, id_boardSelected, userData]);

  return (
    <div className="">
      <section className="flex md:flex-row flex-col w-full mb-8 ">
        <div className="flex flex-col w-full gap-2 justify-items-start mb-8 md:mb-0">
          <TitleCardBoard />
          <Search filterQuery={filterQuery} setFilterQuery={setFilterQuery} />
        </div>
        <ButtonAddChart refresh={refresh} />
      </section>
      <ChartsCards refresh={refresh} charts={dataFiltered} />
    </div>
  );
}

export default BoardPanel;
