import { SearchIcon } from "@/components/icons";
import { Input } from "@nextui-org/input";
import React from "react";

interface PropType {
  filterQuery: string;
  setFilterQuery: (newFilter: string) => void;
}

function Search(props: PropType) {
  const { filterQuery, setFilterQuery } = props;
  return (
    <Input
      
      startContent={<SearchIcon />}
      isClearable
      className="md:w-1/6 w-auto"
      placeholder="Buscar gráfico..."
      value={filterQuery}
      onValueChange={(newValue) => {
        setFilterQuery(newValue);
      }}
    ></Input>
  );
}

export default Search;
