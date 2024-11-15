import React from "react";
import Deslizador from "./deslizador";

type Props = {
  setLatitud: React.Dispatch<React.SetStateAction<number>>;
  setLongitud: React.Dispatch<React.SetStateAction<number>>;
  deshabilitado: boolean;
};

const OpcionesArea = (props: Props) => {
  const { setLatitud, setLongitud, deshabilitado } = props;

  const modificarLatitud = (valor: number | number[]) => {
    if (Array.isArray(valor)) {
      setLatitud(valor[0]);
    } else {
      setLatitud(valor);
    }
  };

  const modificarLongitud = (valor: number | number[]) => {
    if (Array.isArray(valor)) {
      setLongitud(valor[0]);
    } else {
      setLongitud(valor);
    }
  };

  return (
    <div className="flex w-full flex-col gap-3">
      <p className="flex place-content-center">Selección del área</p>
      <Deslizador
        label="Latitud"
        maximo={-34}
        minimo={-35}
        step={0.25}
        defaultValue={-34}
        onChangeEnd={modificarLatitud}
        deshabilitado={deshabilitado}
      />

      <Deslizador
        label="Longitud"
        maximo={110}
        minimo={108}
        step={0.25}
        defaultValue={108}
        onChangeEnd={modificarLongitud}
        deshabilitado={deshabilitado}
      />
    </div>
  );
};

export default OpcionesArea;
