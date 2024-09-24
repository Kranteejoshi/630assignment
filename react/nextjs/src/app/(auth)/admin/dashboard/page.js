'use client'
import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LineElement, LinearScale, PointElement, Title, Tooltip, Legend, Filler);

const MyLineChart = () => {
  // X - axis lable
  const labels = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug"];

  // Data want to show on chart
  const datasets = [12, 45, 67, 43, 89, 34, 67, 43];
  const datasets2 = [23, 55, 37, 77, 68, 24, 67, 23];


  const data = {
    labels: labels,
    datasets: [
      {
        // Title of Graph
        label: "Last Year ",
        data: datasets,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        // Title of Graph
        label: "This Year",
        data: datasets2,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      // insert similar in dataset object for making multi line chart
    ],
  };

  // To make configuration
  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text: "Y-axis Lable",
        },
        display: true,
        min: 10,
      },
      x: {
        title: {
          display: true,
          text: "x-axis Lable",
        },
        display: true,
      },
    },
  };

  return (
    <div style={{ width: "1000px", margin: "0 auto" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default MyLineChart;