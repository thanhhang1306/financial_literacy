import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ needs, wants, times, width=500, height = 300}) {
   var chartData = 
            {labels: times,
                datasets: [
                {
                    label: "Needs",
                    data: needs,
                    backgroundColor: [
                    "#2a71d0"
                    ],
                    borderColor: "green",
                    borderWidth: 5
                },
                {
                    label: "Wants",
                    data: wants,
                    backgroundColor: [
                    "#FF0000"
                    ],
                    borderColor: "red",
                    borderWidth: 5
                }
                ]
            }


  return (
    <div className="chart-container" style={{ width: width, height: height }}>
      <h2 style={{ textAlign: "left", fontFamily: "Montserrat, sans-serif" }}>Needs/Wants ($)</h2>
      <Line
        data={chartData}
        options={{
            plugins: {
            title: {
                font: {
                family: "Montserrat",
                },
            },
            legend: {
                display: false,
                labels: {
                font: {
                    family: "Montserrat",
                },
                },
            },
            },
            scales: {
            x: {
                grid: {display: false},
                ticks: {
                font: {
                    family: "Montserrat",
                },
                },
            },
            y: {
                grid: {display: false},
                ticks: {
                font: {
                    family: "Montserrat",
                },
                },
            },
            },
        }}
        />
    </div>
  );
}

export default LineChart;
