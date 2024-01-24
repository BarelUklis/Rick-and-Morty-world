import { Box, Paper } from "@mui/material"
import { useEffect } from "react";
import rootStore from "../../store/root-store";

const TableContainerComponent = () => {
  const { rickAndMortyStore } = rootStore;
  useEffect(() => {
    rickAndMortyStore.setPage(1);
  }, []);
  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>

      </Paper>
    </Box>
  )
};

export default TableContainerComponent;