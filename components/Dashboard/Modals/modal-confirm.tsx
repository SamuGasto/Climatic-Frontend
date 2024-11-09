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
import { useTheme } from "next-themes";
import React from "react";

function ModalConfirm() {
  const {
    ModalConfirm,
    ModalConfirmText,
    functionModalConfirm,
    toggleModalConfirm,
  } = useModalStore.getState();
  const actualTheme = useTheme();

  function ReadyButtonFunction() {
    functionModalConfirm();

    toggleModalConfirm(false, "", () => {});
  }

  return (
    <div>
      <Modal
        isOpen={ModalConfirm}
        backdrop="blur"
        onOpenChange={(value) => {
          if (!value) {
            toggleModalConfirm(false, "", () => {});
          }
        }}
        onKeyDown={(event) => {
          if (ModalConfirm && event.key === "Enter") ReadyButtonFunction();
        }}
      >
        <ModalContent>
          <ModalHeader>Confirmación</ModalHeader>
          <ModalBody>
            <h1 className="text-center">{ModalConfirmText}</h1>
          </ModalBody>
          <ModalFooter className="flex justify-between">
            <Button
              color="danger"
              variant="flat"
              onPress={() => {
                toggleModalConfirm(false, "", () => {});
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
              Aceptar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ModalConfirm;
