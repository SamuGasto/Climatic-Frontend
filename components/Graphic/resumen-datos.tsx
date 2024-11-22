import BackendData from "@/types/backend-data";
import { Chart } from "@/types/chart";
import { check_first_decimal_pos } from "@/utils/check_first_decimal_pos";
import { Card, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/react";
import React from "react";

interface Props {
  chart: Chart;
  index: number;
}

function ResumenDatos(props: Props) {
  const { chart, index } = props;
  const decimals = check_first_decimal_pos(chart.stats[index].min);
  return (
    <Card className="flex-1" shadow="sm">
      <CardBody className="flex-1 flex-row flex-wrap items-center text-center gap-3">
        <section className="flex-1 flex-col">
          <h1 className="font-semibold">Mínimo:</h1>
          <p>{chart.stats[index].min.toFixed(decimals)}</p>
        </section>
        <section className="flex-1 flex-col">
          <h1 className="font-semibold">Máximo:</h1>
          <p>{chart.stats[index].max.toFixed(decimals)}</p>
        </section>
        <section className="flex-1 flex-col">
          <h1 className="font-semibold">Promedio:</h1>
          <p>{chart.stats[index].mean.toFixed(decimals)}</p>
        </section>
        <section className="flex-1 flex-col">
          <h1 className="font-semibold">Desviación estándar:</h1>
          <p>{chart.stats[index].stdDeviation.toFixed(decimals)}</p>
        </section>
        <section className="flex-1 flex-col">
          <h1 className="font-semibold">Mediana:</h1>
          <p>{chart.stats[index].median.toFixed(decimals)}</p>
        </section>
        <section className="flex-1 flex-col">
          <h1 className="font-semibold">Rango:</h1>
          <p>{chart.stats[index].range.toFixed(decimals)}</p>
        </section>
      </CardBody>
    </Card>
  );
}

export default ResumenDatos;
