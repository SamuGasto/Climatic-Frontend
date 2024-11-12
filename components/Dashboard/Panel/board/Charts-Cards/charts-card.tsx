"use client";
import { Chart } from "@/types/chart";
import React, { useEffect, useState } from "react";
import NoChartCard from "./no-chart";
import NormalCard from "./normal-card";
import { motion, Variants } from "framer-motion";
import { Pagination } from "@nextui-org/react";

interface PropType {
  charts: Chart[];
}

function ChartsCards(props: PropType) {
  const { charts } = props;
  const [segmentChart, setSegmentChart] = useState(0);

  return (
    <div className="flex min-h-[580] md:h-full w-full flex-col gap-5 justify-between">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
        {charts
          .slice(segmentChart * 8, segmentChart * 8 + 8)
          .map((chart, index) => (
            <div key={index}>
              <NormalCard index={index} chart={chart} />
            </div>
          ))}
        {charts.length === 0 && (
          <div>
            <NoChartCard key={"NoCard"} />
          </div>
        )}
      </div>
      {Math.ceil(charts.length / 8) > 1 && (
        <Pagination
          className="flex w-full justify-center align-bottom"
          isCompact
          showControls
          total={Math.ceil(charts.length / 8)}
          initialPage={1}
          onChange={(page) => setSegmentChart(page - 1)}
        />
      )}
    </div>
  );
}

export default ChartsCards;
