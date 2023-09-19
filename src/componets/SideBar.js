import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import img from "../Logo(2).png";
const SideBar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const linksMenu = [
    { id: 1, text: "Dashboard", path: "/", icon: <ion-icon name="stats-chart"></ion-icon> },
    { id: 2, text: "Food Order", path: "food-order", icon: <ion-icon name="stats-chart"></ion-icon> },
    { id: 3, text: "Manage Menu", path: "food-order", icon: <ion-icon name="bag-handle-outline"></ion-icon> },
    { id: 4, text: "Costumer Riview", path: "food-order", icon: <ion-icon name="chatbox-ellipses-outline"></ion-icon> },
  ];
  const linkOther = [
    { id: 1, text: "Setting", path: "/", icon: <ion-icon name="settings-outline"></ion-icon> },
    { id: 2, text: "Payment", path: "/", icon: <ion-icon name="stats-chart"></ion-icon> },
    { id: 3, text: "Account", path: "/", icon: <ion-icon name="bag-handle-outline"></ion-icon> },
    { id: 4, text: "Help", path: "/", icon: <ion-icon name="chatbox-ellipses-outline"></ion-icon> },
  ];
  return (
    <div className={isSidebarOpen ? "-ml-[240px]  ease-out duration-300  w-[240px]  " : " w-[240px]  ml-0 ease-out duration-300  "}>
      <div className="fixed    bg-[#F1F2F7] hidden md:block w-[240px] h-screen ">
        <header className="bg-[#F1F2F7] h-[64px] border-b-2 border-[#C8CBD9] flex items-center ">
          <h1 className="font-bold flex gap-2  pl-[17%] text-[#5A67BA]">
            <span>
              <img src={img} alt="" />
            </span>
            GOODFOOD
          </h1>
        </header>
        <div className="pt-5 pl-[15%]">
          <div className="flex flex-col items-start gap-2   ">
            <h1 className="text-xs text-[#082431] opacity-50 uppercase pl-2">Menu</h1>
            {linksMenu.map((link) => {
              const { text, path, id, icon } = link;
              return (
                <NavLink
                  to={path}
                  className=" w-full h-full "
                  key={id}
                  //   onClick={toggleSideBar}
                >
                  <button className="flex  w-[90%]  pl-2 pr-1  py-2   focus:bg-[#707FDD] focus:bg-opacity-10 focus:text-[#5A6ACF] item-center  gap-4  text-[#A6ABC8]  rounded-lg group duration-500">
                    <span className="text-lg   ">{icon}</span>
                    <h1 className="font-xs font-medium">{text}</h1>
                  </button>
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className="pt-3 pl-[15%]">
          <div className="flex flex-col items-start gap-2   ">
            <h1 className="text-xs text-[#082431] opacity-50 uppercase font-normal pl-2">Other</h1>
            {linkOther.map((link) => {
              const { text, path, id, icon } = link;
              return (
                <NavLink
                  to={path}
                  className=" w-full  "
                  key={id}
                  //   onClick={toggleSideBar}
                >
                  <button className="flex  w-[90%] pl-2 pr-1    py-2   focus:bg-[#707FDD] focus:bg-opacity-10 focus:text-[#5A6ACF] item-center  gap-4  text-[#A6ABC8]  rounded-lg group duration-500">
                    <span className="text-lg   ">{icon}</span>
                    <h1 className="font-xs font-medium">{text}</h1>
                  </button>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
