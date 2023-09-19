import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {},
};

const labels = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

const randomData = Array.from({ length: labels.length }, () => Math.floor(Math.random() * 1000));
const randomData2 = Array.from({ length: labels.length }, () => Math.floor(Math.random() * 1000));

export const data = {
  labels,
  datasets: [
    {
      label: "Last 6 days",
      data: randomData,
      backgroundColor: "rgba(90, 106, 207, 1)",
    },
    {
      label: "Last Week",
      data: randomData2,
      backgroundColor: "rgba(230, 232, 236, 1)",
    },
  ],
};

export function Chart() {
  return (
    <div className="">
      <div className="flex justify-between">
        <h1 className="text-lg">Reveneu</h1>
        <button className="text-[#5A6ACF] bg-[#DDE4F0] py-1 px-2 rounded-sm border-[1px] shadow-sm">View Report</button>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">IDR 7.852.000</h1>
        <h1 className="text-xs text-[#149D52] flex gap-2">
          <span>
            <ion-icon name="arrow-up-outline"></ion-icon>
          </span>
          2.1% vs last week
        </h1>
        <h1 className="text-lg font-thin">Sales from 1-12 Dec, 2020</h1>
      </div>
      <div>
        <Bar options={options} data={data} />
      </div>
    </div>

    // <div className="">
    //   <Bar options={options} data={data} />
    // </div>
  );
}
