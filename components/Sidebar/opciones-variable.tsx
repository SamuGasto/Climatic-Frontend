import React, { useState } from "react";
import Desplegable from "./select";
import Slider2 from "./slider2";
import { variables } from "@/config/variables";
import { componentes } from "@/config/componente";
import { varComponente } from "@/config/var_componente";
import { varConAltura } from "@/config/var_con_altura";
import { varConTiempo } from "@/config/var_con_tiempo";
import { tamañoVegetacion } from "@/config/tamaño_vegetacion";
import { varTamañoVegetacion } from "@/config/var_tamaño_vegetacion";
import { tiposGraficos } from "@/config/tipos_de_graficos";

type Props = {
  setHayTiempo: React.Dispatch<React.SetStateAction<boolean>>;
  setVariable: React.Dispatch<React.SetStateAction<string>>;
  setNivel: React.Dispatch<React.SetStateAction<number>>;
  setTypeChart: React.Dispatch<React.SetStateAction<string>>;
};

export default function OpcionesVariable(props: Props) {
  const { setHayTiempo, setVariable, setNivel, setTypeChart } = props;

  const [hayAltura, sethayAltura] = useState(false);
  const [hayComponente, sethayComponente] = useState(false);
  const [componente, setComponente] = useState("u");
  const [hayTamañoVegetacion, setHayTamañoVegetacion] = useState(false);
  const [tamañoVegetacionActual, setTamañoVegetacionActual] = useState("h");
  const [vari, setVari] = useState("");

  const definirVariable = (variable: string, subVariable: string) => {
    switch (variable) {
      case "u":
        if (subVariable === "u") {
          return "u";
        } else {
          return "v";
        }
      case "u10":
        if (subVariable === "u") {
          return "u10";
        } else {
          return "v10";
        }

      case "cvh":
        if (subVariable === "h") {
          return "cvh";
        } else {
          return "cvl";
        }
      case "tvh":
        if (subVariable === "l") {
          return "tvl";
        } else {
          return "tvh";
        }
    }
    return "Error";
  };

  const handleVariable = (key: string) => {
    setVari(key);
    if (varComponente.includes(key)) {
      key = definirVariable(key, componente);
    } else if (varTamañoVegetacion.includes(key)) {
      key = definirVariable(key, tamañoVegetacionActual);
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
      varTamañoVegetacion.includes(key)
        ? setHayTamañoVegetacion(true)
        : setHayTamañoVegetacion(false);
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

  const handleTamañoVegetacion = (key: string) => {
    setTamañoVegetacionActual(key);
    key = definirVariable(vari, key);
    setVariable(key);
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <Desplegable
        elementos={tiposGraficos}
        titulo="Gráfico"
        explicacion="Seleccione el tipo de gráfico"
        onSelect={(value) => setTypeChart(value)}
      />

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

      {hayTamañoVegetacion ? (
        <Desplegable
          titulo="Tamaño de la vegetación"
          explicacion="Elija el tamaño de la vegetación"
          elementos={tamañoVegetacion}
          onSelect={handleTamañoVegetacion}
          valPorDefecto={"h"}
        />
      ) : null}
    </div>
  );
}
