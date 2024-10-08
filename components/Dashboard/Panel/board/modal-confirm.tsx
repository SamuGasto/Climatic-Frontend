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

function ModalConfirm(props: PropType) {
  const { refresh } = props;
  const { userData, id_boardSelected, addNewBoard, updateBoard } =
    useBoardStore.getState();
  const {
    ModalConfirm,
    ModalConfirmText,
    functionModalConfirm,
    toggleModalConfirm,
  } = useModalStore.getState();

  function ReadyButtonFunction() {
    functionModalConfirm();

    toggleModalConfirm(false, "", () => {});
    refresh();
  }

  return (
    <div>
      <Modal
        isOpen={ModalConfirm}
        onOpenChange={(value) => {
          if (!value) {
            toggleModalConfirm(false, "", () => {});
          }
          refresh();
        }}
        onKeyDown={(event) => {
          if (ModalConfirm && event.key === "Enter") ReadyButtonFunction();
        }}
      >
        <ModalContent>
          <ModalHeader>Confirmación</ModalHeader>
          <ModalBody>
            <h1>{ModalConfirmText}</h1>
          </ModalBody>
          <ModalFooter className="flex justify-between">
            <Button
              color="danger"
              variant="flat"
              onPress={() => {
                toggleModalConfirm(false, "", () => {});
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
              Aceptar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ModalConfirm;
