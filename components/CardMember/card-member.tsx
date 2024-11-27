"use client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

interface MemberCardProps {
  src?: string; // Ruta de la imagen
  nombre: string;
  rol: string;
  main_text: string;
  bottom_text?: string;
  link_ref?: string;
  color?: string; // Puede ser cualquier string, pero en este caso no afecta al diseño
}

export default function CardMember({
  src,
  nombre,
  rol,
  main_text,
  bottom_text,
  link_ref,
}: MemberCardProps) {
  return (
    <Card className="max-w-[600px] border-principal border-2" fullWidth shadow="lg">
      <CardHeader className="flex gap-5 px-6">
        {/* Imagen local reemplaza al Avatar */}
        {src && (
          <Image
            isZoomed
            src={src}
            alt={`Imagen de ${nombre}`}
            width={60}
            height={60}
            className="rounded-full"
          />
        )}
        <div className="flex flex-col">
          <p className="text-xl sm:text-2xl">{nombre}</p>
          <p className="text-lg sm:text-xl text-default-500">{rol}</p>
        </div>
      </CardHeader>
      <Divider className="bg-black dark:bg-white" />
      <CardBody>
        <p className="sm:text-2xl text-lg py-4">{main_text}</p>
        <p className="sm:text-lg text-sm">{bottom_text}</p>
      </CardBody>
      <Divider className="bg-black dark:bg-white" />
      <CardFooter>
        <div className="flex flex-col">
          <Link isExternal showAnchorIcon href={link_ref}>
            Perfil de LinkedIn
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
