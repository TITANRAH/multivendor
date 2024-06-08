"use client";

import {
  dataLineChart,
  dataTabs,
  optionsDataLineChart,
} from "@/data-custom/backoffice/charts/data";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Button } from "../ui/button";

function WeeklySalesChart() {
  const [chartToDisplay, setChartToDisplay] = useState(dataTabs[0].type);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  return (
    <div className="dark:bg-slate-700 bg-slate-100 p-8 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-50">
        Weckly Sales Chart
      </h2>
      <div className="p-4">
        {/* tabs */}

        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            {dataTabs.map((t, index) => (
              <li className="me-2" key={index}>
                {/* parte siendo sales el tab seleccionado asi lo puse en el state 
                  pero al pinchar toma el valor del array en este caso orders 
                  por lo que el nuevo estado seria orders 
                  y en la condicion digo que si el chartToDisplay que parte en sales es igual 
                  al tab type que parte en sales tambien pintate 
                  al pinchar el otro tab el state sera orders y sera igual al que pincho por lo que se pinta naranjo 
                  que maravilla */}
                <Button
                  onClick={() => setChartToDisplay(t.type)}
                  className={
                    chartToDisplay == t.type
                      ? "bg-transparent inline-block p-4 text-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500 hover:bg-transparent"
                      : "bg-transparent inline-block p-4 text-slate-800 dark:text-slate-50 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 hover:bg-transparent"
                  }
                >
                  {t.title}
                </Button>
              </li>
            ))}
          </ul>
        </div>

        {/* cotent display */}

        {dataTabs.map((t, index) => {
          if (chartToDisplay === t.type) {
            return (
              <Line
                key={index}
                options={optionsDataLineChart}
                data={dataLineChart}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default WeeklySalesChart;
