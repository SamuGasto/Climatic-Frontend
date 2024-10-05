import { Chart } from "@/types/chart";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import React from "react";
import ChartImage from "../../chart-image";
import Image from "next/image";
import addChartIcon from "@/public/add-chart.svg";

interface PropType {
  funcion: (bool: boolean) => void;
}

function NoChartCard(props: PropType) {
  const { funcion } = props;
  return (
    <Card
      className="h-72 w-full"
      key={"NoChart"}
      shadow="sm"
      isPressable
      onPress={() => {
        funcion(true);
      }}
    >
      <CardBody className="flex w-full justify-center items-center">
        <Image alt="DeleteIcon" src={addChartIcon} width={180} height={180} />
      </CardBody>
    </Card>
  );
}

export default NoChartCard;
