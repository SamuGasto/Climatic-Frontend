import React from "react";
import Deslizador from "./deslizador";
import Tooltip from "@/components/Tooltip/tooltip";

type Props = {
  setLatitud: (newLatitud: number[]) => void;
  setLongitud: (newLongitud: number[]) => void;
  deshabilitado: boolean;
};

const OpcionesArea = (props: Props) => {
  const { setLatitud, setLongitud, deshabilitado } = props;

  const modificarLatitud = (valor: number | number[]) => {
    if (Array.isArray(valor)) {
      setLatitud(valor);
    } else {
      setLatitud([valor, valor]);
    }
  };

  const modificarLongitud = (valor: number | number[]) => {
    if (Array.isArray(valor)) {
      setLongitud(valor);
    } else {
      setLongitud([valor, valor]);
    }
  };

  return (
    <div className="flex w-full flex-col gap-3 items-center">
      <div className="flex items-center justify-center relative">
        <p className="flex place-content-center">Selección del área</p>
        <Tooltip color="primary" texto="Latitud y longitud son sólo ajustables para series de tiempo." txtBoton="?"/>
      </div>
      
      <Deslizador
        label="Latitud"
        maximo={-34}
        minimo={-35}
        step={0.25}
        defaultValue={-34}
        onChangeEnd={(number) => modificarLatitud(number)}
        deshabilitado={deshabilitado}
      />

      <Deslizador
        label="Longitud"
        maximo={110}
        minimo={108}
        step={0.25}
        defaultValue={108}
        onChangeEnd={(number) => modificarLongitud(number)}
        deshabilitado={deshabilitado}
      />
    </div>
  );
};

export default OpcionesArea;
