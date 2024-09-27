import { Chart } from "@/types/chart";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import React from "react";
import ChartImage from "../../chart-image";
import NoChartCard from "./no-chart";
import NormalCard from "./normal-card";

interface PropType {
  charts: Chart[];
  seleccionarGrafico: (chart: Chart) => void;
}

function ChartsCards(props: PropType) {
  const { charts, seleccionarGrafico } = props;

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
        <NoChartCard funcion={() => console.log("nada")} />
      </div>
    </div>
  );
}

export default ChartsCards;
