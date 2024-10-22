"use client";
import React from "react";
import Acordeon from "@/components/Acordeon/acordeon";

export default function Faq() {
    return (
      <div className="justify-items-center -mt-10">
        <h1 className="text-center text-4xl font-bold mb-6 mt-10">Preguntas frecuentes</h1>
        <hr className="my-8 h-1 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
        <section className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-row md:w-3/4 w-full mb-20">
            <Acordeon />
          </div>
        </section>
      </div>
    );
  }
