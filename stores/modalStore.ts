import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type ModalState = {
  ModalCreateBoard: boolean;
  ModalEditBoard: boolean;
  ModalCreateChart: boolean;
  ModalConfirm: boolean;
  ModalConfirmText: string;
};

export type ModalActions = {
  functionModalConfirm: () => void;
  toggleModalCreateBoard: (newValue: boolean) => void;
  toggleModalEditBoard: (newValue: boolean) => void;
  toggleModalCreateChart: (newValue: boolean) => void;
  toggleModalConfirm: (
    newValue: boolean,
    newText: string,
    newFunction: () => void
  ) => void;
};

export type ModalStore = ModalState & ModalActions;

export const defaultInitState: ModalState = {
  ModalCreateBoard: false,
  ModalEditBoard: false,
  ModalCreateChart: false,
  ModalConfirm: false,
  ModalConfirmText: "",
};

export const createModalStore = (initState: ModalState = defaultInitState) => {
  return create<ModalStore>()(
    persist(
      (set, get) => ({
        ...initState,
        functionModalConfirm: () => {},
        toggleModalCreateBoard: (newValue: boolean) => {
          set((state) => ({ ...state, ModalCreateBoard: newValue }));
        },
        toggleModalEditBoard: (newValue: boolean) => {
          set((state) => ({ ...state, ModalEditBoard: newValue }));
        },
        toggleModalCreateChart: (newValue: boolean) => {
          set((state) => ({ ...state, ModalCreateChart: newValue }));
        },
        toggleModalConfirm: (
          newValue: boolean,
          newText: string,
          newFunction: () => void
        ) => {
          set((state) => ({
            ...state,
            ModalConfirm: newValue,
            ModalConfirmText: newText,
            functionModalConfirm: newFunction,
          }));
        },
      }),
      { name: "modal-store", storage: createJSONStorage(() => localStorage) }
    )
  );
};

export default createModalStore;
