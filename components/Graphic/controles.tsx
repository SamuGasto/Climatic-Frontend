import React from "react";
import BotonDescargar from "./botones/descargar";
import BotonGirar from "./botones/girar";
import BotonEliminar from "./botones/eliminar";
import { Card, CardBody } from "@nextui-org/card";

export default function Controles() {
  return (
    <div className="flex justify-center">
      <Card shadow="sm">
        <CardBody className="flex flex-row gap-8">
          <BotonDescargar />
          <BotonGirar />
          <BotonGirar />
          <BotonEliminar />
        </CardBody>
      </Card>
    </div>
  );
}
