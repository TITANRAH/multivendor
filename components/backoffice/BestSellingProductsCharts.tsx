'use client'

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { dataCharts } from "@/dumi-data/backoffice/charts/data";

ChartJS.register(ArcElement, Tooltip, Legend);

function BestSellingProductsCharts() {
  return (
    <div className="bg-slate-700 p-8 rounded-lg">
      <h2 className="text-xl font-bold mb-4">BestSellingProductsCharts</h2>
      {/* chart */}
      <Pie data={dataCharts}/>
    </div>
  );
}

export default BestSellingProductsCharts;
