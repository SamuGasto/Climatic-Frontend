"use client";
import React from "react";
import CardMember from "@/components/CardMember/card-member";

export default function About() {
  return(
    <div className="justify-items-center -mt-10">
      <h1 className="text-center text-4xl font-bold mb-2 mt-10">Sobre Nosotros</h1>
      <p className="text-center text-2xl mb-6 italic">Di-Dema</p>
      
      <hr className="my-8 h-1 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-y-16 justify-items-center md:mx-36 mt-4 mb-24">
        <CardMember
          nombre="Mauricio Gregorio de las Heras"
          rol="Scrum master"
          main_text="Estudiante de Ingeniería civil en Computación." 
          bottom_text="Universidad de O'Higgins."
          color="amarillo"
          link_ref="http://www.linkedin.com/in/mauricio-gregorio-de-las-heras"
          src="https://media.licdn.com/dms/image/v2/D4D03AQGX9i8xgXym-A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1693866871592?e=1733961600&v=beta&t=JBpVMRg1WlrTrEOIiKo97ZNPmIko04cykYS7EAi8Psw"
        />
        <CardMember
          nombre="Samuel Ramírez"
          rol="Developer"
          main_text="Estudiante de Ingeniería civil en Computación." 
          bottom_text="Universidad de O'Higgins."
          color="verde"
          link_ref="http://www.linkedin.com/in/samuelramirezzuniga"
          src="https://media.licdn.com/dms/image/v2/D4E03AQHkFJRKTn2I-w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709057890054?e=1733961600&v=beta&t=DgEzJq4s-avt1CuGs8qgfG3IZ11RG06sACXXsis2zpI"
        />
        <CardMember
          nombre="Nicolás Muñoz"
          rol="Developer"
          main_text="Estudiante de Ingeniería civil en Computación." 
          bottom_text="Universidad de O'Higgins."
          color="rojo"
          link_ref="https://www.linkedin.com/in/nicol%C3%A1s-mu%C3%B1oz-sanchez-44824228b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        />
        <CardMember
          nombre="Bayron Astudillo"
          rol="Tester - Developer"
          main_text="Estudiante de Ingeniería civil en Computación." 
          bottom_text="Universidad de O'Higgins."
          color="morado"
          link_ref="https://www.linkedin.com/in/bayron-astudillo-7a446128a/"
          src="https://media.licdn.com/dms/image/v2/D4E03AQFC2aE7jfkYeQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1693004597177?e=1733961600&v=beta&t=VMPuyzaXSvoLxC9XW5dqn4HioM8Xo29dW19LoB1kwto"
        />
      </section>
      </div>
  );
}
