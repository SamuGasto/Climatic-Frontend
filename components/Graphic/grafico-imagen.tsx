import { useChartStore } from "@/utils/Stores/chartStore";
import { Image } from "@nextui-org/image";
import { CircularProgress } from "@nextui-org/progress";
import React, { useEffect, useState } from "react";

function GraficoImagen() {
  const { chartSelected } = useChartStore.getState();

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
