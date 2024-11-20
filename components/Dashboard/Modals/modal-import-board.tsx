"use client";
import { useBoardStore } from "@/providers/board-store-provider";
import { useModalStore } from "@/providers/modal-store-provider";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import React from "react";
import { DropEvent, FileRejection, useDropzone } from "react-dropzone/";

function ModalImportBoard() {
  const ModalImport = useModalStore((state) => state.ModalImportBoard);
  const toggleModalImportBoard = useModalStore(
    (state) => state.toggleModalImportBoard
  );
  const importBoard = useBoardStore((state) => state.importBoard);
  const actualTheme = useTheme();

  function onDrop(
    acceptedFiles: File[],
    fileRejections: FileRejection[],
    event: DropEvent
  ) {
    console.log(acceptedFiles, fileRejections, event);
    acceptedFiles.forEach((file) => {
      importBoard(file);
    });
  }
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  function ReadyButtonFunction() {
    toggleModalImportBoard(false);
  }

  return (
    <div>
      <Modal
        isOpen={ModalImport}
        backdrop="blur"
        onOpenChange={(value) => {
          if (!value) {
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
          <ModalHeader>Importar Tablero</ModalHeader>
          <ModalBody>
            <div
              {...getRootProps()}
              className="flex-1 p-10 border border-dashed"
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Suelta tu archivo aquí ...</p>
              ) : (
                <p className="text-center">
                  Suelta tu archivo aquí o haz click para seleccionar un archivo
                </p>
              )}
            </div>
          </ModalBody>
          <ModalFooter className="flex justify-between">
            <Button
              aria-label="Cancelar"
              color="danger"
              variant="flat"
              onPress={() => {
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
