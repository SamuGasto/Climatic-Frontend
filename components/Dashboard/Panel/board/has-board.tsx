import { Chart } from "@/types/chart";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import React from "react";
import ChartImage from "../chart-image";
import Search from "./layout/search";
import ButtonAddChart from "../add-chart";
import Title from "./layout/title";
import ChartsCards from "./Charts-Cards/charts-card";

interface PropType {
  boardName: string;
  charts: Chart[];
  seleccionarGrafico: (chart: Chart) => void;
}

function BoardPanel(props: PropType) {
  const { boardName, charts, seleccionarGrafico } = props;

  return (
    <div className="">
      <section className="flex flex-row w-full mb-8">
        <div className="flex flex-col w-full gap-2 justify-items-start">
          <Title text={boardName} />
          <Search />
        </div>
        <ButtonAddChart />
      </section>
      <ChartsCards charts={charts} seleccionarGrafico={seleccionarGrafico} />
    </div>
  );
}

export default BoardPanel;
