import { Chart } from "@/types/chart";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import React from "react";
import ChartImage from "./chart-image";

interface PropType {
  charts: Chart[];
}

function BoardPanel(props: PropType) {
  const { charts } = props;

  return (
    <div className="grid grid-flow-col gap-6 w-full h-full">
      <div className="grid grid-flow-row grid-cols-4 gap-6 w-full h-full">
        {charts.map((chart, index) => (
          <Card className="h-72 w-full" key={index} shadow="sm">
            <CardHeader>
              <div>
                <h1 className="text-xl font-semibold">{chart.tittle}</h1>
                <h1>{chart.subtittle}</h1>
              </div>
            </CardHeader>
            <CardBody>
              <ChartImage config={chart.config} />
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default BoardPanel;
