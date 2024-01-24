import { Box, Button, ButtonGroup, InputLabel } from "@mui/material";
import { ChartType, chartTypes } from "./chart.interface";

const ChartControls = ({ handleChartTypeChange }: { handleChartTypeChange: (type: ChartType) => void }) => {
  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 2 }}>
      <InputLabel id="chart-type-label">Chart Type</InputLabel>
      <ButtonGroup size="small" aria-label="chart-type">
        {chartTypes.map((chartType) => (
          <Button key={chartType} onClick={() => handleChartTypeChange(chartType)}>{chartType}</Button>
        ))}
      </ButtonGroup>
    </Box >
  )
};

export default ChartControls;