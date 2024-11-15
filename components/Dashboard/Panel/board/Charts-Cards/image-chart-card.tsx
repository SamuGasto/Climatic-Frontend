"use client";
import { Chart } from "@/types/chart";
import { Image } from "@nextui-org/image";
import { CircularProgress } from "@nextui-org/progress";
import React, { useEffect, useState } from "react";

interface PropType {
  chart: Chart;
}

function ImageChartCard(props: PropType) {
  const { chart } = props;

  return (
    <div className="flex w-full h-full justify-center items-center">
      {!chart.backendData.image ? (
        <CircularProgress />
      ) : (
        <Image
          aria-label="Imágen del gráfico"
          src={`data:image/png;base64,${chart.backendData.image}`}
          height={156}
          width={"100%"}
        />
      )}
    </div>
  );
}

export default ImageChartCard;
