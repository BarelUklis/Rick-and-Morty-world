import { Box, Paper } from "@mui/material"
import TablePaginationComponent from "./table-controls/table-pagination";
import CharacterModal from "../character-modal/character-modal";
import ViewsControl from "./table-views";
import TableControlBar from "./table-controls/table-control-bar";

const TableContainerComponent = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableControlBar />
        <ViewsControl />
        <TablePaginationComponent />
      </Paper>
      <CharacterModal />
    </Box>
  )
};

export default TableContainerComponent;