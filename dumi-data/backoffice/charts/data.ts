import { faker } from "@faker-js/faker";

// Pie chart
export const dataCharts = {
  labels: ["Cabbage", "Wattermelon", "Broccoli", "Maize"],
  datasets: [
    {
      label: "# of Votes",
      data: [50, 10, 20, 20],
      backgroundColor: [
        "rgba(0, 0, 255, 0.7)",
        "rgba(255, 0, 221, 0.7)",
        "rgba(2, 139, 71, 0.7)",
        "rgba(0, 0, 0, 0.2)",
      ],
      borderColor: [
        "rgba(0, 0, 255, 0.3)",
        "rgba(255, 0, 221, 0.3)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const dataTabs = [
  {
    title: "Sales",
    type: "sales",
  },
  {
    title: "Orders",
    type: "orders",
  },
];

// Fin Pie chart

// Line chart
export const optionsDataLineChart = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const dataLineChart = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

// Fin line chart
