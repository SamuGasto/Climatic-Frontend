"use client";
import { useChartStore } from "@/providers/chart-store-provider";
import { Image } from "@nextui-org/image";
import { CircularProgress } from "@nextui-org/progress";
import React, { useEffect, useState } from "react";

function GraficoImagen() {
  const chartSelected = useChartStore((state) => state.chartSelected);

  const [imageSrc, setImageSrc] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = () => {
      try {
        const response = chartSelected.backendData.image;
        setImageSrc(`data:image/png;base64,${response}`);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the image:", error);
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  return (
    <div className="flex w-full justify-center align-middle">
      {loading ? <CircularProgress /> : <Image src={imageSrc} />}
    </div>
  );
}

export default GraficoImagen;
