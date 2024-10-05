import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React, { useState } from "react";

interface PropType {
  open: boolean;
  handleOpen: (openState: boolean) => void;
  actionFunction: (boardName: string) => void;
}

function ModalCreateBoard(props: PropType) {
  const { open, handleOpen, actionFunction } = props;
  const [title, setTitle] = useState("");

  return (
    <div>
      <Modal isOpen={open} onOpenChange={handleOpen}>
        <ModalContent>
          <ModalHeader>Nuevo Tablero</ModalHeader>
          <ModalBody>
            <Input
              autoFocus
              label="Titulo del tablero"
              placeholder="Ingresa un nombre para tu tablero"
              value={title}
              onValueChange={(value) => setTitle(value)}
              variant="underlined"
            />
          </ModalBody>
          <ModalFooter className="flex justify-between">
            <Button
              color="danger"
              variant="flat"
              onPress={() => {
                handleOpen(false);
                setTitle("");
              }}
            >
              Cancelar
            </Button>
            <Button
              color="primary"
              onPress={() => {
                if (title.trim() === "") actionFunction("Nuevo Tablero");
                else actionFunction(title);

                setTitle("");
                handleOpen(false);
              }}
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
