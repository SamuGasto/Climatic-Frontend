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
import React, { useEffect, useState } from "react";

function ModalEditBoard() {
  const userData = useBoardStore((state) => state.userData);
  const id_boardSelected = useBoardStore((state) => state.id_boardSelected);
  const addNewBoard = useBoardStore((state) => state.addNewBoard);
  const updateBoard = useBoardStore((state) => state.updateBoard);
  const ModalEditBoard = useModalStore((state) => state.ModalEditBoard);
  const toggleModalEditBoard = useModalStore(
    (state) => state.toggleModalEditBoard
  );
  const [title, setTitle] = useState("");
  const actualTheme = useTheme();

  useEffect(() => {
    if (userData[id_boardSelected]) setTitle(userData[id_boardSelected].name);
  }, [ModalEditBoard]);

  function ReadyButtonFunction() {
    if (title.trim() === "") addNewBoard("Nuevo Tablero");
    else updateBoard(userData[id_boardSelected], title);

    setTitle("");
    toggleModalEditBoard(false);
  }

  return (
    <div>
      <Modal
        isOpen={ModalEditBoard}
        onOpenChange={(value) => {
          toggleModalEditBoard(value);
        }}
        onKeyDown={(event) => {
          if (ModalEditBoard && event.key === "Enter") ReadyButtonFunction();
        }}
        className="m-4 md:m-0"
        placement="center"
      >
        <ModalContent>
          <ModalHeader>Configuración</ModalHeader>
          <ModalBody>
            <Input
              autoFocus

              label="Titulo del tablero (Maximo 40 caracteres)"

              placeholder="Ingresa un nuevo nombre para tu tablero"
              value={title}
              onValueChange={(value) => {
                if (value.length <= 40) setTitle(value);
              }}
              variant="underlined"
            />
          </ModalBody>
          <ModalFooter className="flex justify-between">
            <Button
              aria-label="Cancelar"
              color="danger"
              variant="flat"
              onPress={() => {
                toggleModalEditBoard(false);
                setTitle("");
              }}
            >
              Cancelar
            </Button>
            <Button
              aria-label="Listo"
              color="primary"
              onPress={() => {
                ReadyButtonFunction();
              }}
              variant={actualTheme.theme === "light" ? "bordered" : "solid"}
            >
              Listo
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ModalEditBoard;
