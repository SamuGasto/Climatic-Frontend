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
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { ThemeSwitch } from "../theme-switch";

export default function NavbarComponent() {
  return (
    <Navbar className="flex w-full shadow-sm shadow-black dark:shadow-white justify-between flex self-center">
      <NavbarBrand className="flex items-center">
        <Image src="/logo.png" width={60} height={55} radius="none" />
        <p className="font-bold text-inherit ml-3">CLIMATIC</p>
      </NavbarBrand>
      <NavbarContent className="flex gap-2 sm:gap-1 md:gap-3 justify-end items-center">
        <div className="hidden md:flex max-w-md gap-3">
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
              Preguntas Frecuentes
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/about">
              Sobre nosotros
            </Link>
          </NavbarItem>
        </div>
        <div className="md:hidden">
          <Dropdown>
            <DropdownTrigger>
              <Button>
                Menu
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem>
                <Link color="foreground" href="/">
                  Dashboard
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link color="foreground" href="/visualizer">
                  Re-Análisis
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link color="foreground" href="/faq">
                  Preguntas Frecuentes
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link color="foreground" href="/about">
                  Sobre nosotros
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </NavbarContent>
      <NavbarItem>
        <ThemeSwitch />
      </NavbarItem>
    </Navbar>
  );
}