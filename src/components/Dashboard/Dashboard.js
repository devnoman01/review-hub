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
        <LineCharts key={data.id} data={data}></LineCharts>
        <StackedAreaCharts key={data.id} data={data}></StackedAreaCharts>
        <StackedBarCharts key={data.id} data={data}></StackedBarCharts>
        <TwoLevelPieChart key={data.id} data={data}></TwoLevelPieChart>
      </div>
    </div>
  );
};

export default Dashboard;
