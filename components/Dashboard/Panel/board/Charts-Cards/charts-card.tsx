"use client";
import { Chart } from "@/types/chart";
import NormalCard from "./normal-card";

interface PropType {
  charts: Chart[];
}

function ChartsCards(props: PropType) {
  const { charts } = props;

  return (
    <div className="flex flex-row flex-wrap w-full h-full items-start justify-center md:justify-start gap-4">
      {charts.map((chart, index) => (
        <NormalCard
          key={`${chart.title}-${index}`}
          index={index}
          chart={chart}
        />
      ))}
    </div>
  );
}

export default ChartsCards;
