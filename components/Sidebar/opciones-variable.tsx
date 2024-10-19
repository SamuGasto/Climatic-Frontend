import React, { useState } from "react";
import Desplegable from "./select";
import Slider2 from "./slider2";
import { variables } from "@/config/variables";
import { componentes } from "@/config/componente";
import { varComponente } from "@/config/var_componente";
import { varConAltura } from "@/config/var_con_altura";
import { varConTiempo } from "@/config/var_con_tiempo";

type Props = {
  setHayTiempo: React.Dispatch<React.SetStateAction<boolean>>;
  setVariable: React.Dispatch<React.SetStateAction<string>>;
  setNivel: React.Dispatch<React.SetStateAction<number>>;
};

export default function OpcionesVariable(props: Props) {
  const { setHayTiempo, setVariable, setNivel } = props;

  const [hayAltura, sethayAltura] = useState(false);
  const [hayComponente, sethayComponente] = useState(false);
  const [componente, setComponente] = useState("");
  const [vari, setVari] = useState("");

  const definirVariable = (variable: string, componente: string) => {
    switch (variable) {
      case "u":
        if (componente === "u") {
          return "u";
        } else {
          return "v";
        }
      case "u10":
        if (componente === "u") {
          return "u10";
        } else {
          return "v10";
        }
    }
    return "Error";
  };

  const handleVariable = (key: string) => {
    setVari(key);
    if (varComponente.includes(key)) {
      key = definirVariable(key, componente);
    }
    setVariable(key);

    {
      varConAltura.includes(key) ? sethayAltura(true) : sethayAltura(false);
    }

    {
      varComponente.includes(key)
        ? sethayComponente(true)
        : sethayComponente(false);
    }

    {
      varConTiempo.includes(key) ? setHayTiempo(true) : setHayTiempo(false);
    }
  };

  const handleComponente = (key: string) => {
    setComponente(key);
    key = definirVariable(vari, key);
    setVariable(key);
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <Desplegable
        titulo="Variable"
        explicacion="Elija la variable que desea graficar"
        elementos={variables}
        onSelect={handleVariable}
      />

      {hayAltura ? <Slider2 setNivel={setNivel} /> : null}

      {hayComponente ? (
        <Desplegable
          titulo="Componente del viento"
          explicacion="Elija el componente del viento"
          elementos={componentes}
          onSelect={handleComponente}
          valPorDefecto={"u"}
        />
      ) : null}
    </div>
  );
}
