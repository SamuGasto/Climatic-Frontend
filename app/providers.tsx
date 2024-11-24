"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { ModalStoreProvider } from "@/providers/modal-store-provider";
import { BoardStoreProvider } from "@/providers/board-store-provider";
import { ChartStoreProvider } from "@/providers/chart-store-provider";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider {...themeProps}>
        <BoardStoreProvider>
          <ChartStoreProvider>
            <ModalStoreProvider>{children}</ModalStoreProvider>
          </ChartStoreProvider>
        </BoardStoreProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
