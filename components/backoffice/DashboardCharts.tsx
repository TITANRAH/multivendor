import React from "react";
import BestSellingProductsCharts from "./BestSellingProductsCharts";
import WeeklySalesChart from "./WeeklySalesChart";

function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <WeeklySalesChart />
      <BestSellingProductsCharts />
    </div>
  );
}

export default DashboardCharts;
