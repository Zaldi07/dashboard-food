import React from "react";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../features/userSlice";
import { Avatar, Badge, Space } from "antd";
import { Select } from "antd";
import { useSelector } from "react-redux";
import burger from "../Emoticon.png";
import SideBarSmall from "./SideBarSmall";
import SideBar from "./SideBar";
const Navbar = () => {
  const dispatch = useDispatch();
  const toggle = () => [dispatch(toggleSideBar())];
  const { isSidebarOpen } = useSelector((store) => store.user);
  return (
    <div className="  border-b-2 border-[#C8CBD9]  bg-white z-20 sticky top-0  ">
      <div className="text-white flex md:w-[95%]  w-[97%] bg-white  h-[62px] items-center  justify-between fixed top-0 sm:static  ">
        <div className="flex items-center gap-5  w-[70%]">
          <button className="md:pl-10 pl-4 ">
            {isSidebarOpen ? (
              <span className="text-[#5A67BA] text-4xl" onClick={toggle}>
                <ion-icon name="menu-sharp"></ion-icon>
              </span>
            ) : (
              <span className="text-[#5A67BA] text-4xl" onClick={toggle}>
                <ion-icon name="close"></ion-icon>
              </span>
            )}
          </button>
          <div className="md:w-[80%] w-[50%]">
            <input type="text" className="bg-[#F6F6FB] w-full  py-1 px-4 rounded-md" placeholder="search" />
          </div>
        </div>
        <div className="w-[30%] flex justify-end">
          {/* <img src={burger} alt="" /> */}
          <Select
            defaultValue="Delicious Burger "
            style={{
              width: 150,
            }}
            bordered={false}
            options={[
              {
                value: "Delicious Burger ",
                label: "Delicious Burger ",
              },
              {
                value: "burger enak",
                label: "burger enak",
              },
              {
                value: "burger enak",
                label: "burger enak",
              },
            ]}
          />
          <div>
            <Badge count={7} showZero>
              <Avatar shape="square" size="small" />
            </Badge>
          </div>
        </div>
      </div>
      {/* <SideBarSmall /> */}
    </div>
  );
};

export default Navbar;
