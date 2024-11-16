import BackendData from "@/types/backend-data";
import { Chart } from "@/types/chart";
import { Card, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/react";
import React from "react";

interface Props {
  chart: Chart;
}

function ResumenDatos(props: Props) {
  const { chart } = props;
  const decimals = 8;
  return (
    <Card className="flex-1" shadow="sm">
      <CardBody className="flex-1 flex-row flex-wrap items-center text-center gap-3">
        <section className="flex-1 flex-col">
          <h1 className="font-semibold">Mínino:</h1>
          <p>{chart.stats.min.toFixed(decimals)}</p>
        </section>
        <section className="flex-1 flex-col">
          <h1 className="font-semibold">Máximo:</h1>
          <p>{chart.stats.max.toFixed(decimals)}</p>
        </section>
        <section className="flex-1 flex-col">
          <h1 className="font-semibold">Promedio:</h1>
          <p>{chart.stats.mean.toFixed(decimals)}</p>
        </section>
        <section className="flex-1 flex-col">
          <h1 className="font-semibold">Desviación estándar:</h1>
          <p>{chart.stats.stdDeviation.toFixed(decimals)}</p>
        </section>
        <section className="flex-1 flex-col">
          <h1 className="font-semibold">Mediana:</h1>
          <p>{chart.stats.median.toFixed(decimals)}</p>
        </section>
        <section className="flex-1 flex-col">
          <h1 className="font-semibold">Rango:</h1>
          <p>{chart.stats.range.toFixed(decimals)}</p>
        </section>
      </CardBody>
    </Card>
  );
}

export default ResumenDatos;
