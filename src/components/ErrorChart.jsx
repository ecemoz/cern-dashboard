import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function ErrorChart({ data }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full">
      <h2 className="text-xl font-bold mb-4">Reconstruction Error</h2>

      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="id" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="error" stroke="#dc2626" />
      </LineChart>
    </div>
  );
}
