import { Board } from "@/types/board";
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
  boardFather: Board;
  handleOpen: (openState: boolean) => void;
  createChart: (boardFather: Board, title: string, subtitle: string) => void;
}

function ModalCreateChart(props: PropType) {
  const { open, boardFather, handleOpen, createChart } = props;
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  return (
    <div>
      <Modal isOpen={open} onOpenChange={handleOpen}>
        <ModalContent>
          <ModalHeader>Nuevo Gráfico</ModalHeader>
          <ModalBody>
            <Input
              autoFocus
              label="Titulo del gráfico"
              placeholder="Ingresa un nombre para tu gráfico"
              value={title}
              onValueChange={(value) => setTitle(value)}
              variant="underlined"
            />
            <Input
              autoFocus
              label="Subtitulo del gráfico"
              placeholder="Ingresa un subtitulo para tu gráfico"
              value={subtitle}
              onValueChange={(value) => setSubtitle(value)}
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
                if (title.trim() === "")
                  createChart(
                    boardFather,
                    "Nuevo Tablero",
                    "(sin descripción)"
                  );
                else createChart(boardFather, title, subtitle);

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

export default ModalCreateChart;
