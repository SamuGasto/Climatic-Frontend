import { DateRangePicker } from "@nextui-org/react";
import React, { useState } from "react";
import SeleccionHora from "./time-input";
import Desplegable from "@/components/Sidebar/select";
import FechaRango from "./fecha-rango";
import { Consulta } from "@/types/consulta";
import SeleccionFecha from "./seleccion-fecha";

type Props = {
  desabilitado: boolean;
  setConsulta: (consulta: Consulta) => void;
  consultaOriginal: Consulta;
};

const OpcionesTiempo = (props: Props) => {
  const { setConsulta, desabilitado, consultaOriginal } = props;

  const [tipoGrafico, setTipoGrafico] = useState("");

  const handleSelect = (key: string) => {
    setTipoGrafico(key);
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <p className="flex place-content-center">Tipo de gráfico</p>

      <Desplegable
        elementos={[
          { key: "0", label: "Mapa de calor" },
          { key: "1", label: "Serie de tiempo" },
        ]}
        titulo="Gráfico"
        explicacion="Seleccione el tipo de gráfico"
        desabilitado={desabilitado}
        onSelect={handleSelect}
      />

      {tipoGrafico == "0" ? (
        <SeleccionFecha setConsulta={setConsulta} desabilitado={desabilitado} />
      ) : null}

      {tipoGrafico == "0" ? (
        <SeleccionHora
          setConsulta={setConsulta}
          consultaOriginal={consultaOriginal}
          desabilitado={desabilitado}
        />
      ) : null}

      {tipoGrafico == "1" ? <FechaRango setConsulta={setConsulta} /> : null}
    </div>
  );
};

export default OpcionesTiempo;
