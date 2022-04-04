import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineCharts = ({ data }) => {
  return (
    <div className="p-2 my-5 justify-center">
      <h3 className="text-xl font-medium mb-5">Line Chart</h3>
      <LineChart width={400} height={300} data={data} className="mx-auto">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="sell"
          stroke="#82ca9d"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="production" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default LineCharts;
