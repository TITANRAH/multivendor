'use client'

import { dataCharts } from "@/data-custom/backoffice/charts/data";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function BestSellingProductsCharts() {
  return (
    <div className="dark:bg-slate-700 bg-slate-100 p-8 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-50">Best Selling Products Charts</h2>
      {/* chart */}
      <Pie data={dataCharts}/>

    </div>
  );
}

export default BestSellingProductsCharts;
