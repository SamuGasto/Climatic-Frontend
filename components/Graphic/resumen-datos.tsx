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
  const { chart } = props;

  let decimals = check_first_decimal_pos(chart.stats[0].min);

  const Body = ({ index }: { index: number }) => {
    return (
      <div className="flex w-full flex-row flex-wrap items-center text-center gap-3">
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
      </div>
    );
  };

  return (
    <Card className="flex-1" shadow="sm">
      <CardBody className="flex-1 flex-col items-center text-center gap-3">
        <h1 className="font-semibold text-xl text-center">
          {chart.typeChart === "dispersion"
            ? chart.backendData.var.split(" v/s ")[0]
            : chart.backendData.var}
        </h1>
        <Body index={0} />

        {chart.typeChart === "dispersion" && <Divider />}
        {chart.typeChart === "dispersion" && (
          <h1 className="font-semibold text-xl text-center">
            {chart.typeChart === "dispersion"
              ? chart.backendData.var.split(" v/s ")[1]
              : chart.backendData.var}
          </h1>
        )}
        {chart.typeChart === "dispersion" && <Body index={1} />}
      </CardBody>
    </Card>
  );
}

export default ResumenDatos;
