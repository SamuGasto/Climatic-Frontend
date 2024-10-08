import { Board } from "@/types/board";
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

function ModalCreateChart(props: PropType) {
  const { refresh } = props;
  const { userData, id_boardSelected, addNewChart } = useBoardStore.getState();
  const { ModalCreateChart, toggleModalCreateChart } = useModalStore.getState();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  function ReadyButtonFunction() {
    if (title.trim() === "")
      addNewChart(
        userData[id_boardSelected],
        "Nuevo Tablero",
        "(sin descripción)"
      );
    else addNewChart(userData[id_boardSelected], title, subtitle);

    setTitle("");
    setSubtitle("");
    toggleModalCreateChart(false);
    refresh();
  }

  return (
    <div>
      <Modal
        isOpen={ModalCreateChart}
        onOpenChange={(value) => {
          toggleModalCreateChart(value);
          refresh();
        }}
        onKeyDown={(event) => {
          if (ModalCreateChart && event.key === "Enter") ReadyButtonFunction();
        }}
      >
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
                toggleModalCreateChart(false);
                setTitle("");
                setSubtitle("");
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

export default ModalCreateChart;
