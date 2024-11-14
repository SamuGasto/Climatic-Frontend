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
          <Link href="/">
          <Image src="/logo2.png" width={50} height={50} radius="none" />
          </Link>
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