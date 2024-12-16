import React from "react";
import Acordeon from "@/components/Acordeon/acordeon";
import { Divider } from "@nextui-org/react";

export default function Faq() {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <section className="flex flex-col h-full w-full md:w-2/3 gap-4">
        <h1 className="text-center text-4xl font-bold ">
          Preguntas frecuentes
        </h1>
        <Divider />
        <section className="flex flex-col w-full h-full items-center justify-start">
          <div className="flex flex-row md:w-3/4 w-full md:px-10 pb-10">
            <Acordeon />
          </div>
        </section>
      </section>
    </div>
  );
}
