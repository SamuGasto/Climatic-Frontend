import VentanaGrafico from "@/components/Graphic/ventana-grafico";
import { ChartConfig } from "@/types/chart";
import { Image } from "@nextui-org/image";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface PropType {
  config: ChartConfig;
}

function ChartImage(props: PropType) {
  const { config } = props;

  return (
    <div className="flex w-full h-full">
      <VentanaGrafico
        className="flex w-full h-full p-2"
        options={config.options}
        series={config.series}
        type={config.options.chart?.type}
        width={config.options.chart?.width}
        height={config.options.chart?.height}
      />
    </div>
  );
}

export default ChartImage;
