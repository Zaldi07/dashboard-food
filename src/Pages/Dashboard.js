import React from "react";
import { Chart } from "../componets/chart/ReveneuChart";
import { Donat, Doughnut } from "../componets/chart/DougnatChart";
import { Order } from "../componets/chart/Order";
import img from "../Rating.png";
import MostOrder from "../componets/MostOrder";
const Dashboard = () => {
  return (
    <div className=" h-full   ">
      <h1 className="text-xl font-medium ">Dashboard</h1>
      <div className="grid grid-cols-1  md:grid-cols-3 pt-5 ">
        <div className="md:col-span-2 bg-white pb-5 pr-5 border-b-2  md:border-b-2 md:border-r-2">
          <Chart />
        </div>
        <div className="md:border-b-2 border-b-2 ">
          <Donat />
        </div>
        <div className="md:border-r-2 p-4 ">
          <h1> Your Rating</h1>
          <h1 className="opacity-50">Adipiscing elit, sed do eiusmod tempor</h1>
          <img src={img} alt="" className="pt-6" />
        </div>
        <div className="md:border-r-2 p-4  ">
          <MostOrder />
        </div>
        <div className="">
          <Order />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
