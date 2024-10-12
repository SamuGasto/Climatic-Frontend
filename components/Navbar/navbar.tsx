"use client";
import React,{useState} from "react";
import {
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link
} from "@nextui-org/react";
import { ThemeSwitch } from "../theme-switch";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Dashboard/Sidebar/sidebar";
import { useTheme } from "next-themes";
import { CloseIcon, MenuHamburgerIcon } from "../icons";

export default function NavbarComponent() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <Navbar
      className="flex w-full p-1 px-6 shadow-md dark:border-white dark:border-b-1"
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
      <NavbarBrand>
        <Image src="/logo.png" width={60} height={55} />
        <p className="font-bold text-inherit ml-3">CLIMATIC</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 " justify="end">
        <NavbarItem isActive={isActive("/")}>
          <Link color="foreground" href="/">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive("/visualizer")}>
          <Link color="foreground" href="/visualizer">
            Re-Analisís
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive("/questions")}>
          <Link color="foreground" href="#" aria-current="page">
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
