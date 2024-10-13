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
  Divider,
} from "@nextui-org/react";
import { ThemeSwitch } from "../theme-switch";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Dashboard/Sidebar/sidebar";
import { useTheme } from "next-themes";
import { CloseIcon, MenuHamburgerIcon } from "../icons";

export default function NavbarComponent() {
  const pathname = usePathname();
  const actualTheme = useTheme();

  const isActive = (path: string) => pathname === path;

  const [isOpen, setIsOpen] = useState(false);
  const [forceRefresh, setForceRefresh] = useState(false);

  function Refresh() {
    setForceRefresh(!forceRefresh);
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar
        className="flex fixed w-full p-1 shadow-md dark:border-white dark:border-b-1"
        classNames={{
          item: [
            "flex",
            "relative",
            "h-full",
            "items-center",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-4",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[2px]",
            "data-[active=true]:after:rounded-[2px]",
            "data-[active=true]:after:bg-primary",
          ],
        }}
        position="static"
        maxWidth="full"
      >
        {/* Marca / Logo */}
        <NavbarBrand className="flex items-center">
          <Image src="/logo2.png" width={50} height={50} radius="none" />
          <p className="font-bold text-inherit ml-3">CLIMATIC</p>
        </NavbarBrand>

        {/* Botón hamburguesa */}
        <div className="sm:hidden flex items-center z-50">
          <Button
            color="primary"
            variant="solid"
            onClick={toggleMenu}
            size="sm"
          >
            {!isOpen ? (
              <MenuHamburgerIcon width={15} />
            ) : (
              <CloseIcon width={15} />
            )}
          </Button>
        </div>

        {/* Contenido del navbar: visible solo en pantallas grandes */}
        <NavbarContent className="hidden sm:flex gap-4 " justify="end">
          <NavbarItem isActive={isActive("/")}>
            <Link color="foreground" href="/">
              Dashboard
            </Link>
          </NavbarItem>
          <NavbarItem isActive={isActive("/visualizer")}>
            <Link color="foreground" href="/visualizer">
              Re-Análisis
            </Link>
          </NavbarItem>
          <NavbarItem isActive={isActive("/faq")}>
            <Link color="foreground" href="/faq">
              Preguntas Frecuentes
            </Link>
          </NavbarItem>
          <NavbarItem isActive={isActive("/about")}>
            <Link color="foreground" href="/about">
              Sobre Nosotros
            </Link>
          </NavbarItem>
          <NavbarItem>
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Fondo oscuro para Sidebar en dispositivos móviles */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-30"
          onClick={toggleMenu} // Cierra el Sidebar al hacer click fuera de él
        ></div>
      )}

      {/* Sidebar para dispositivos pequeños dentro del menú lateral */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 bg-white dark:bg-black shadow-lg border-r-2 border-black dark:border-white`}
      >
        <div className="grid grid-cols-1 items-center m-3 justify-items-start">
          <div className="flex flex-row justify-evenly w-full mb-2 gap-x-16">
            <Image src="/logo2.png" width={50} height={50} radius="none" />
            <ThemeSwitch />
            
          </div>
          <Divider className="my-1 bg-black dark:bg-white" />
          <Link
            className={`text-2xl font-bold mt-3 mb-3 relative ${
              isActive("/") ? "underline underline-offset-4" : ""
            }`}
            style={isActive("/") ? { textDecorationColor: "#5B9279" } : {}}
            color="foreground"
            href="/"
            onClick={toggleMenu}
          >
            {" > "} Dashboard
          </Link>
          <Link
            className={`text-xl mb-1 relative ${
              isActive("/visualizer") ? "underline underline-offset-4" : ""
            }`}
            style={
              isActive("/visualizer") ? { textDecorationColor: "#5B9279" } : {}
            }
            color="foreground"
            href="/visualizer"
            onClick={toggleMenu}
          >
            {" > "} Re-Análisis
          </Link>
          <Link
            className={`text-xl mb-1 relative ${
              isActive("/faq") ? "underline underline-offset-4" : ""
            }`}
            style={isActive("/faq") ? { textDecorationColor: "#5B9279" } : {}}
            color="foreground"
            href="/faq"
            onClick={toggleMenu}
          >
            {" > "} Preguntas Frecuentes
          </Link>
          <Link
            className={`text-xl mb-5 relative ${
              isActive("/about") ? "underline underline-offset-4" : ""
            }`}
            style={isActive("/about") ? { textDecorationColor: "#5B9279" } : {}}
            color="foreground"
            href="/about"
            onClick={toggleMenu}
          >
            {" > "} Sobre Nosotros
          </Link>
          {/* Sidebar in mobile menu */}
          <Divider className="mb-4 bg-black dark:bg-white" />
          <div className="flex flex-col w-full ">
            <h4 className="text-center text-2xl italic mb-3">Tableros</h4>
            <Sidebar refresh={Refresh} isMobile={true} />
          </div>
        </div>
      </div>
    </>
  );
}
