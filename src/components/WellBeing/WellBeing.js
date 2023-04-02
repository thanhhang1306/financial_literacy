import React from "react";
import { Line } from "react-chartjs-2";
import chroma from 'chroma-js'

function getHexColor(num) {
    // Scale the input number to be between 0 and 1
    var scaledNum = num / 100;
  
    // Define a custom color map with a gradual spectrum of colors between blue, purple, and red
    var colors = [[0, 0, 255], [128, 0, 128], [255, 0, 0]]; // blue, purple, red
    var cmap = chroma.scale(colors).mode('rgb');
  
    // Map the scaled number to a color in the custom color map
    var color = cmap(scaledNum).hex();
  
    return color;
  }

function WellBeing({wellBeing, times, width=500, height = 300}) {
   var chartData = 
            {labels: times,
                datasets: [
                {
                    label: "Well Being",
                    data: wellBeing,
                    backgroundColor: [
                    "#2a71d0"
                    ],
                    borderColor: `${getHexColor(wellBeing[wellBeing.length-1])}`,
                    borderWidth: 5
                }
                ]
            }
var n = wellBeing.length;
var boo = (n > 2 && wellBeing[n-1] > 0) ? true : false
var percent = n < 2 ? 0 : Math.floor(100*(wellBeing[n-1]-wellBeing[n-2])/wellBeing[n-2]);
  return (
    <div className="chart-container" style={{ width: width, height: height}}>
      <h2 style={{ textAlign: "left", fontFamily: "Montserrat, sans-serif",marginBottom: 0}}>Well Being</h2>
      <Line
        data={chartData}
        options={{
            plugins: {
            title: {
                display: boo,
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

export default WellBeing;
