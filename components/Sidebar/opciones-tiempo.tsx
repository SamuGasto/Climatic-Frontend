import React, { use, useState } from "react";
import SeleccionHora from "./time-input";
import Desplegable from "@/components/Sidebar/select";
import FechaRango from "./fecha-rango";
import SeleccionFecha from "./seleccion-fecha";

type Props = {
  desabilitado: boolean;
  setFecha: React.Dispatch<React.SetStateAction<string[]>>;
  setHora: React.Dispatch<React.SetStateAction<string>>;
  setTypeChart: React.Dispatch<React.SetStateAction<string>>;
  typeChart: string;
};

const OpcionesTiempo = (props: Props) => {
  const { desabilitado, setFecha, setHora, setTypeChart, typeChart } = props;

  return (
    <div className="flex flex-col gap-3 w-full">
      <p className="flex place-content-center">Tipo de gráfico</p>

      <Desplegable
        elementos={[
          { key: "heatmap", label: "Mapa de calor" },
          { key: "line", label: "Serie de tiempo" },
        ]}
        titulo="Gráfico"
        explicacion="Seleccione el tipo de gráfico"
        desabilitado={desabilitado}
        onSelect={(value) => setTypeChart(value)}
      />

      {typeChart == "heatmap" ? (
        <SeleccionFecha desabilitado={desabilitado} setFecha={setFecha} />
      ) : null}

      {typeChart == "heatmap" ? (
        <SeleccionHora desabilitado={desabilitado} setHora={setHora} />
      ) : null}

      {typeChart == "line" ? <FechaRango setFecha={setFecha} /> : null}
    </div>
  );
};

export default OpcionesTiempo;
