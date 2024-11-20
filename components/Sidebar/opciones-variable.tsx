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
  setNivel: (newNivel: number | null) => void;
  setTypeChart: (newType: typeChart) => void;
  setUnidadMedida: (newUnidad: string) => void;
  setCalculoDatos: (newCalculoDatos: string) => void;
  typeChart: string;
};

export default function OpcionesVariable(props: Props) {
  const {
    setHayTiempo,
    setVariable,
    setNivel,
    setTypeChart,
    typeChart,
    setUnidadMedida,
    setCalculoDatos,
  } = props;

  const [hayAltura, sethayAltura] = useState(false);
  const [tamañoVegetacionActual, setTamañoVegetacionActual] = useState("h");
  const [hayContenidoVolumetrico, setHayContenidoVolumetrico] = useState(false);
  const [contenidoVolumetrico, setContenidoVolumetrico] = useState("1");

  const [vari, setVari] = useState("");
  const [unidadMedidaDefecto, setUnidadMedidaDefecto] = useState("K");
  const [unidades, setUnidades] = useState<{ key: string; label: string }[]>(
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
    } else if (varContenidoVolumetrico.includes(key)) {
      key = definirVariable(key, contenidoVolumetrico);
    }
    setVariable(key);

    varConAltura.includes(key) ? sethayAltura(true) : sethayAltura(false);

    varContenidoVolumetrico.includes(key)
      ? setHayContenidoVolumetrico(true)
      : setHayContenidoVolumetrico(false);

    varConTiempo.includes(key) ? setHayTiempo(true) : setHayTiempo(false);
  };

  const handleContenidoVolumetrico = (valor: number | number[]) => {
    let key;
    if (Array.isArray(valor)) {
      key = String(valor[0]);
    } else {
      key = String(valor);
    }
    setContenidoVolumetrico(key);

    key = definirVariable(vari, key);
    setVariable(key);
  };

  const [elementosParaGrafico, setElementosParaGrafico] =
    useState<elemento[]>(variables);
  const [elementosOtroGrafico, setElementosOtroGrafico] = useState<elemento[]>(
    []
  );

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
      let listAux2: elemento[] = [];

      variables.forEach((elemento) => {
        if (mapaVariables[valor].includes(elemento.key)) {
          listAux1.push({ key: elemento.key, label: elemento.label });
        } else {
          listAux2.push({ key: elemento.key, label: elemento.label });
        }
      });

      setElementosParaGrafico(listAux1);
      setElementosOtroGrafico(listAux2);
    }
  };

  useEffect(() => {
    if (vari == "") return;
    const unidades = ObtenerUnidades(vari);
    setUnidades(unidades);
    setUnidadMedidaDefecto(unidades[0].key);
  }, [vari]);

  return (
    <div className="flex flex-col gap-3 w-full">
      <Desplegable
        elementos={tiposGraficos}
        titulo="Gráfico"
        explicacion="Seleccione el tipo de gráfico"
        onSelect={(value) => cambiarTipoGrafico(value)}
      />

      <Desplegable2
        titulo="Variable"
        explicacion="Elija la variable que desea graficar"
        elementos={variables}
        onSelect={handleVariable}
        typeChart={typeChart}
        elementosParaGrafico={elementosParaGrafico}
        elementosOtroGrafico={elementosOtroGrafico}
      />

      {hayAltura ? <Slider2 setNivel={setNivel} /> : null}

      {hayContenidoVolumetrico ? (
        <Deslizador
          label="Capa del suelo"
          minimo={1}
          maximo={4}
          step={1}
          defaultValue={1}
          onChangeEnd={handleContenidoVolumetrico}
          deshabilitado={false}
        />
      ) : null}

      {vari && (
        <Desplegable
          titulo="Unidad de medida"
          explicacion="Elija la unidad de medida"
          elementos={unidades}
          onSelect={setUnidadMedida}
        />
      )}
    </div>
  );
}
