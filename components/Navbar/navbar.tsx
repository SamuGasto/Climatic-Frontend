"use client";
import React from "react";
import {Image,Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function navbar() {
  return (
  <Navbar className="flex w-full shadow-md">
   <Navbar position="static">
    <NavbarBrand>
        <Image src="/logo.png" width={60} height={55}/>        
        <p className="p-5 font-bold text-inherit">DiDema</p>    
        </NavbarBrand>       
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarItem isActive>
            <Link color="foreground" href="#">
            CLIMATIC
            </Link>
          </NavbarItem>
        <NavbarItem> 
          <Link color="foreground" href="#">
           Re-Analisís
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
          </NavbarContent>
          <NavbarItem className="hidden lg:flex">       
          </NavbarItem>
        <NavbarItem>
      </NavbarItem>
      </Navbar> 
    </Navbar>
  );
}      
