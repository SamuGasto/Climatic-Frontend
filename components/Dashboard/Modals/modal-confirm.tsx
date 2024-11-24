"use client";
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
import React from "react";

function ModalConfirm() {
  const ModalConfirm = useModalStore((state) => state.ModalConfirm);
  const ModalConfirmText = useModalStore((state) => state.ModalConfirmText);
  const functionModalConfirm = useModalStore(
    (state) => state.functionModalConfirm
  );
  const toggleModalConfirm = useModalStore((state) => state.toggleModalConfirm);
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
        className="m-4 md:m-0"
        placement="center"
      >
        <ModalContent>
          <ModalHeader>Confirmación</ModalHeader>
          <ModalBody>
            <h1 className="text-center">{ModalConfirmText}</h1>
          </ModalBody>
          <ModalFooter className="flex justify-between">
            <Button
              aria-label="Cancelar"
              color="danger"
              variant="flat"
              onPress={() => {
                toggleModalConfirm(false, "", () => {});
              }}
            >
              Cancelar
            </Button>
            <Button
              aria-label="Aceptar"
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
