import { useBoardStore } from "@/utils/boardStore";
import useModalStore from "@/utils/modalStore";
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

function ModalEditBoard(props: PropType) {
  const { refresh } = props;
  const { userData, id_boardSelected, addNewBoard, updateBoard } =
    useBoardStore.getState();
  const { ModalEditBoard, toggleModalEditBoard } = useModalStore.getState();
  const [title, setTitle] = useState("");

  function ReadyButtonFunction() {
    if (title.trim() === "") addNewBoard("Nuevo Tablero");
    else updateBoard(userData[id_boardSelected], title);

    setTitle("");
    toggleModalEditBoard(false);
    refresh();
  }

  return (
    <div>
      <Modal
        isOpen={ModalEditBoard}
        onOpenChange={(value) => {
          toggleModalEditBoard(value);
          refresh();
        }}
        onKeyDown={(event) => {
          if (ModalEditBoard && event.key === "Enter") ReadyButtonFunction();
        }}
      >
        <ModalContent>
          <ModalHeader>Configuración</ModalHeader>
          <ModalBody>
            <Input
              autoFocus
              label="Titulo del tablero"
              placeholder="Ingresa un nuevo nombre para tu tablero"
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
                toggleModalEditBoard(false);
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

export default ModalEditBoard;
