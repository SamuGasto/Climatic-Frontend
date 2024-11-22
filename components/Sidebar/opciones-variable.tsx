import React, { useEffect, useState } from "react";
import Desplegable from "./select";
import Slider2 from "./slider2";
import { variables } from "@/config/variables";
import { varConAltura } from "@/config/var_con_altura";
import { varConTiempo } from "@/config/var_con_tiempo";
import { varTamañoVegetacion } from "@/config/subvariables/var_tamaño_vegetacion";
import { tiposGraficos } from "@/config/tipos_de_graficos";
import Desplegable2 from "./desplegable2";
import { mapaVariables } from "@/config/mapa-variables";
import Deslizador from "./deslizador";
import { varContenidoVolumetrico } from "@/config/subvariables/var_contenido_volumetrico";
import { typeChart } from "@/types/chart";
import {
  unidadesCoverturaNubes,
  unidadesHumedadEspecifica,
  unidadesPrecipitacion,
  unidadesPresionNivelDelMar,
  unidadesPresionSuperficie,
  unidadesRadiacionSolar,
  unidadesTemperatura,
  unidadesVelocidadVertical,
  unidadesViento,
} from "@/config/subvariables/opciones_unidades";

type elemento = {
  key: string;
  label: string;
};

type Props = {
  setHayTiempo: (newTiempo: boolean) => void;
  setVariable: (newVar: string) => void;
  setVariable2: (newVar: string) => void;
  setNivel: (newNivel: number | null) => void;
  setTypeChart: (newType: typeChart) => void;
  setUnidadMedida: (newUnidad: string) => void;
  setUnidadMedida2: (newUnidad: string) => void;
  setCalculoDatos: (newCalculoDatos: string) => void;
  typeChart: string;
};

export default function OpcionesVariable(props: Props) {
  const {
    setHayTiempo,
    setVariable,
    setVariable2,
    setNivel,
    setTypeChart,
    typeChart,
    setUnidadMedida,
    setUnidadMedida2,
  } = props;

  const [hayAltura, sethayAltura] = useState(false);
  const [hayAltura2, sethayAltura2] = useState(false);
  const [tamañoVegetacionActual, setTamañoVegetacionActual] = useState("h");

  const [vari, setVari] = useState("");
  const [vari2, setVari2] = useState("");
  const [unidadMedidaDefecto, setUnidadMedidaDefecto] = useState("K");
  const [unidadMedidaDefecto2, setUnidadMedidaDefecto2] = useState("K");
  const [unidades, setUnidades] = useState<{ key: string; label: string }[]>(
    []
  );
  const [unidades2, setUnidades2] = useState<{ key: string; label: string }[]>(
    []
  );

  const ObtenerUnidades = (
    variable: string
  ): { key: string; label: string }[] => {
    switch (variable) {
      case "u":
        return unidadesViento;
      case "u10":
        return unidadesViento;
      case "t":
        return unidadesTemperatura;
      case "t2m":
        return unidadesTemperatura;
      case "msl":
        return unidadesPresionNivelDelMar;
      case "q":
        return unidadesHumedadEspecifica;
      case "tisr":
        return unidadesRadiacionSolar;
      case "tcc":
        return unidadesCoverturaNubes;
      case "sp":
        return unidadesPresionSuperficie;
      case "tcc":
        return unidadesCoverturaNubes;
      case "w":
        return unidadesVelocidadVertical;
      case "tp":
        return unidadesPrecipitacion;
      default:
        return [];
    }
  };
  const definirVariable = (variable: string, subVariable: string) => {
    switch (variable) {
      case "u":
        if (subVariable === "u") {
          return "u";
        } else if (subVariable === "v") {
          return "v";
        } else {
          return "vu";
        }
      case "u10":
        if (subVariable === "u") {
          return "u10";
        } else if (subVariable === "v") {
          return "v10";
        } else {
          return "vu10";
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

      case "swvl":
        if (subVariable === "1") {
          return "swvl1";
        } else if (subVariable === "2") {
          return "swvl2";
        } else if (subVariable === "3") {
          return "swvl3";
        } else {
          return "swvl4";
        }
    }
    return "Error";
  };

  const handleVariable = (key: string) => {
    setVari(key);
    if (varTamañoVegetacion.includes(key)) {
      key = definirVariable(key, tamañoVegetacionActual);
    }
    setVariable(key);

    varConAltura.includes(key) ? sethayAltura(true) : sethayAltura(false);

    varConTiempo.includes(key) ? setHayTiempo(true) : setHayTiempo(false);
  };

  const handleVariable2 = (key: string) => {
    setVari2(key);
    if (varTamañoVegetacion.includes(key)) {
      key = definirVariable(key, tamañoVegetacionActual);
    }
    setVariable2(key);

    varConAltura.includes(key) ? sethayAltura2(true) : sethayAltura2(false);
  };

  const [elementosParaGrafico, setElementosParaGrafico] =
    useState<elemento[]>(variables);

  function esTypeChart(valor: any): valor is typeChart {
    const valoresPermitidos: typeChart[] = [
      "contorno",
      "vectoriales",
      "lineas",
      "dispersion",
      "polares",
    ];
    return valoresPermitidos.includes(valor);
  }

  const cambiarTipoGrafico = (valor: string) => {
    if (esTypeChart(valor)) {
      setTypeChart(valor);

      let listAux1: elemento[] = [];

      variables.forEach((elemento) => {
        if (mapaVariables[valor].includes(elemento.key)) {
          listAux1.push({ key: elemento.key, label: elemento.label });
        }
      });

      setElementosParaGrafico(listAux1);
    }
  };

  useEffect(() => {
    if (vari == "") return;
    const unidades = ObtenerUnidades(vari);
    setUnidades(unidades);
    setUnidadMedidaDefecto(unidades[0].key);
  }, [vari]);

  useEffect(() => {
    if (vari2 == "") return;
    const unidades = ObtenerUnidades(vari2);
    setUnidades2(unidades);
    setUnidadMedidaDefecto2(unidades[0].key);
  }, [vari2]);

  return (
    <div className="flex flex-col gap-3 w-full">
      <Desplegable
        elementos={tiposGraficos}
        titulo="Gráfico"
        explicacion="Seleccione el tipo de gráfico"
        onSelect={(value) => cambiarTipoGrafico(value)}
      />

      {typeChart === "dispersion" ? (
        <div className="flex flex-col gap-3 w-full">
          {"Variable 1"}
          <hr />
        </div>
      ) : null}

      <Desplegable2
        titulo="Variable"
        explicacion="Elija la variable que desea graficar"
        elementos={variables}
        onSelect={handleVariable}
        elementosParaGrafico={elementosParaGrafico}
      />

      {typeChart !== "dispersion" && hayAltura ? (
        <Slider2 setNivel={setNivel} />
      ) : null}

      {vari && (
        <Desplegable
          titulo="Unidad de medida"
          explicacion="Elija la unidad de medida"
          elementos={unidades}
          onSelect={setUnidadMedida}
        />
      )}

      {typeChart === "dispersion" ? (
        <div className="flex flex-col gap-3 w-full">
          {"Variable 2"}

          <hr />

          <Desplegable2
            titulo="Variable"
            explicacion="Elija la variable que desea graficar"
            elementos={variables}
            onSelect={handleVariable2}
            elementosParaGrafico={elementosParaGrafico}
          />

          {vari2 ? (
            <Desplegable
              titulo="Unidad de medida"
              explicacion="Elija la unidad de medida"
              elementos={unidades2}
              onSelect={setUnidadMedida2}
            />
          ) : null}

          {hayAltura ? (
            <div className="flex flex-col gap-3 w-full">
              {"Ambas variables"}

              <hr />

              <Slider2 setNivel={setNivel} />
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
