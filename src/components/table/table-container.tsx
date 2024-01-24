import { Box, Paper } from "@mui/material"
import CustomeTable from "./table-components/table-body";
import { useEffect } from "react";
import rootStore from "../../store/root-store";
import TablePaginationComponent from "./table-controls/table-pagination";
import TableControlBar from "./table-controls/table-control-bar";
import CharacterModal from "../character-modal/character-modal";

const TableContainerComponent = () => {
  const { rickAndMortyStore } = rootStore;
  useEffect(() => {
    rickAndMortyStore.setPage(1);
  });
  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableControlBar />
        <CustomeTable />
        <TablePaginationComponent />
      </Paper>
      <CharacterModal />
    </Box>
  )
};

export default TableContainerComponent;