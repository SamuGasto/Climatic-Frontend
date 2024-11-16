"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ThemeSwitch } from "../theme-switch";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Divider } from "@nextui-org/react";
import Sidebar from "../Dashboard/Sidebar/sidebar";

type MenuItems = {
  name: string;
  route: string;
};

export default function NavbarComponent() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems: MenuItems[] = [
    { name: "Dashboard", route: "/" },
    { name: "Re-Análisis", route: "/visualizer" },
    { name: "Q&A", route: "/faq" },
    { name: "Sobre Nosotros", route: "/about" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <Navbar
      className="flex fixed w-full p-1 shadow-md border-black border-b-1 dark:border-white dark:border-b-1"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={(value) => setIsMenuOpen(value)}
      position="static"
      maxWidth="full"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand className="flex-1 flex-row">
          <Link href = "/"> 
          <Image alt="Logo" src="/logo2.png" width={50} height={50} />
           </Link>
          <p className="font-bold text-inherit ml-3">CLIMATIC</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem
            key={`${item.name}-${index}`}
            isActive={isActive(item.route)}
          >
            <Link href={item.route}>{item.name}</Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="md:hidden" justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item: MenuItems, index) => (
          <NavbarMenuItem
            isActive={isActive(item.route)}
            key={`${item}-${index}`}
          >
            <Link
              href={item.route}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <Divider />
        {isActive("/") && <Sidebar inNavMenu={true} />}
      </NavbarMenu>
    </Navbar>
  );
}
