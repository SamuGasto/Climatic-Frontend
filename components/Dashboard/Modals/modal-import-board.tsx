"use client";
import { useBoardStore } from "@/providers/board-store-provider";
import { useModalStore } from "@/providers/modal-store-provider";
import { Chart } from "@/types/chart";
import {
  Button,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import { DropEvent, FileRejection, useDropzone } from "react-dropzone/";
import toast from "react-hot-toast";

function ModalImportBoard() {
  const ModalImport = useModalStore((state) => state.ModalImportBoard);
  const toggleModalImportBoard = useModalStore(
    (state) => state.toggleModalImportBoard
  );
  const importCharts = useBoardStore((state) => state.importCharts);
  const actualTheme = useTheme();
  const [chartsToAdd, setChartsToAdd] = useState<Chart[]>([]);
  const reader = new FileReader();

  function onDrop(
    acceptedFiles: File[],
    fileRejections: FileRejection[],
    event: DropEvent
  ) {
    console.log(acceptedFiles, fileRejections, event);
    try {
      acceptedFiles.forEach((file) => {
        reader.readAsText(file);
        reader.onload = (e) => {
          const data = e.target?.result as string;
          const json = JSON.parse(data);
          setChartsToAdd(json);
        };
      });
    } catch (error) {
      toast.error("Error al leer el archivo");
      console.log(error);
    }
    toast.success("Archivo cargado correctamente");
  }
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  function ReadyButtonFunction() {
    if (chartsToAdd.length >= 0) {
      importCharts(chartsToAdd);
      toast.success("Gráficos importados correctamente");
    }
    setChartsToAdd([]);
    toggleModalImportBoard(false);
  }

  return (
    <div>
      <Modal
        isOpen={ModalImport}
        backdrop="blur"
        onOpenChange={(value) => {
          if (!value) {
            setChartsToAdd([]);
            toggleModalImportBoard(false);
          }
        }}
        onKeyDown={(event) => {
          if (ModalImport && event.key === "Enter") ReadyButtonFunction();
        }}
        className="m-4 md:m-0"
        placement="center"
      >
        <ModalContent>
          <ModalHeader>Importar Gráficos</ModalHeader>
          <ModalBody>
          <div
              {...getRootProps()}
              className="flex-1 p-10 border-dashed border-large"
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Suelta tu archivo con gráficos aquí ...</p>
              ) : (
                <p className="text-center">
                  Suelta tu archivo con gráficos aquí o haz click para
                  seleccionarlo
                </p>
              )}
            </div>
            {chartsToAdd.length > 0 && (
              <div className="flex flex-col gap-4">
                <Divider/>
                <h1 className="flex justify-center text-center text-xl font-semibold">Gráficos a importar</h1>
                <Table className="flex max-h-32">
                  <TableHeader>
                    <TableColumn>Título</TableColumn>
                    <TableColumn>Variable</TableColumn>
                    <TableColumn>Tipo de gráfico</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {chartsToAdd.map((chart, index) => (<TableRow key={index}>
                      <TableCell className="truncate">{chart.title}</TableCell>
                      <TableCell>{chart.backendData.var}</TableCell>
                      <TableCell>{chart.typeChart}</TableCell>
                    </TableRow>))}
                  </TableBody>
                </Table>
              </div>
            )}
            
          </ModalBody>
          <ModalFooter className="flex justify-between">
            <Button
              aria-label="Cancelar"
              color="danger"
              variant="flat"
              onPress={() => {
                setChartsToAdd([]);
                toggleModalImportBoard(false);
              }}
            >
              Cancelar
            </Button>
            <Button
              aria-label="Aceptar"
              color="primary"
              onPress={() => {
                ReadyButtonFunction();
              }}
              variant={actualTheme.theme === "light" ? "bordered" : "solid"}
            >
              Aceptar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ModalImportBoard;
