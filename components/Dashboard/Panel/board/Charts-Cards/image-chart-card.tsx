import { Image } from "@nextui-org/image";
import React, { useEffect, useState } from "react";

function ImageChartCard() {
  const [imageSrc, setImageSrc] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = { image: "" };
        setImageSrc(`data:image/png;base64,${response.image}`);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  return <Image src={imageSrc} />;
}

export default ImageChartCard;
