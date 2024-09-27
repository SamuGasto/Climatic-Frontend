"use client";
import React from "react";
<<<<<<< HEAD
import {
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
=======
import {Image,Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
>>>>>>> 505d993a0c98e5aff6e7f9f88a9402bf7315ca38
import { ThemeSwitch } from "../theme-switch";

export default function navbar() {
  return (
<<<<<<< HEAD
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
=======
    <Navbar className="shadow-sm" isBlurred={false}>
      <NavbarBrand>
        <Image src="/logo.png" width={60} height={55}/>        
        <p className="p-5 font-bold text-inherit">DiDema</p>    
      </NavbarBrand>       
      <NavbarContent className="flex w-full gap-4 justify-self-end" justify="end">
        <NavbarItem isActive>
            <Link color="foreground" href="/">
            CLIMATIC
            </Link>
        </NavbarItem>
        <NavbarItem> 
          <Link color="foreground" href="/visualizer">
           Re-Análisis
           </Link>
        </NavbarItem>
        <NavbarItem>
>>>>>>> 505d993a0c98e5aff6e7f9f88a9402bf7315ca38
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
        <NavbarItem className="hidden lg:flex"></NavbarItem>
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
<<<<<<< HEAD
      </Navbar>
    </Navbar>
=======
        <NavbarItem>
          <Link color="foreground" href="#">         
          Sobre Nosotros
          </Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitch/>
        </NavbarItem>
      </NavbarContent>
    </Navbar> 
>>>>>>> 505d993a0c98e5aff6e7f9f88a9402bf7315ca38
  );
}
