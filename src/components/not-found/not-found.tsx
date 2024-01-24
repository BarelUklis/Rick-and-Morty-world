import { Box, Typography } from "@mui/material";
import rickNotFound from "../../../public/assets/rick-not-found.png";
const NotFound = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
      <img src={rickNotFound} alt="Not Found" style={{ width: '100%' }} />
      <Typography variant="h5" component="h5" align="center">
        I couldn't find this character across the whole multiverse!
      </Typography>
    </Box>
  )
};

export default NotFound;