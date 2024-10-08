import { create } from "zustand";

interface ModalStore {
  ModalCreateBoard: boolean;
  ModalEditBoard: boolean;
  ModalCreateChart: boolean;
  ModalConfirm: boolean;
  ModalConfirmText: string;
  functionModalConfirm: () => void;
  toggleModalCreateBoard: (newValue: boolean) => void;
  toggleModalEditBoard: (newValue: boolean) => void;
  toggleModalCreateChart: (newValue: boolean) => void;
  toggleModalConfirm: (
    newValue: boolean,
    newText: string,
    newFunction: () => void
  ) => void;
}

export const useModalStore = create<ModalStore>((set, get) => ({
  ModalCreateBoard: false,
  ModalEditBoard: false,
  ModalCreateChart: false,
  ModalConfirm: false,
  ModalConfirmText: "",
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
}));

export default useModalStore;
