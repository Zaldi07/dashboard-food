import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const randomData = Array.from({ length: labels.length }, () => Math.floor(Math.random() * 5000));

const randomData2 = Array.from({ length: labels.length }, () => Math.floor(Math.random() * 5000));

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: randomData,
      borderColor: "rgba(90, 106, 207, 1)",
      backgroundColor: "rgba(90, 106, 207, 1)",
    },
    {
      label: "Dataset 2",
      data: randomData2,
      borderColor: "rgba(199, 206, 255, 1)",
      backgroundColor: "rgba(199, 206, 255, 1)",
    },
  ],
};

export function Order() {
  //   return <Line options={options} data={data} />;
  return (
    <div className="w-full h-full px-3  pb-2 pt-2 md:pt-0">
      <div className="flex justify-between pt-5">
        <div className="">
          <h1 className="text-lg">Order </h1>
          <h1 className="font-bold text-lg">2.568</h1>
          <h1 className="text-[#737B8B]">2.1% vs last week</h1>
        </div>
        <div>
          <button className="text-[#5A6ACF] bg-[#DDE4F0] py-1 px-2 rounded-sm border-[1px] shadow-sm">View Report</button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div className="w-[100%] md:w-full  h-full pt-10">
          <Line options={options} data={data} />;
        </div>
      </div>
    </div>
  );
}
