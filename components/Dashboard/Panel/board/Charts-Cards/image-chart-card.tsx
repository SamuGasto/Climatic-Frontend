import { Chart } from "@/types/chart";
import { useChartStore } from "@/utils/Stores/chartStore";
import { Image } from "@nextui-org/image";
import { CircularProgress } from "@nextui-org/progress";
import React, { useEffect, useState } from "react";

interface PropType {
  chart: Chart;
}

function ImageChartCard(props: PropType) {
  const { chart } = props;
  const [imageSrc, setImageSrc] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = chart.backendData;
        setImageSrc(`data:image/png;base64,${response.image}`);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  return (
    <div className="flex w-full h-full justify-center items-center">
      {loading ? <CircularProgress /> : <Image src={imageSrc} />}
    </div>
  );
}

export default ImageChartCard;
