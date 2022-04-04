import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const StackedBarCharts = ({ data }) => {
  return (
    <div className="p-2 my-5 justify-center">
      <h3 className="text-xl font-medium mb-5">Bar Chart</h3>
      <BarChart width={400} height={300} data={data} className="mx-auto">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="investment" stackId="a" fill="#82ca9d" />
        <Bar dataKey="revenue" stackId="a" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default StackedBarCharts;
