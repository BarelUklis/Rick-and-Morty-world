import { Box, Paper } from "@mui/material";
import rootStore from "../../store/root-store";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import ChartControls from "../../components/chart/chart-controls";
import { ChartType } from "../../components/chart/chart.interface";
import ChartSwitch from "../../components/chart/chart-switch";

const ChartPage = observer(() => {
  const { rickAndMortyStore } = rootStore;
  const [chartType, setChartType] = useState<ChartType>("bar");
  const handleChartTypeChange = (type: ChartType) => {
    setChartType(type);
  }
  useEffect(() => {
    rickAndMortyStore.getAllEpisodes();
    return () => {
      rickAndMortyStore.clearEpisodes();
    }
  }, [rickAndMortyStore]);
  return (
    <Box>
      <Paper sx={{ width: '100%', height: "100vh" }}>
        <ChartControls handleChartTypeChange={handleChartTypeChange} />
        <ChartSwitch chartType={chartType} data={rickAndMortyStore.episodes.map((episode) => ({ y: episode.episode, x: episode.characters.length }))} />
      </Paper>
    </Box>
  );
});

export default ChartPage;