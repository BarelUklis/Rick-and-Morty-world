import { Box, Paper } from "@mui/material"
import CustomeTable from "./table-body";
import { useEffect } from "react";
import rootStore from "../../store/root-store";
import TablePaginationComponent from "./table-pagination";

const TableContainerComponent = () => {
  const { rickAndMortyStore } = rootStore;
  useEffect(() => {
    rickAndMortyStore.setPage(1);
  }, []);
  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <CustomeTable />
        <TablePaginationComponent />
      </Paper>
    </Box>
  )
};

export default TableContainerComponent;