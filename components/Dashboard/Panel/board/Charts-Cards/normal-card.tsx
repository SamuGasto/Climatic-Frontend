import { Chart } from "@/types/chart";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import React from "react";
import ChartImage from "../../chart-image";

interface PropType {
  index: number;
  chart: Chart;
}

function NormalCard(props: PropType) {
  const { index, chart } = props;

  return (
    <Card
      className="h-72 w-full"
      key={index}
      shadow="sm"
      isPressable
      onPress={() => {}}
    >
      <CardHeader>
        <div>
          <h1 className="text-xl font-semibold text-left">{chart.title}</h1>
          <h1>{chart.subtitle}</h1>
        </div>
      </CardHeader>
      <CardBody>
        <ChartImage config={chart.inactiveConfig} />
      </CardBody>
    </Card>
  );
}

export default NormalCard;
