import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { menu } from "./SidebarConfig";
import "../Sidebar/Sidebar.css";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const [activeTab, setActiveTab] = useState();
  const navigate = useNavigate();

  const handleTabClick = (title) => {
    setActiveTab(title);
    if (title === "Profile") {
      navigate("/username");
    } else if (title === "Home") {
      navigate("/");
    }
  };

  return (
    <div className="sticky top-0 h-[99.5vh]">
      <div className="flex flex-col justify-between f-full px-10">
        <div>
          <div className="pt-10">
            <img
              className=" h-9"
              src="https://i.imgur.com/zqpwkLQ.png"
              alt=""
            />
          </div>
          <div className="mt-10">
            {menu.map((item) => (
              <div
                onClick={() => handleTabClick(item.title)}
                className="flex items-center mb-5 cursor-pointer text-lg"
              >
                {activeTab === item.title ? item.activeIcon : item.icon}
                {/* className="pl-3" */}
                <p
                  className={`${
                    activeTab === item.title
                      ? "font-bold pl-3"
                      : "font-normal pl-3"
                  }`}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-bottom cursor-pointer mt-10 ">
          <IoReorderThreeOutline className="text-3xl " />
          <p className="pl-5 text-1xl">More</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
