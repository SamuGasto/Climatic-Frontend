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
    <Navbar className="flex w-full shadow-md">
      <Navbar className="flex w-full" position="static">
        <NavbarBrand>
          <Image src="/logo.png" width={60} height={55} />
          <p className="font-bold text-inherit ml-3">DiDema</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarItem isActive>
            <Link color="foreground" href="/">
              CLIMATIC
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/visualizer">
              Re-Analisís
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" aria-current="page">
              Preguntas Frecuentes
            </Link>
          </NavbarItem>
          <NavbarItem>
          <ThemeSwitch/>
         </NavbarItem>
        </NavbarContent>
        <NavbarItem className="hidden lg:flex"></NavbarItem>
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </Navbar>
    </Navbar>
  );
}      
