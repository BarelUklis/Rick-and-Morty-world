import { Box, Button, ButtonGroup } from "@mui/material";
import { ChartType, chartTypes } from "./chart.interface";

const ChartControls = ({ handleChartTypeChange }: { handleChartTypeChange: (type: ChartType) => void }) => {
  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: "center" }}>
      <ButtonGroup size="medium" aria-label="chart-type" sx={{ p: 1 }}>
        {chartTypes.map((chartType) => (
          <Button key={chartType} onClick={() => handleChartTypeChange(chartType)}>{chartType}</Button>
        ))}
      </ButtonGroup>
    </Box >
  )
};

export default ChartControls;