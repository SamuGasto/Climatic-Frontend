import { Button } from "@nextui-org/button";
import React from "react";

interface PropType {
  accionCrearNuevoTablero: () => void;
}

function NoBoard(props: PropType) {
  const { accionCrearNuevoTablero } = props;
  return (
    <div className="flex flex-col w-full h-full justify-center align-middle items-center gap-10">
      <h1 className="flex w-1/3 font-bold text-6xl text-center">
        Todavía no has creado ningún tablero...
      </h1>
      <Button
        onPress={() => {
          accionCrearNuevoTablero();
        }}
        color="primary"
        size="lg"
      >
        Crear Tablero
      </Button>
    </div>
  );
}

export default NoBoard;
