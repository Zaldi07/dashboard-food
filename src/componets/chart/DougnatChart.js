import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function Donat() {
  const labels = ["Afternoon", "Evening", "Morning"];
  const randomData = Array.from({ length: labels.length }, () => Math.floor(Math.random() * 1000000));

  const data = {
    labels: labels,
    datasets: [
      {
        data: randomData,
        backgroundColor: ["rgba(90, 106, 207, 1)", "rgba(133, 147, 237, 1)", "rgba(199, 206, 255, 1)"],
        borderColor: ["rgba(90, 106, 207, 1)", "rgba(133, 147, 237, 1)", "rgba(199, 206, 255, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full h-full px-3  pb-2  ">
      <div className="flex justify-between">
        <div>
          <h1 className="text-lg">Order Time</h1>
          <h1 className="font-thin">From 1-6 Dec, 2020</h1>
        </div>
        <div>
          <button className="text-[#5A6ACF] bg-[#DDE4F0] py-1 px-2 rounded-sm border-[1px] shadow-sm">View Report</button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div className="w-[full%] md:w-full  h-full pt-10">
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
}
