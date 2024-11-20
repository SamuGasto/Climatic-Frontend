import BackendData from "@/types/backend-data";
import { Chart } from "@/types/chart";
import { check_first_decimal_pos } from "@/utils/check_first_decimal_pos";
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

  const decimals = check_first_decimal_pos(chart.stats.min);

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
    const initialRow = {
      latitud: `[${backendData.latitude[0]} , ${backendData.latitude.slice(-1)}]`,
      longitud: `[${backendData.longitude[0]} , ${backendData.longitude.slice(-1)}]`,
    };
    if (!backendData.time) {
      const finalRow = Object.assign(initialRow, {
        valor: `[${chart.stats.min.toFixed(decimals)} , ${chart.stats.max.toFixed(decimals)}]`,
        unidad_de_medida: `${backendData.units}`,
      });
      return finalRow;
    }

    if (backendData.level) {
      if (Array.isArray(backendData.time)) {
        Object.assign(initialRow, {
          tiempo: `[${backendData.time[0].split("T")[0]} - ${backendData.time[0].split(":")[0].split("T")[1]}:00 hrs , ${backendData.time[backendData.time.length - 1].split("T")[0]} - ${backendData.time[backendData.time.length - 1].split(":")[0].split("T")[1]}:00 hrs]`,
          altura: `[${backendData.level}]`,
        });
      } else {
        Object.assign(initialRow, {
          tiempo: `[${backendData.time.split("T")[0]} - ${backendData.time.split(":")[0].split("T")[1]}:00 hrs]`,
          altura: `[${backendData.level}]`,
        });
      }
    } else {
      if (Array.isArray(backendData.time)) {
        Object.assign(initialRow, {
          tiempo: `[${backendData.time[0].split(":")[0].split("T")[0]} - ${backendData.time[0].split(":")[0].split("T")[1]}:00 hrs , ${backendData.time[backendData.time.length - 1].split(":")[0].split("T")[0]} - ${backendData.time[backendData.time.length - 1].split(":")[0].split("T")[1]}:00 hrs]`,
        });
      } else {
        Object.assign(initialRow, {
          tiempo: `[${backendData.time.split("T")[0]} - ${backendData.time.split(":")[0].split("T")[1]}:00 hrs]`,
        });
      }
    }
    const row = Object.assign(initialRow, {
      valor: `[${chart.stats.min.toFixed(decimals)}, ${chart.stats.max.toFixed(decimals)}]`,
      unidad_de_medida: `${backendData.units}`,
    });
    return row;
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
