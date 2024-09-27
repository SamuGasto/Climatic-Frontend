import { Chart } from "@/types/chart";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import React from "react";
import ChartImage from "../../chart-image";
import NoChartCard from "./no-chart";
import NormalCard from "./normal-card";
import { NextRouter } from "next/router";

interface PropType {
  charts: Chart[];
  seleccionarGrafico: (chart: Chart) => void;
  set_v_modalCrearChart: (bool: boolean) => void;
}

function ChartsCards(props: PropType) {
  const { charts, seleccionarGrafico, set_v_modalCrearChart } = props;

  return (
    <div className="grid grid-flow-col gap-6 w-full h-full">
      <div className="grid grid-flow-row grid-cols-4 gap-6 w-full h-full">
        {charts.map((chart, index) => (
          <NormalCard
            index={index}
            chart={chart}
            funcion={seleccionarGrafico}
          />
        ))}
        <NoChartCard funcion={set_v_modalCrearChart} />
      </div>
    </div>
  );
}

export default ChartsCards;
