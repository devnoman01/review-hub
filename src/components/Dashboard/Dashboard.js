import React from "react";
import useChartData from "../../hooks/useChartData";
import LineCharts from "../Charts/LineChart";
import StackedAreaCharts from "../Charts/StackedAreaCharts";
import StackedBarCharts from "../Charts/StackedBarCharts";
import TwoLevelPieChart from "../Charts/TwoLevelPieChart";

const Dashboard = () => {
  // using useChartData custom hook for data
  const [data, setData] = useChartData();

  return (
    <div className="container mx-auto p-4">
      <h1 className="my-8 text-5xl font-medium text-center">Dashboard</h1>
      <div className="my-10 grid grid-cols-2 gap-6 justify-center">
        {/* line chart */}
        <LineCharts key={data.id} data={data}></LineCharts>
        {/* area chart */}
        <StackedAreaCharts key={data.id} data={data}></StackedAreaCharts>
        {/* bar chart */}
        <StackedBarCharts key={data.id} data={data}></StackedBarCharts>
        {/* pie chart */}
        <TwoLevelPieChart key={data.id} data={data}></TwoLevelPieChart>
      </div>
    </div>
  );
};

export default Dashboard;
