"use client";
import React from "react";
import {
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { ThemeSwitch } from "../theme-switch";

export default function navbar() {
  return (
    <Navbar className="flex w-full shadow-sm shadow-black dark:shadow-white justify-evenly">
      <NavbarBrand>
        <Image src="/logo2.png" width={50} height={50} radius="none"/>
        <p className="font-bold text-inherit ml-3">CLIMATIC</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem isActive>
          <Link color="foreground" href="/">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/visualizer">
            Re-Análisis
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/faq">
            Preguntas frecuentes
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about">
            Sobre nosotros
          </Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}      
