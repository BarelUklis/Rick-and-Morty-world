import { Box, TextField } from "@mui/material";
import { useState } from "react";
import rootStore from "../../../store/root-store";
import useDebounce from "../../../hooks/useDebounce";
import FilterControl from "./filters/filter-control";
import TableViewMode from "./table-view-mode";
import './control-bar.scss';
import { Cancel } from "@mui/icons-material";

const TableControlBar = () => {
  const { rickAndMortyStore } = rootStore;
  const [searchValue, setSearchValue] = useState('');

  const debouncedSearch = useDebounce((value: string) => {
    rickAndMortyStore.handleFilterChange({ name: value });
  }, 500);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    debouncedSearch(value);
  };

  return (
    <div className="control-container">
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, width: '100%' }}>
        <TableViewMode />
        <TextField
          sx={{ width: '350px' }}
          id="table-search"
          label="Search"
          variant="outlined"
          value={searchValue}
          onChange={(e) => handleSearchChange(e.target.value)}
          size="small"
          InputProps={{
            endAdornment: (searchValue &&
              <Cancel
                sx={{ color: 'action.active', cursor: 'pointer' }}
                onClick={() => handleSearchChange('')}
              />
            )
          }}

        />
      </Box>
      <FilterControl />
    </div>
  )
};

export default TableControlBar;