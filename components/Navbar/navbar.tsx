"use client";
import React from "react";
import {Image,Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { ThemeSwitch } from "../theme-switch";

export default function navbar() {
  return (
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
            <Link color="foreground" href="#" aria-current="page">
            Preguntas Frecuentes
          </Link>        
        </NavbarItem>
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
  );
}      
