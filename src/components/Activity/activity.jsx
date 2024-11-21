import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./activity.css";

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const Activity = () => {
  const data = {
    labels: ["Online Shopping", "Taxi", "Food"],
    datasets: [
      {
        label: "Activity",
        data: [3200, 1200, 2000],
        backgroundColor: ["#25C935", "#CFCFCF", "#181818"],
        hoverBackgroundColor: ["#1F9A2E", "#BFBFBF", "#0F0F0F"],
        borderWidth: 0, // Remove border
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false }, // Disable default legend
    },
    responsive: true,
    cutout: "70%", // Adjust inner radius for the doughnut
  };

  return (
    <div className="activity-container">
      <h2 className="activity-title">Activity</h2>
      <div className="chart-container">
        <Doughnut data={data} options={options} />
        <div className="chart-center">
          <span>Rs. 3,200</span>
          <small>Online Shopping</small>
        </div>
      </div>
      <div className="comparison-container">
        <h3>Comparison (Month)</h3>
        <div className="comparison-bar">
          <div className="bar this-month" />
          <span>This Month</span>
        </div>
        <div className="comparison-bar">
          <div className="bar last-month" />
          <span>Last Month</span>
        </div>
      </div>
    </div>
  );
};

export default Activity;
