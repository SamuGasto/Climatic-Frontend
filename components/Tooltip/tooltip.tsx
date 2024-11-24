"use client";

import { Tooltip, Button } from "@nextui-org/react";
import { useState } from "react";

interface tooltipProps {
  color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  texto: string;
  txtBoton: string;
}

export default function TooltipComponent({ color, texto, txtBoton }: tooltipProps) {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleClick = () => {
    setTooltipVisible(!isTooltipVisible);
  };

  return (
    <Tooltip
      className="text-md bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
      showArrow={true}
      content={texto}
      placement="top-start"
      closeDelay={10}
      isOpen={isTooltipVisible} // Controla la visibilidad del tooltip
      onMouseLeave={() => setTooltipVisible(false)} // Cierra el tooltip al salir del área
    >
      <Button
        color={color}
        variant="flat"
        isIconOnly
        size="sm"
        className="text-lg ml-32 absolute left-4 text-black dark:text-white px-2 py-1"
        onClick={handleClick} // Activa o desactiva el tooltip al hacer clic
      >
        {txtBoton}
      </Button>
    </Tooltip>
  );
}
