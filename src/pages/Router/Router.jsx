import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import Profile from "../Profile/Profile"

const Router = () => {
  return (
    <div className="">
      <div className="flex">
        <div className="w-[18%] border border-l slate-500 pl-0">
          <Sidebar />
        </div>
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/username" element={<Profile />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Router;
