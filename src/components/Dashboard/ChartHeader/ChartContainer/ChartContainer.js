import { useEffect, useRef } from "react";

import { Chart, registerables } from "chart.js";

import { addData } from "../../../../utils/ChartUtils";

Chart.register(...registerables);

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const data = {
    labels: labels,
    datasets: [
        {
            label: "Sales",
            backgroundColor: "rgba(51, 200, 99, .1)",
            fill: true,
            borderColor: "#33c863",
            data: addData(12),
            tension: 0.2,
        },
        {
            label: "Profit",
            backgroundColor: "rgba(242, 153, 74, .1)",
            fill: true,
            borderColor: "#f2994a",
            data: addData(12),
            tension: 0.2,
        },
    ],
};
const ChartContainer = () => {
  const chartRef = useRef();

    useEffect(() => {
        const canvasId = document.getElementById("myCanvas");
        chartRef.current = new Chart(canvasId, {
            type: "line",
            data,
            options: {
                maintainAspectRatio: false,
                interaction: {
                    mode: "index",
                    intersect: false,
                    axis: "x",
                },
                plugins: {
                    tooltip: {
                        enabled: true,
                    },
                    legend: false,
                },
                scales: {
                    y: {
                        display: false,
                    },
                    x: {
                        grid: {
                            drawBorder: false,
                            borderDash: [6],
                            color: "#dddfe5",
                            border: false,
                        },
                        ticks: {
                            color: "#929292",
                            font: {
                                family: "'Mulish', sans-serif",
                                size: "16px",
                            },
                        },
                    },
                },
            },
        });

        return () => chartRef.current.destroy();
    }, []);
  return (
    <canvas id={"myCanvas"}>
      
    </canvas>
  )
}

export default ChartContainer
