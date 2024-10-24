import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import { geo } from "./comunas_sexta_region";

function Plotly() {
  const [geojson, setGeojson] = useState(geo);

  return (
    <div>
      <Plot
        data={[
          {
            type: "scattergeo",
            geojson: geojson,
            locations: geojson.features.map((f: any) => f.properties.id), // Ajusta según los atributos del GeoJSON
            z: geojson.features.map((f: any) => f.properties.value), // Atributo para colorear
            hoverinfo: "x+y+z",
          },
        ]}
        layout={{
          title: "Shapefile as GeoJSON Map",
          geo: {
            projection: { type: "mercator" },
          },
        }}
      ></Plot>
    </div>
  );
}

export default Plotly;
