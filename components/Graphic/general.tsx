import React from "react";
import Titulo from "./titulo";
import Imagen from "./imagen";
import Controles from "./controles";
import { data } from "./dataexample";

export default function Visualizador() {
  return (
    <div className="flex w-full flex-col gap-10 p-6">
      <Titulo tittle="Título de ejemplo" subtittle="Subtítulo de ejemplo" />
      <Imagen seriesData={data} typeChart="heatmap" />
      <Controles />
    </div>
  );
}
