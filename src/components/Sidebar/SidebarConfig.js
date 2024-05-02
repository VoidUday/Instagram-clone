import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineSearch,
  AiOutlineCompass,
  AiFillCompass,
  AiOutlineMessage,
  AiFillMessage,
  AiFillHeart,
  AiOutlinePlusCircle,
  AiFillPlusCircle,
  AiOutlineHeart
} from "react-icons/ai";
import {RiVideoFill,RiVideoLine} from 'react-icons/ri'
import { CgProfile } from "react-icons/cg";

export const menu = [
  {
    title: "Home",
    icon: <AiOutlineHome className="text-3xl mr5 "></AiOutlineHome>,
    activeIcon: <AiFillHome className="text-3xl mr5 "></AiFillHome>,
  },
  {
    title: "Search",
    icon: <AiOutlineSearch className="text-3xl mr5  "></AiOutlineSearch>,
    activeIcon: <AiOutlineSearch className="text-3xl mr5 "></AiOutlineSearch>,
  },
  {
    title: "Explorer",
    icon: <AiOutlineCompass className="text-3xl mr5 "></AiOutlineCompass>,
    activeIcon: <AiFillCompass className="text-3xl mr5 "></AiFillCompass>,
  },
  {
    title: "Reels",
    icon: <RiVideoLine className="text-3xl mr5 "></RiVideoLine>,
    activeIcon: <RiVideoFill className="text-3xl mr5 "></RiVideoFill>,
  },
  {
    title: "Message",
    icon: <AiOutlineMessage className="text-3xl mr5 "></AiOutlineMessage>,
    activeIcon: <AiFillMessage className="text-3xl mr5 "></AiFillMessage>,
  },
  {
    title: "Notification",
    icon: <AiOutlineHeart  className="text-3xl mr5 "></AiOutlineHeart >,
    activeIcon: <AiFillHeart className="text-3xl mr5 "></AiFillHeart>,
  },
  {
    title: "Create",
    icon: <AiOutlinePlusCircle className="text-3xl mr5 "></AiOutlinePlusCircle>,
    activeIcon: <AiFillPlusCircle className="text-3xl mr5 "></AiFillPlusCircle>,
  },
  {
    title: "Profile",
    icon: <CgProfile className="text-3xl mr5 "></CgProfile>,
    activeIcon: <CgProfile className="text-3xl mr5 "></CgProfile>,
  }
];
