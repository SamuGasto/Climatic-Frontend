"use client";
import React from "react";
import CardMember from "@/components/CardMember/card-member";
import { Image } from "@nextui-org/react";

export default function About() {
  return (
    <div className="justify-items-center -mt-10">
      <h1 className="text-center text-4xl font-bold mb-10 mt-10">
        Sobre Nosotros
      </h1>
      {/* Imagen de la empresa */}
      <div className="flex justify-center mb-3">
        <Image
          src="Di-Dema.png" // Ruta de la imagen del logo
          alt="Logo de Di-Dema"
          width={150}
          height={150}
          className="rounded-lg shadow-md"
        />
      </div>
      <p className="text-center text-3xl font-bold">Di-Dema</p>
      <p className= "text-center text-xl mb-4 italic">Web Development</p>

      <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-5 md:gap-y-16 justify-items-center p-11 mx-0 lg:mx-72 mt-4 mb-14">
        <CardMember
          nombre="Mauricio Gregorio de las Heras"
          rol="Scrum master"
          main_text="Estudiante de Ingeniería civil en Computación."
          bottom_text="Universidad de O'Higgins."
          color="amarillo"
          link_ref="http://www.linkedin.com/in/mauricio-gregorio-de-las-heras"
          src="/Di-Dema-members/Mauricio_picture.jpeg"
        />
        <CardMember
          nombre="Samuel Ramírez"
          rol="Developer"
          main_text="Estudiante de Ingeniería civil en Computación."
          bottom_text="Universidad de O'Higgins."
          color="verde"
          link_ref="http://www.linkedin.com/in/samuelramirezzuniga"
          src="/Di-Dema-members/Samuel_picture.jpeg"
        />
        <CardMember
          nombre="Nicolás Muñoz"
          rol="Developer"
          main_text="Estudiante de Ingeniería civil en Computación."
          bottom_text="Universidad de O'Higgins."
          color="rojo"
          link_ref="https://www.linkedin.com/in/nicol%C3%A1s-mu%C3%B1oz-sanchez-44824228b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          src="/Di-Dema-members/Avatar.png"
        />
        <CardMember
          nombre="Bayron Astudillo"
          rol="Tester - Developer"
          main_text="Estudiante de Ingeniería civil en Computación."
          bottom_text="Universidad de O'Higgins."
          color="morado"
          link_ref="https://www.linkedin.com/in/bayron-astudillo-7a446128a/"
          src="/Di-Dema-members/Bayron_picture.jpeg"
        />
      </section>
    </div>
  );
}
