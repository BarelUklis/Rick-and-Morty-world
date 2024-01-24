import { ResponsiveContainer, Tooltip, XAxis, YAxis, AreaChart, Area, CartesianGrid } from 'recharts';
const ChartArea = ({ data }: { data: { y: string, x: number }[] }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
        layout='vertical'
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" type="number" />
        <YAxis dataKey="y" type="category" />
        <Tooltip />
        <Area name='Number of characters' dataKey="x" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ChartArea;