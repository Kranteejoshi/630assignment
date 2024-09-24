// 'use client'
// import React from "react";
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, } from "chart.js";
// import { Line } from "react-chartjs-2";

// ChartJS.register(CategoryScale, LineElement, LinearScale, PointElement, Title, Tooltip, Legend, Filler);

// const MyLineChart = () => {
//   // X - axis lable
//   const labels = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug"];

//   // Data want to show on chart
//   const datasets = [12, 45, 67, 43, 89, 34, 67, 43];
//   const datasets2 = [23, 55, 37, 77, 68, 24, 67, 23];


//   const data = {
//     labels: labels,
//     datasets: [
//       {
//         // Title of Graph
//         label: "Last Year ",
//         data: datasets,
//         fill: false,
//         borderColor: "rgb(75, 192, 192)",
//         tension: 0.1,
//       },
//       {
//         // Title of Graph
//         label: "This Year",
//         data: datasets2,
//         fill: false,
//         borderColor: "rgb(75, 192, 192)",
//         tension: 0.1,
//       },
//       // insert similar in dataset object for making multi line chart
//     ],
    
//   };

//   // To make configuration
//   const options = {
//     scales: {
//       y: {
//         title: {
//           display: true,
//           text: "Y-axis Label",
//         },
//         display: true,
//         min: 10,
//       },
//       x: {
//         title: {
//           display: true,
//           text: "x-axis Label",
//         },
//         display: true,
//       },
//     },
//   };

//   return (
//     <div style={{ width: "1000px", margin: "0 auto" }}>
//       <Line data={data} options={options} />
//     </div>
//   );
// };

// export default MyLineChart;


'use client'
import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, ArcElement, } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(CategoryScale, LineElement, LinearScale, ArcElement, PointElement, Title, Tooltip, Legend, Filler);

const DarazPieChart = () => {
  // X - axis lable
  const labels = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug"];

  // Data want to show on chart
  const datasets = [12, 45, 67, 43, 89, 34, 67, 43];
  const datasets2 = [23, 55, 37, 77, 68, 24, 67, 23];


  const data = {
    labels: ["Home Appliances", "Clothing", "Electronics", "Sports", "Groceries"],
    datasets: [
      {
        data: [30, 30, 5, 15, 20],
        backgroundColor: [
          "rgb(242,165,152)",
          "rgb(255,232,157)",
          "rgb(236,107,109)",
          "rgb(122,231,125)",
          "rgb(195,233,151)"
        ],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
      }
    ],
   
    plugins: {
      labels: {
        render: "percentage",
        fontColor: ["green", "white", "red"],
        precision: 2
      },
    },
     text: "23%",
  };
  


  return (
    <div style={{ width: "1000px", margin: "0 auto" }}>
 <Doughnut
          data={data}
          options={{
            
            elements: {
              
              center: {
                legend: { display: true, position: "right" },
                text: "Red is 2/3 the total numbers",
                color: "#FF6384", // Default is #000000
                fontStyle: "Arial", // Default is Arial
                sidePadding: 20, // Default is 20 (as a percentage)
                minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
                lineHeight: 25 // Default is 25 (in px), used for when text wraps
              }
            },
            
          }}
        />    </div>
  );
};

export default DarazPieChart;
