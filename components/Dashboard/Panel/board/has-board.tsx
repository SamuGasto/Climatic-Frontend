"use client";
import { Chart } from "@/types/chart";
import React, { Suspense, useEffect, useState } from "react";
import Search from "./layout/search";
import ButtonAddChart from "../add-chart";
import TitleCardBoard from "./layout/title";
import ChartsCards from "./Charts-Cards/charts-card";
import { useBoardStore } from "@/providers/board-store-provider";
import { Divider, Pagination } from "@nextui-org/react";
import NoChartCard from "./Charts-Cards/no-chart";

function BoardPanel() {
  const userData = useBoardStore((state) => state.userData);
  const id_boardSelected = useBoardStore((state) => state.id_boardSelected);
  const [filterQuery, setFilterQuery] = useState("");
  const [dataFiltered, setDataFiltered] = useState<Chart[]>(
    userData[id_boardSelected].charts
  );
  const [segmentsOfCharts, setSegmentOfCharts] = useState(0);

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

  useEffect(() => {
    if (
      dataFiltered.slice(segmentsOfCharts * 8, segmentsOfCharts * 8 + 8)
        .length === 0 &&
      segmentsOfCharts - 1 >= 0
    ) {
      setSegmentOfCharts(segmentsOfCharts - 1);
    }
  }, [dataFiltered]);

  return (
    <div className=" flex flex-col w-full h-full items-center gap-4">
      <section className="flex flex-col w-full gap-4 md:flex-row md:gap-0">
        <div className="flex flex-col w-full gap-2 items-center md:items-start">
          <Suspense>
            <TitleCardBoard />
          </Suspense>
          <Search filterQuery={filterQuery} setFilterQuery={setFilterQuery} />
        </div>
        <ButtonAddChart />
      </section>
      <Divider />
      {/* Tarjetas */}
      <div className="flex w-full h-full min-h-[530] justify-center md:justify-start">
        {userData[id_boardSelected].charts.length > 0 ? (
          <ChartsCards
            charts={dataFiltered.slice(
              segmentsOfCharts * 8,
              segmentsOfCharts * 8 + 8
            )}
          />
        ) : (
          <NoChartCard key={"NoCard"} />
        )}
      </div>
      {/* Paginación */}
      {dataFiltered.length > 8 && (
        <Pagination
          className="flex justify-center content-end items-end align-bottom"
          isCompact
          showControls
          total={Math.ceil(dataFiltered.length / 8)}
          initialPage={1}
          onChange={(page) => setSegmentOfCharts(page - 1)}
        />
      )}
    </div>
  );
}

export default BoardPanel;
