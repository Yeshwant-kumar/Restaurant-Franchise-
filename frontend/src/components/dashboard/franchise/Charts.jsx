import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Charts() {
  const [salesData, setSalesData] = useState([400, 300, 500, 700, 800, 600]);
  const [visitorsData, setVisitorsData] = useState([1200, 1500, 1100, 1800, 2000, 1700]);

  // Simulate fetching data from an API
  useEffect(() => {
    setTimeout(() => {
      setSalesData([450, 320, 520, 750, 820, 620]);
      setVisitorsData([1300, 1600, 1200, 1900, 2100, 1800]);
    }, 2000);
  }, []);

  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  const salesChartData = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: salesData,
        borderColor: "#FF5733",
        backgroundColor: "rgba(255, 87, 51, 0.2)",
        tension: 0.4,
        pointBackgroundColor: "#FF5733",
        pointBorderColor: "#ffffff",
        pointRadius: 6,
      },
    ],
  };

  const visitorsChartData = {
    labels,
    datasets: [
      {
        label: "Visitors",
        data: visitorsData,
        borderColor: "#33FF57",
        backgroundColor: "rgba(51, 255, 87, 0.2)",
        tension: 0.4,
        pointBackgroundColor: "#33FF57",
        pointBorderColor: "#ffffff",
        pointRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top", labels: { color: "#fff", font: { size: 14, weight: "bold" } } },
    },
    scales: {
      x: { grid: { display: false }, ticks: { color: "#fff", font: { size: 12 } } },
      y: { grid: { color: "rgba(255, 255, 255, 0.2)" }, ticks: { color: "#fff", font: { size: 12 } } },
    },
  };

  return (
    <div className="pt-40 w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 to-gray-900 p-6">
      <div className="w-full max-w-5xl h-[60vh] p-8 bg-gray-800 rounded-2xl shadow-xl border border-gray-700 hover:scale-105 transition-transform duration-300 mb-12">
        <h2 className="text-3xl font-extrabold text-orange-400 mb-6 text-center">📈 Sales Trend</h2>
        <div className="w-full h-full">
          <Line data={salesChartData} options={options} aria-label="Sales Chart" />
        </div>
      </div>
      <div className="mt-10 mb-15 pt-10 w-full max-w-5xl h-[60vh] p-8 bg-gray-800 rounded-2xl shadow-xl border border-gray-700 hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl font-extrabold text-green-400 mb-6 text-center">👥 Visitor Trend</h2>
        <div className="w-full h-full">
          <Line data={visitorsChartData} options={options} aria-label="Visitors Chart" />
        </div>
      </div>
    </div>
  );
}

export default Charts;
