import { Card, CardBody } from "@nextui-org/card";
import React from "react";
import Image from "next/image";
import addChartIcon from "@/public/add-chart.svg";
import useModalStore from "@/utils/Stores/modalStore";

interface PropType {
  refresh: () => void;
}

function NoChartCard(props: PropType) {
  const { refresh } = props;
  const { toggleModalCreateChart } = useModalStore.getState();
  return (
    <Card
      className="h-72 w-full"
      key={"NoChart"}
      shadow="sm"
      isPressable
      onPress={() => {
        toggleModalCreateChart(true);
        refresh();
      }}
    >
      <CardBody className="flex w-full justify-center items-center">
        <Image alt="addChartIcon" src={addChartIcon} width={180} height={180} />
      </CardBody>
    </Card>
  );
}

export default NoChartCard;
