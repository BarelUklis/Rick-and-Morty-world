import { ChartType } from "./chart.interface";
import ChartLine from "../../components/chart/chart-line";
import ChartArea from "../../components/chart/chart-pie";
import ChartBar from "../../components/chart/chart-bar";

const ChartSwitch = ({ chartType, data }: { chartType: ChartType, data: { y: string, x: number }[] }) => {
  switch (chartType) {
    case "bar":
      return <ChartBar data={data} />
    case "line":
      return <ChartLine data={data} />
    case "area":
      return <ChartArea data={data} />
  }
};

export default ChartSwitch;