import { Box } from "@mui/material";
import Chart from "../../components/chart/chart";
import rootStore from "../../store/root-store";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

const ChartPage = observer(() => {
  const { rickAndMortyStore } = rootStore;
  useEffect(() => {
    rickAndMortyStore.getAllEpisodes();
    return () => {
      rickAndMortyStore.clearEpisodes();
    }
  }, [rickAndMortyStore]);
  return (
    <Box sx={{ width: "100vw", height: "100vh" }}>
      <Chart data={rickAndMortyStore.episodes.map((episode) => ({ y: episode.episode, x: episode.characters.length }))} />
    </Box>
  );
});

export default ChartPage;