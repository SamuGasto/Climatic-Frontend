import { useBoardStore } from "@/utils/Stores/boardStore";
import useModalStore from "@/utils/Stores/modalStore";
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
  refresh: () => void;
}

function ModalCreateBoard(props: PropType) {
  const { refresh } = props;
  const { addNewBoard } = useBoardStore.getState();
  const { ModalCreateBoard, toggleModalCreateBoard } = useModalStore.getState();
  const [title, setTitle] = useState("");

  function ReadyButtonFunction() {
    if (title.trim() === "") addNewBoard("Nuevo Tablero");
    else addNewBoard(title);

    setTitle("");
    toggleModalCreateBoard(false);
    refresh();
  }

  return (
    <div>
      <Modal
        isOpen={ModalCreateBoard}
        onOpenChange={(value) => {
          toggleModalCreateBoard(value);
          refresh();
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
              onValueChange={(value) => setTitle(value)}
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
                refresh();
              }}
            >
              Cancelar
            </Button>
            <Button
              color="primary"
              onPress={() => {
                ReadyButtonFunction();
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
