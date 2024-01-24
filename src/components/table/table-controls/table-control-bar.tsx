import { Box, TextField } from "@mui/material";
import { useState } from "react";
import rootStore from "../../../store/root-store";
import useDebounce from "../../../hooks/useDebounce";

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
    <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ width: '50%', mr: 2 }}>
        <TextField
          fullWidth
          id="table-search"
          label="Search"
          variant="outlined"
          value={searchValue}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
      </Box>
      <Box sx={{ width: '50%', mr: 2 }}>
      </Box>
    </Box>
  )
};

export default TableControlBar;