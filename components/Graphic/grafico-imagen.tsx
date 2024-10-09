import { useChartStore } from "@/utils/Stores/chartStore";
import { Image } from "@nextui-org/image";
import React from "react";

function GraficoImagen() {
  const { chartSelected } = useChartStore.getState();
  return <Image src={chartSelected?.image} />;
}

export default GraficoImagen;
