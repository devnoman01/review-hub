import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const StackedAreaCharts = ({ data }) => {
  return (
    <div className="p-2 my-5 justify-center">
      <h3 className="text-xl font-medium mb-5">Area Chart</h3>
      <AreaChart width={400} height={300} data={data} className="mx-auto">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Area
          type="monotone"
          dataKey="revenue"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
        <Area
          type="monotone"
          dataKey="investment"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
      </AreaChart>
    </div>
  );
};

export default StackedAreaCharts;
