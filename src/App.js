import "./styles.css";

import React from "react";
import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [1000, 20000, 40000, 39000, 20000, 30000, 59000],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Dataset 2",
      data: [10000, 20200, 40020, 39020, 20200, 31000, 52000],
      backgroundColor: "rgb(75, 192, 192)",
    },
    {
      label: "Dataset 3",
      data: [19000, 24200, 40120, 31020, 21200, 39000, 59000],
      backgroundColor: "rgb(53, 162, 235)",
    },
  ],
};

export default function App() {
  return <Bar options={options} data={data} />;
}
