"use client";
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function navbar() {
  return (
    <Navbar position="static">
      <NavbarBrand>
        <p className="font-bold text-inherit">CLIMATIC</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link color="foreground" href="#">
            Re-Analisís
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground" href="#" aria-current="page">
            Preguntas Frecuentes
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Sobre Nosotros
          </Link>
        </NavbarItem>
      </NavbarContent>
        <NavbarItem className="hidden lg:flex">
        </NavbarItem>
        <NavbarItem>
        </NavbarItem>
    </Navbar>
  );
}