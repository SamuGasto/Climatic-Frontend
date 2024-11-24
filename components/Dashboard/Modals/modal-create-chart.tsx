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

function ModalCreateChart() {
  const userData = useBoardStore((state) => state.userData);
  const id_boardSelected = useBoardStore((state) => state.id_boardSelected);
  const addNewChart = useBoardStore((state) => state.addNewChart);
  const toggleModalCreateChart = useModalStore(
    (state) => state.toggleModalCreateChart
  );
  const ModalCreateChart = useModalStore((state) => state.ModalCreateChart);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const actualTheme = useTheme();

  function ReadyButtonFunction() {
    addNewChart(
      userData[id_boardSelected],
      title.trim() === "" ? "Nuevo gráfico" : title.trim(),
      subtitle.trim() === "" ? "(sin descripción)" : subtitle.trim()
    );

    setTitle("");
    setSubtitle("");
    toggleModalCreateChart(false);
  }

  return (
    <div>
      <Modal
        isOpen={ModalCreateChart}
        onOpenChange={(value) => {
          toggleModalCreateChart(value);
        }}
        onKeyDown={(event) => {
          if (ModalCreateChart && event.key === "Enter") ReadyButtonFunction();
        }}
        className="m-4 md:m-0"
        placement="center"
      >
        <ModalContent>
          <ModalHeader>Nuevo Gráfico</ModalHeader>
          <ModalBody>
            <Input
              autoFocus
              aria-label="Titulo"
              label="Titulo del gráfico"
              placeholder="Ingresa un nombre para tu gráfico"
              value={title}
              onValueChange={(value) => {
                if (value.length <= 40) setTitle(value);
              }}
              variant="underlined"
              description="Max. 40 carácteres"
            />
            <Input
              aria-label="Subtitulo"
              label="Subtitulo del gráfico"
              placeholder="Ingresa un subtitulo para tu gráfico"
              value={subtitle}
              onValueChange={(value) => setSubtitle(value)}
              variant="underlined"
            />
          </ModalBody>
          <ModalFooter className="flex justify-between">
            <Button
              aria-label="Cancelar"
              color="danger"
              variant="flat"
              onPress={() => {
                toggleModalCreateChart(false);
                setTitle("");
                setSubtitle("");
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

export default ModalCreateChart;
