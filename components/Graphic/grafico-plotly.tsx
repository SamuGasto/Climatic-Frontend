import React from "react";
import dynamic from "next/dynamic";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });
import { PlotParams } from "react-plotly.js";
import { Data, Layout, PlotType } from "plotly.js";
import ProcessData from "./procesamiento-data/process";
import { data } from "./dataexample";

function GraficoPlotly() {
  ProcessData(data, "bar");

  const final: Data[] = [
    {
      type: "choropleth",
      locationmode: "geojson-id",
      locations: ["RN"],
      z: [1],
      text: ["MEXICO"],
    },
  ];
  const layout: Partial<Layout> = {
    geo: {
      scope: "world",
      projection: {
        type: "robinson",
      },
    },
  };
  return (
    <div className="flex w-full h-full">
      <Plot className="flex w-full h-full" data={final} layout={layout} />
    </div>
  );
}

export default GraficoPlotly;
