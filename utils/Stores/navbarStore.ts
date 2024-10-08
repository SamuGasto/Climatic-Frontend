import { create } from "zustand";

interface NavbarStore {
  activePage: boolean[];
  changePage: (id: number) => void;
}

export const useNavbarStore = create<NavbarStore>((set, get) => ({
  activePage: [true, false, false],
  changePage: (id: number) => {
    set((state) => ({
      ...state,
      activePage: get().activePage.map((e, index) => {
        if (index === id) {
          e = true;
          return e;
        } else {
          e = false;
          return e;
        }
      }),
    }));
  },
}));
