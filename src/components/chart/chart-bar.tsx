import { Bar, BarChart, CartesianGrid, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const ChartBar = ({ data }: { data: { y: string, x: number }[] }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        layout='vertical'
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" type="number" />
        <YAxis dataKey="y" type="category" />
        <Tooltip />
        <Bar name='Number of characters' dataKey="x" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
      </BarChart>
    </ResponsiveContainer>
  )
};

export default ChartBar;