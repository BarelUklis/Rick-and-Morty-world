import { Box, TextField } from "@mui/material";
import { useState } from "react";
import rootStore from "../../../store/root-store";
import useDebounce from "../../../hooks/useDebounce";
import FilterControl from "./filters/filter-control";

const TableControlBar = () => {
  const { rickAndMortyStore } = rootStore;
  const [searchValue, setSearchValue] = useState('');

  const debouncedSearch = useDebounce((value: string) => {
    rickAndMortyStore.getFilteredCharacters({ name: value });
  }, 500);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    debouncedSearch(value);
  };

  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'row', gap: 2 }}>
      <TextField
        fullWidth
        id="table-search"
        label="Search"
        variant="outlined"
        value={searchValue}
        onChange={(e) => handleSearchChange(e.target.value)}
        size="small"
      />
      <FilterControl />
    </Box>
  )
};

export default TableControlBar;