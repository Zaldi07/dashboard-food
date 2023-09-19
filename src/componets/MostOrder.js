import React from "react";
import img from "../Group 299.png";
const MostOrder = () => {
  return (
    <div className="">
      <h1> Your Rating</h1>
      <h1 className="opacity-50">Adipiscing elit, sed do eiusmod tempor</h1>
      <div className=" pt-5">
        <div className="flex justify-between border-b  items-center   ">
          <div className="flex gap-3 items-center">
            <div className="pt-4">
              <img src={img} alt="" className="" />
            </div>
            <h1 className="text-[#273240] text-sm tracking-wider">Fresh Salad Bowl</h1>
          </div>

          <p className=" text-[#0000008b] tracking-wider">IDR 45.000</p>
        </div>
        <div className="flex justify-between border-b  items-center   ">
          <div className="flex gap-3 items-center">
            <div className="pt-4">
              <img src={img} alt="" className="" />
            </div>
            <h1 className="text-[#273240] text-sm tracking-wider">Fresh Salad Bowl</h1>
          </div>

          <p className=" text-[#0000008b] tracking-wider">IDR 45.000</p>
        </div>
        <div className="flex justify-between border-b  items-center   ">
          <div className="flex gap-3 items-center">
            <div className="pt-4">
              <img src={img} alt="" className="" />
            </div>
            <h1 className="text-[#273240] text-sm tracking-wider">Fresh Salad Bowl</h1>
          </div>

          <p className=" text-[#0000008b] tracking-wider">IDR 45.000</p>
        </div>
        <div className="flex justify-between border-b  items-center   ">
          <div className="flex gap-3 items-center">
            <div className="pt-4">
              <img src={img} alt="" className="" />
            </div>
            <h1 className="text-[#273240] text-sm tracking-wider">Fresh Salad Bowl</h1>
          </div>

          <p className=" text-[#0000008b] tracking-wider">IDR 45.000</p>
        </div>

        {/* 
          <li className="flex justify-between border-b ">
            <div className="flex gap-3">
              <img src={img} alt="" />
              <h1 className="text-[#273240] text-medium tracking-wider">Chicken Noodles</h1>
            </div>
            <div>
              <p className=" text-[#0000008b] tracking-wider">IDR 75.000</p>
            </div>
          </li>

          <li className="flex justify-between border-b ">
            <div className="flex gap-3 ">
              <img src={img} alt="" />
              <h1 className="text-[#273240] text-medium tracking-wider">Smoothie Fruits</h1>
            </div>
            <p className=" text-[#0000008b] tracking-wider">IDR 45.000</p>
          </li>

          <li className="flex justify-between  ">
            <div className="flex gap-3">
              <img src={img} alt="" />
              <h1 className="text-[#273240] text-medium tracking-wider">Hot Chicken Wings</h1>
            </div>
            <p className=" text-[#0000008b] tracking-wider">IDR 45.000</p>
          </li> */}
      </div>
    </div>
  );
};

export default MostOrder;
