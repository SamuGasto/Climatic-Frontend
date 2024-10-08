"use client";
import React, { useEffect, useState } from "react";
import {
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { ThemeSwitch } from "../theme-switch";
import { useNavbarStore } from "@/utils/Stores/navbarStore";
import { useRouter } from "next/compat/router";

export default function navbar() {
  const { activePage, changePage } = useNavbarStore.getState();
  const [refresh, setRefresh] = useState(false);

  function Refresh() {
    setRefresh(!refresh);
  }

  return (
    <Navbar
      className="flex w-full p-1 px-6 shadow-md dark:border-white dark:border-b-1"
      position="static"
      maxWidth="full"
    >
      <NavbarBrand>
        <Image src="/logo.png" width={60} height={55} />
        <p className="font-bold text-inherit ml-3">CLIMATIC</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 " justify="end">
        <NavbarItem isActive={activePage[0]}>
          <Link
            color="foreground"
            href="/"
            onPress={() => {
              changePage(0);
              Refresh();
            }}
          >
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activePage[1]}>
          <Link
            color="foreground"
            href="/visualizer"
            onPress={() => {
              changePage(1);
              Refresh();
            }}
          >
            Re-Analisís
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activePage[2]}>
          <Link
            color="foreground"
            href="#"
            aria-current="page"
            onPress={() => {
              changePage(2);
              Refresh();
            }}
          >
            Preguntas Frecuentes
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarItem>
        <ThemeSwitch />
      </NavbarItem>
    </Navbar>
  );
}
