import { Chart } from "@/types/chart";
import React from "react";
import NoChartCard from "./no-chart";
import NormalCard from "./normal-card";

interface PropType {
  charts: Chart[];
}

function ChartsCards(props: PropType) {
  const { charts } = props;
  return (
    <div className="flex w-full">
      <div className="grid grid-cols-4 gap-6 w-full">
        {charts.map((chart, index) => (
          <NormalCard key={index} index={index} chart={chart} />
        ))}
        {charts.length === 0 && <NoChartCard key={"NoCard"} />}
      </div>
    </div>
  );
}

export default ChartsCards;
