"use client";
import React, { useState } from "react";
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
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar className="flex w-full shadow-sm shadow-black dark:shadow-white justify-evenly">
      {/* Marca / Logo */}
      <NavbarBrand className="flex items-center">
        <Image src="/logo2.png" width={50} height={50} radius="none" />
        <p className="font-bold text-inherit ml-3">CLIMATIC</p>
      </NavbarBrand>

      {/* Botón hamburguesa visible solo en pantallas pequeñas */}
      <div className="sm:hidden flex items-center">
        <Button onClick={toggleMenu}>
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </Button>
      </div>

      {/* Contenido del navbar: visible solo en pantallas grandes */}
      <NavbarContent className="hidden sm:flex gap-4 items-center">
        <NavbarItem isActive>
          <Link color="foreground" href="/">Dashboard</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/visualizer">Re-Análisis</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/faq">Preguntas frecuentes</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about">Sobre nosotros</Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      {/* Menú sobrepuesto: visible en pantallas pequeñas */}
      {isOpen && (
        <div className="rounded-3xl absolute top-20 left-20 w-auto h-auto bg-white dark:bg-gray-950 border-2 dark:border-white border-black flex flex-col items-center justify-start py-6 px-6 animate-appearance-in sm:hidden z-40">


          <NavbarItem isActive>
            <Link href="/" className=" dark:text-white text-black transition-colors text-2xl mb-3" onClick={toggleMenu}>
              Dashboard
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/visualizer" className="dark:text-white text-black transition-colors text-xl mb-4" onClick={toggleMenu}>
              Re-Análisis
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/faq" className="dark:text-white text-black transition-colors text-xl mb-4" onClick={toggleMenu}>
              Preguntas frecuentes
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/about" className="dark:text-white text-black transition-colors text-xl mb-4" onClick={toggleMenu}>
              Sobre nosotros
            </Link>
          </NavbarItem>
          <NavbarItem>
            <ThemeSwitch />
          </NavbarItem>
        </div>
      )}
    </Navbar>
  );
}
