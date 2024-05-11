import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import "../ProfileComponents/ReqUserPostCard.css";
const ReqUserPPostCard = () => {
  return (
    <div className="">
      <div className="post w-80 h-80 ml-5">
        <img
          className="cursor-pointer"
          src="https://cdn.pixabay.com/photo/2022/01/23/08/27/fashion-model-6960097_1280.jpg"
          alt=""
        />
        <div className="overlay">
          <div className="overlay-text flex  justify-between ">
            <div>
              <AiFillHeart></AiFillHeart>
              <span>10</span>
            </div>
            <div>
              <FaComment></FaComment>
              <span>10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReqUserPPostCard;
