import React from "react";
import { Line } from "react-chartjs-2";

function NetChart({wealth, times, width=500, height = 300}) {
   var chartData = 
            {labels: times,
                datasets: [
                {
                    label: "Wealth",
                    data: wealth,
                    backgroundColor: [
                    "#2a71d0"
                    ],
                    borderColor: "green",
                    borderWidth: 5
                }
                ]
            }
    var n = wealth.length;
    var boolean = (n > 2) ? true : false
    if(wealth[n-1] <= 0) boolean = false;
    if(n > 2 && wealth[n-2] <= 0) boolean = false;
    var percent = n < 2 ? 0 : Math.floor(100*(wealth[n-1]-wealth[n-2])/wealth[n-2]);
  return (
    <div className="chart-container" style={{ width: width, height: height}}>
      <h2 style={{ textAlign: "left", fontFamily: "Montserrat, sans-serif",marginBottom: 0}}>Net Worth</h2>
      <Line
        data={chartData}
        options={{
            plugins: {
            title: {
                display: boolean,
                text: `\t\t\t\t\t\t\t\t${percent}%`,
                align: "start",
                color: `${percent >= 0 ? "green" : "red"}`, //decide this based on percent
                font: {
                family: "Montserrat",
                size: 20,
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

export default NetChart;
