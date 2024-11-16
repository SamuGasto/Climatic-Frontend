import BackendData from "@/types/backend-data";
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
}

function InfoChart(props: Props) {
  const { backendData } = props;
  if (!backendData) return;
  return (
    <Table aria-label="Información del gráfico">
      <TableHeader>
        <TableColumn>Latitudes</TableColumn>
        <TableColumn>Longitudes</TableColumn>
        <TableColumn>Valores</TableColumn>
        {backendData.time ? <TableColumn>Tiempo</TableColumn> : <></>}
        {backendData.level ? <TableColumn>Altura</TableColumn> : <></>}
        <TableColumn>Unidad de medida</TableColumn>
      </TableHeader>
      <TableBody>
        {backendData.data.map((data, index) => {
          return (
            <TableRow key={index.toString()}>
              <TableCell>
                {backendData.latitude.length > 1
                  ? backendData.latitude[index]
                  : backendData.latitude}
              </TableCell>
              <TableCell>
                {backendData.longitude.length > 1
                  ? backendData.longitude[index]
                  : backendData.longitude}
              </TableCell>
              <TableCell>{backendData.data[index]}</TableCell>
              {backendData.time ? (
                <TableCell>
                  {Array.isArray(backendData.time)
                    ? backendData.time[index]
                    : backendData.time}
                </TableCell>
              ) : (
                <></>
              )}
              {backendData.level ? (
                <TableCell>
                  {Array.isArray(backendData.level)
                    ? backendData.level[index]
                    : backendData.level}
                </TableCell>
              ) : (
                <></>
              )}
              <TableCell>{backendData.units}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default InfoChart;
