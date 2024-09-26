import { SearchIcon } from "@/components/icons";
import { Input } from "@nextui-org/input";
import React from "react";

function Search() {
  return (
    <Input
      startContent={<SearchIcon />}
      isClearable
      className="w-1/6"
      placeholder="Nombre gráfico..."
    ></Input>
  );
}

export default Search;
