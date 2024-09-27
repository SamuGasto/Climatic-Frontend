import { Chart } from "@/types/chart";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import React from "react";
import ChartImage from "../chart-image";
import Search from "./layout/search";
import ButtonAddChart from "../add-chart";
import Title from "./layout/title";

interface PropType {
  boardName: string;
  charts: Chart[];
  seleccionarGrafico: (chart: Chart) => void;
}

function BoardPanel(props: PropType) {
  const { boardName, charts, seleccionarGrafico } = props;

  return (
    <div>
      <section className="flex flex-row w-full">
        <div className="flex flex-col w-full gap-2 justify-items-start">
          <Title text={boardName} />
          <Search />
        </div>
        <ButtonAddChart />
      </section>
      <div className="grid grid-flow-col gap-6 w-full h-full">
        <div className="grid grid-flow-row grid-cols-4 gap-6 w-full h-full">
          {charts.map((chart, index) => (
            <Card
              className="h-72 w-full"
              key={index}
              shadow="sm"
              isPressable
              onPress={() => seleccionarGrafico(chart)}
            >
              <CardHeader>
                <div>
                  <h1 className="text-xl font-semibold text-left">
                    {chart.title}
                  </h1>
                  <h1>{chart.subtitle}</h1>
                </div>
              </CardHeader>
              <CardBody>
                <ChartImage config={chart.inactiveConfig} />
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BoardPanel;
