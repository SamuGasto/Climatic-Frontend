import { Chart } from "@/types/chart";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React from "react";

interface Props {
  chart: Chart;
}

function TablaAlturaInfoApex(props: Props) {
  const { chart } = props;

  const variables = chart.backendData.var.split(" v/s ");
  const fecha = chart.backendData.time
    ? Array.isArray(chart.backendData.time)
      ? chart.backendData.time[0]
      : chart.backendData.time
    : "";
  const data = chart.backendData.data;
  const unidades = chart.backendData.units;

  return (
    <Table>
      <TableHeader>
        <TableColumn>Altura</TableColumn>
        <TableColumn>Fecha</TableColumn>
        <TableColumn>{chart.backendData.var.split(" v/s ")[0]}</TableColumn>
        <TableColumn>Unidad de medida</TableColumn>
        <TableColumn>{chart.backendData.var.split(" v/s ")[1]}</TableColumn>
        <TableColumn>Unidad de medida</TableColumn>
      </TableHeader>
      <TableBody>
        {chart.backendData.data.map((t, index) => (
          <TableRow key={`row-${index}`}>
            <TableCell>{chart.backendData.level}</TableCell>
            <TableCell>{`${fecha.split("T")[0]} - ${fecha.split(":")[0].split("T")[1]}:00 hrs`}</TableCell>
            <TableCell>{data[index][0]}</TableCell>
            <TableCell>{unidades[0]}</TableCell>
            <TableCell>{data[index][1]}</TableCell>
            <TableCell>{unidades[1]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TablaAlturaInfoApex;
