import React from "react";
import { PieChart, Pie } from "recharts";

const TwoLevelPieChart = ({ data }) => {
  return (
    <div className="p-2 my-5 justify-center">
      <h3 className="text-xl font-medium mb-5">Pie Chart</h3>
      <PieChart width={400} height={400} className="mx-auto">
        <Pie
          data={data}
          dataKey="sell"
          cx="50%"
          cy="40%"
          outerRadius={60}
          fill="#82ca9d"
        />
        <Pie
          data={data}
          dataKey="production"
          cx="50%"
          cy="40%"
          innerRadius={70}
          outerRadius={90}
          fill="#8884d8"
          label
        />
      </PieChart>
    </div>
  );
};

export default TwoLevelPieChart;
