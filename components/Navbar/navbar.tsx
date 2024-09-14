"use client";
import React from "react";
import {Image,Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function navbar() {
  return (
  <Navbar className="bg-white shadow-md">
   <Navbar position="static">
    <NavbarBrand>
        <Image src="/logo.png" width={60} height={55}/>        
        <p className="font-bold text-inherit">CLIMATIC</p>    
        </NavbarBrand>       
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
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
