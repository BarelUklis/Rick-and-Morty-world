import { Box, Menu } from "@mui/material"
import FilterMenuItem from "./filter-menu-item"
import { tableFilters } from "../../table.interface"

const FilterMenu = ({ anchorEl, setAnchorEl }: { anchorEl: null | HTMLElement, setAnchorEl: (value: null | HTMLElement) => void }) => {
  return (
    <Menu
      id="filter-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={() => setAnchorEl(null)}
      sx={{
        '& .MuiMenu-paper': {
          width: "50%",
        }
      }}
    >
      <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {tableFilters.map((filter) => (
          <FilterMenuItem key={filter.name} filter={filter} />
        ))}
      </Box>
    </Menu>
  )
};

export default FilterMenu;