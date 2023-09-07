import React from "react";
import BarChartComponent from "./components/BarChart";
import LineChartComponent from "./components/LineChart";
import PieChartComponent from "./components/PieChart";
import salesData from "./data";

function App() {
  return (
    <div>
      <BarChartComponent salesData={salesData} />
      <LineChartComponent salesData={salesData} />
      <PieChartComponent salesData={salesData} />
    </div>
  );
}
export default App;
