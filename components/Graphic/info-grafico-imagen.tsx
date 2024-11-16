import BackendData from "@/types/backend-data";
import { Chart } from "@/types/chart";
import { Card, CardBody } from "@nextui-org/card";
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

type Columns = (backendData: BackendData) => {
  key: string;
  value: string;
}[];

type Rows = (backendData: BackendData) => {
  latitud: string;
  longitud: string;
  valor: string;
  tiempo?: string;
  altura?: string;
  unidad_de_medida: string;
};

function InfoGraficoImagen(props: Props) {
  const { chart } = props;

  const columns: Columns = (backendData) => {
    if (backendData.time) {
      if (backendData.level) {
        return [
          { key: "latitud", value: "Rango de Latitud" },
          { key: "longitud", value: "Rango de Longitud" },
          { key: "fecha", value: "Fecha" },
          { key: "altura", value: "Altura" },
          { key: "datos", value: "Rango de Datos" },
          { key: "unidad_de_medida", value: "Unidad de Medida" },
        ];
      } else {
        return [
          { key: "latitud", value: "Rango de Latitud" },
          { key: "longitud", value: "Rango de Longitud" },
          { key: "fecha", value: "Fecha" },
          { key: "datos", value: "Rango de Datos" },
          { key: "unidad_de_medida", value: "Unidad de Medida" },
        ];
      }
    } else {
      return [
        { key: "latitud", value: "Rango de Latitud" },
        { key: "longitud", value: "Rango de Longitud" },
        { key: "datos", value: "Rango de Datos" },
        { key: "unidad_de_medida", value: "Unidad de Medida" },
      ];
    }
  };

  const rows: Rows = (backendData: BackendData) => {
    if (!backendData.time) {
      return {
        latitud: `[${backendData.latitude[0]} , ${backendData.latitude.slice(-1)}]`,
        longitud: `[${backendData.longitude[0]} , ${backendData.longitude.slice(-1)}]`,
        valor: `[${chart.stats.min} , ${chart.stats.max}]`,
        unidad_de_medida: `${backendData.units}`,
      };
    }

    if (backendData.level) {
      if (Array.isArray(backendData.time)) {
        return {
          latitud: `[${backendData.latitude[0]} , ${backendData.latitude.slice(-1)}]`,
          longitud: `[${backendData.longitude[0]} , ${backendData.longitude.slice(-1)}]`,
          tiempo: `[${backendData.time[0].split("T")[0]} - ${backendData.time[0].split(":")[0].split("T")[1]}:00 hrs , ${backendData.time[backendData.time.length - 1].split("T")[0]} - ${backendData.time[backendData.time.length - 1].split(":")[0].split("T")[1]}:00 hrs]`,
          altura: `[${backendData.level}]`,
          valor: `[${chart.stats.min} , ${chart.stats.max}]`,
          unidad_de_medida: `${backendData.units}`,
        };
      } else {
        return {
          latitud: `[${backendData.latitude[0]} , ${backendData.latitude.slice(-1)}]`,
          longitud: `[${backendData.longitude[0]} , ${backendData.longitude.slice(-1)}]`,
          tiempo: `[${backendData.time.split("T")[0]} - ${backendData.time.split(":")[0].split("T")[1]}:00 hrs]`,
          altura: `[${backendData.level}]`,
          valor: `[${chart.stats.min} , ${chart.stats.max}]`,
          unidad_de_medida: `${backendData.units}`,
        };
      }
    } else {
      if (Array.isArray(backendData.time)) {
        return {
          latitud: `[${backendData.latitude[0]} , ${backendData.latitude.slice(-1)}]`,
          longitud: `[${backendData.longitude[0]} , ${backendData.longitude.slice(-1)}]`,
          tiempo: `[${backendData.time[0].split(":")[0].split("T")[0]} - ${backendData.time[0].split(":")[0].split("T")[1]}:00 hrs , ${backendData.time[backendData.time.length - 1].split(":")[0].split("T")[0]} - ${backendData.time[backendData.time.length - 1].split(":")[0].split("T")[1]}:00 hrs]`,
          valor: `[${chart.stats.min} , ${chart.stats.max}]`,
          unidad_de_medida: `${backendData.units}`,
        };
      } else {
        return {
          latitud: `[${backendData.latitude[0]} , ${backendData.latitude.slice(-1)}]`,
          longitud: `[${backendData.longitude[0]}, ${backendData.longitude.slice(-1)}]`,
          tiempo: `[${backendData.time.split("T")[0]} - ${backendData.time.split(":")[0].split("T")[1]}:00 hrs]`,
          valor: `[${chart.stats.min}, ${chart.stats.max}]`,
          unidad_de_medida: `${backendData.units}`,
        };
      }
    }
  };
  console.log(chart.backendData.var);

  return (
    <Table aria-label="Resumen del gráfico" title={chart.backendData.var}>
      <TableHeader>
        {columns(chart.backendData).map((col) => {
          return <TableColumn key={col.key}>{col.value}</TableColumn>;
        })}
      </TableHeader>
      <TableBody>
        <TableRow>
          {Object.values(rows(chart.backendData)).map((c, index) => {
            return <TableCell key={`cell-${index}`}>{c}</TableCell>;
          })}
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default InfoGraficoImagen;
