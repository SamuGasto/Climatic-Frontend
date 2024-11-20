"use client";
import { useBoardStore } from "@/providers/board-store-provider";
import { useModalStore } from "@/providers/modal-store-provider";
import { Chart } from "@/types/chart";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  Selection,
  SelectItem,
  SharedSelection,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

function ModalExportBoard() {
  const ModalExportBoard = useModalStore((state) => state.ModalExportBoard);
  const toggleModalExportBoard = useModalStore(
    (state) => state.toggleModalExportBoard
  );
  const exportBoard = useBoardStore((state) => state.exportBoard);
  const userData = useBoardStore((state) => state.userData);
  const id_boardSelected = useBoardStore((state) => state.id_boardSelected);
  const actualTheme = useTheme();
  const [listOfCharts, setListOfCharts] = React.useState<Chart[]>([]);
  const [value, setValue] = useState<Set<string | number>>(
    new Set<string | number>([])
  );

  useEffect(() => {
    try {
      setListOfCharts(userData[id_boardSelected].charts);
      console.log(userData[id_boardSelected].charts);
    } catch (error) {
      console.error(error);
    }
  }, [ModalExportBoard]);

  function ReadyButtonFunction() {
    if (!value) return;
    const final_values: number[] = [];
    value.forEach((chart_id) => {
      if (typeof chart_id === "number") {
        final_values.push(chart_id);
      } else {
        final_values.push(parseInt(chart_id));
      }
    });
    exportBoard(id_boardSelected, final_values);
    toggleModalExportBoard(false);
  }

  return (
    <div>
      <Modal
        isOpen={ModalExportBoard}
        backdrop="blur"
        onOpenChange={(value) => {
          if (!value) {
            toggleModalExportBoard(false);
          }
        }}
        onKeyDown={(event) => {
          if (ModalExportBoard && event.key === "Enter") ReadyButtonFunction();
        }}
        className="m-4 md:m-0"
        placement="center"
      >
        <ModalContent>
          <ModalHeader>Exportar Gráficos</ModalHeader>
          <ModalBody>
            <div>
              <Select
                aria-label="Selecciona los gráficos a exportar"
                placeholder="Selecciona los gráficos a exportar"
                selectionMode="multiple"
                className="w-full"
                onSelectionChange={(value) => {
                  const val: Set<string | number> = new Set<string | number>(
                    value
                  );

                  setValue(val);
                }}
              >
                {listOfCharts.map((chart, index) => {
                  return <SelectItem key={index}>{chart.title}</SelectItem>;
                })}
              </Select>
            </div>
          </ModalBody>
          <ModalFooter className="flex justify-between">
            <Button
              aria-label="Cancelar"
              color="danger"
              variant="flat"
              onPress={() => {
                toggleModalExportBoard(false);
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

export default ModalExportBoard;
