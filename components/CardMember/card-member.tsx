"use client";
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Avatar} from "@nextui-org/react";


interface MemberCardProps {
  src?: string;
  nombre: string;
  rol: string;
  main_text: string;
  bottom_text?: string;
  link_ref?: string;
  color?: string; // Puede ser cualquier string
}

// Mapeo de colores personalizados a los valores aceptados por Avatar
const colorMap: { [key: string]: "default" | "primary" | "secondary" | "success" | "warning" | "danger" } = {
  gris: "default",
  azul: "primary",
  verde: "success",
  rojo: "danger",
  amarillo: "warning",
  morado: "secondary",
};

export default function CardMember({ src, nombre, rol, main_text, bottom_text, link_ref, color = "default" }: MemberCardProps) {
  // Mapeo del color pasado por prop al valor de NextUI correspondiente
  const mappedColor = colorMap[color.toLowerCase()] || "default";

  return (
    <Card className="max-w-[600px]"
          fullWidth
          isHoverable
          shadow="lg">
      <CardHeader className="flex gap-5 md:px-6 px-3">
        <Avatar className="md:w-20 md:h-20 w-14 h-14 ml-1 md:ml-0 absolute md:relative" isBordered color={mappedColor} src={src} radius="full"/>
        <div className="flex flex-col md:ml-6 ml-20">
          <p className="text-xl sm:text-2xl font-bold">{nombre}</p>
          <p className="text-lg sm:text-xl text-default-800 italic">{rol}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="sm:text-2xl text-lg py-4">{main_text}</p>
        <p className="sm:text-lg text-sm">{bottom_text}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="flex flex-col">
          <Link isExternal showAnchorIcon href={link_ref}>
            Perfil de Linkedin
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
