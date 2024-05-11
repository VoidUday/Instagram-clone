import React, { useState } from 'react'
import { AiOutlineUser, AiOutlineTable } from 'react-icons/ai'
import { RiVideoAddFill, RiVideoAddLine } from 'react-icons/ri'
import { BiBookmark } from "react-icons/bi";
import ReqUserPostCard from '../ProfileComponents/ReqUserPostCard'
const ReqUserPostPart = () => {
    const [activeTab, setActiveTab] = useState();

    const tabs = [
        {
            tab: "POSTS",
            icon: <AiOutlineTable></AiOutlineTable>, 
            activeTab: ""
        },
        {
            tab: "REELS",
            icon: <RiVideoAddLine></RiVideoAddLine>,
            active: <RiVideoAddFill></RiVideoAddFill>
        },
        {
            tab: "SAVED",
            icon: <BiBookmark ></BiBookmark>
        },
        {
            tab: "TAGGED",
            icon: <AiOutlineUser></AiOutlineUser>
        }
    ]

  return (
    <div className=''>
      <div className='flex items-center space-x-10 border-t'>
         {tabs.map((item)=> (
         <div onClick={()=> setActiveTab(item.tab)} className={`${activeTab === item.tab ? 
         "border-t border-black" :
          "opacity-50 "} flex items-center cursor-pointer py-2 text-sm space-x-1 ml-80`}>
            <p className='size-xs'>{item.icon}</p>
            <p className='font-xs'>{item.tab}</p>
         </div> 
       ))}
      </div>
      <div>
        <div className='flex-wrap'>
          {[1,1,1,1].map((item)  => <ReqUserPostCard />)}
        </div>
      </div>
    </div>
  )
}

export default ReqUserPostPart
