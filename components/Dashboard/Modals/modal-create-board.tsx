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
import React, { useState } from "react";

function ModalCreateBoard() {
  const addNewBoard = useBoardStore((state) => state.addNewBoard);
  const toggleModalCreateBoard = useModalStore(
    (state) => state.toggleModalCreateBoard
  );
  const ModalCreateBoard = useModalStore((state) => state.ModalCreateBoard);
  const [title, setTitle] = useState("");
  const actualTheme = useTheme();
  function ReadyButtonFunction() {
    if (title.trim() === "") addNewBoard("Nuevo Tablero");
    else addNewBoard(title);

    setTitle("");
    toggleModalCreateBoard(false);
  }

  return (
    <div>
      <Modal
        isOpen={ModalCreateBoard}
        onOpenChange={(value) => {
          toggleModalCreateBoard(value);
        }}
        onKeyDown={(event) => {
          if (ModalCreateBoard && event.key === "Enter") ReadyButtonFunction();
        }}
      >
        <ModalContent>
          <ModalHeader>Nuevo Tablero</ModalHeader>
          <ModalBody>
            <Input
              autoFocus
              label="Titulo del tablero"
              placeholder="Ingresa un nombre para tu tablero"
              value={title}
              onValueChange={(value) => {
                if (value.length <= 40) setTitle(value);
              }}
              variant="underlined"
            />
          </ModalBody>
          <ModalFooter className="flex justify-between">
            <Button
              color="danger"
              variant="flat"
              onPress={() => {
                toggleModalCreateBoard(false);
                setTitle("");
              }}
            >
              Cancelar
            </Button>
            <Button
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

export default ModalCreateBoard;
