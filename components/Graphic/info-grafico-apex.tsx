import BackendData from "@/types/backend-data";
import { typeChart } from "@/types/chart";
import { ChartStats } from "@/types/stats";
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
  backendData: BackendData;
  stats: ChartStats;
}

type Columns = (backendData: BackendData) => {
  key: string;
  value: string;
}[];

type Rows = (backendData: BackendData) => {
  latitud: number;
  longitud: number;
  valor: string;
  tiempo?: string;
  altura?: number;
  unidad_de_medida: string;
}[];

function InfoApexChart(props: Props) {
  const { backendData, stats } = props;

  const decimals = check_first_decimal_pos(stats.min);

  const columns: Columns = (backendData) => {
    if (backendData.time) {
      if (backendData.level) {
        return [
          { key: "fecha", value: "Fecha" },
          { key: "latitud", value: "Latitud" },
          { key: "longitud", value: "Longitud" },
          { key: "altura", value: "Altura" },
          { key: "valor", value: "Valor" },
          { key: "unidad_de_medida", value: "Unidad de medida" },
        ];
      } else {
        return [
          { key: "fecha", value: "Fecha" },
          { key: "latitud", value: "Latitud" },
          { key: "longitud", value: "Longitud" },
          { key: "valor", value: "Valor" },
          { key: "unidad_de_medida", value: "Unidad de medida" },
        ];
      }
    } else {
      return [
        { key: "latitud", value: "Latitud" },
        { key: "longitud", value: "Longitud" },
        { key: "valor", value: "Valor" },
        { key: "unidad_de_medida", value: "Unidad de medida" },
      ];
    }
  };

  const rows: Rows = (backendData) => {
    if (!backendData.time) {
      return [
        {
          latitud: -1,
          longitud: -1,
          valor: "-1",
          altura: -1,
          unidad_de_medida: "t",
        },
      ];
    }

    if (backendData.level) {
      if (Array.isArray(backendData.time)) {
        return backendData.time.map((t, index) => {
          const valor = backendData.data[index][0];
          if (!Array.isArray(valor)) {
            return {
              latitud: -1,
              longitud: -1,
              valor: "-1",
              altura: -1,
              unidad_de_medida: "t",
            };
          } else {
            return {
              tiempo: `${t.split("T")[0]} - ${t.split(":")[0].split("T")[1]}:00 hrs`,
              latitud: backendData.latitude[0],
              longitud: backendData.longitude[0],
              altura: backendData.level,
              valor: valor[0].toFixed(decimals),
              unidad_de_medida: backendData.units,
            };
          }
        });
      } else {
        if (!Array.isArray(backendData.data[0][0])) {
          return [
            {
              latitud: -1,
              longitud: -1,
              valor: "-1",
              altura: -1,
              unidad_de_medida: "t",
            },
          ];
        } else {
          return [
            {
              tiempo: `${backendData.time.split("T")[0]} - ${backendData.time.split(":")[0].split("T")[1]}:00 hrs`,
              latitud: backendData.latitude[0],
              longitud: backendData.longitude[0],
              altura: backendData.level,
              valor: backendData.data[0][0][0].toFixed(decimals),
              unidad_de_medida: backendData.units,
            },
          ];
        }
      }
    } else {
      if (Array.isArray(backendData.time)) {
        return backendData.time.map((t, index) => {
          const valor = backendData.data[index][0];
          if (!Array.isArray(valor)) {
            return {
              latitud: -1,
              longitud: -1,
              valor: "-1",
              altura: -1,
              unidad_de_medida: "t",
            };
          } else {
            return {
              tiempo: `${t.split("T")[0]} - ${t.split(":")[0].split("T")[1]}:00 hrs`,
              latitud: backendData.latitude[0],
              longitud: backendData.longitude[0],
              valor: valor[0].toFixed(decimals),
              unidad_de_medida: backendData.units,
            };
          }
        });
      } else {
        const valor = backendData.data[0][0];
        if (!Array.isArray(valor)) {
          return [
            {
              latitud: -1,
              longitud: -1,
              valor: "-1",
              altura: -1,
              unidad_de_medida: "t",
            },
          ];
        } else {
          return [
            {
              tiempo: `${backendData.time.split("T")[0]} - ${backendData.time.split(":")[0].split("T")[1]}:00 hrs`,
              latitud: backendData.latitude[0],
              longitud: backendData.longitude[0],
              valor: valor[0].toFixed(decimals),
              unidad_de_medida: backendData.units,
            },
          ];
        }
      }
    }
  };

  return (
    <Table
      aria-label="Información del gráfico"
      className="flex-1"
      title={backendData.var}
    >
      <TableHeader>
        {columns(backendData).map((col, index) => (
          <TableColumn key={`col-${col.key}-${index}`}>{col.value}</TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {rows(backendData).map((row, index) => (
          <TableRow key={`row-${index}`}>
            {Object.values(row).map((val, index) => {
              return <TableCell key={`cell-${val}-${index}`}>{val}</TableCell>;
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default InfoApexChart;
