import { Box, ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import TableRowsIcon from '@mui/icons-material/TableRows';
import rootStore from "../../../store/root-store";
import { observer } from "mobx-react-lite";

const TableViewMode = observer(() => {
  const { rickAndMortyStore } = rootStore;

  return (
    <Box>
      <Tooltip title="Table view mode">
        <ToggleButtonGroup
          value={rickAndMortyStore.viewMode}
          exclusive
          onChange={(_e, value) => rickAndMortyStore.setViewMode(value)}
          aria-label="view mode"
          size="small"
          disabled={rickAndMortyStore.characters.length === 0}
        >
          <ToggleButton value="table" aria-label="table view">
            <TableRowsIcon />
          </ToggleButton>
          <ToggleButton value="card" aria-label="card view">
            <AccountBoxIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Tooltip>
    </Box>
  )
});

export default TableViewMode;