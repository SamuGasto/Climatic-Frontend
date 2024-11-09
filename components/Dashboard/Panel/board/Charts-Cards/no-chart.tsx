import { Card, CardBody } from "@nextui-org/card";
import React from "react";
import Image from "next/image";
import addChartIcon from "@/public/add-chart.svg";
import { useModalStore } from "@/providers/modal-store-provider";

function NoChartCard() {
  const toggleModalCreateChart = useModalStore(
    (state) => state.toggleModalCreateChart
  );
  return (
    <Card
      className="h-72 w-96"
      key={"NoChart"}
      shadow="sm"
      isPressable
      onPress={() => {
        toggleModalCreateChart(true);
      }}
    >
      <CardBody className="flex w-full justify-center items-center">
        <Image alt="addChartIcon" src={addChartIcon} width={180} height={180} />
      </CardBody>
    </Card>
  );
}

export default NoChartCard;
