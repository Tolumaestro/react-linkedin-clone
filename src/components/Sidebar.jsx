import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const stat = "mt-[10px] flex justify-between";
const statP = "text-gray-400 text-[14px] font-semibold";
const statNum = "font-bold text-[#0a66c2]";

const recentItem = (topic) => (
  <div className="flex text-[13px] text-gray-400 cursor-pointer font-extrabold mb-[5px] p-[5px] hover:bg-gray-100 hover:rounded-[10px] hover:text-black">
    <span className="mr-[10px] ml-[5px]">#</span>
    <p>{topic}</p>
  </div>
);

const Sidebar = () => {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <div
      className="sticky top-20 flex-[0.2] rounded-[10px] text-center"
      style={{ height: "fit-content" }}
    >
      <div className="flex flex-col items-center border-gray-200 border-[1px] border-b-0 rounded-tr-[10px] rounded-tl-[10px] bg-white pb-[10px]">
        <img
          src="https://thumbs.dreamstime.com/b/quiet-calm-surface-water-sea-horizon-clear-sky-quiet-calm-surface-water-sea-horizon-clear-sky-129170537.jpg"
          alt=""
          className="mb-[-20px] mt-[-1px] w-full h-[60px] rounded-tl-[10px] rounded-tr-[10px] object-cover"
        />
        <Avatar className="mb-[10px]">{user?.displayName[0]}</Avatar>
        <h1 className=" text-lg font-bold">{user.displayName}</h1>
        <h1 className=" text-gray-400 text-xs">{user.email}</h1>
      </div>

      <div className=" p-[10px] mb-[10px] bg-white border-gray-200 border-[1px] rounded-bl-[10px] rounded-br-[10px]">
        <div className={stat}>
          <p className={statP}>Who viewed you</p>
          <p className={`${statP} ${statNum}`}>2,543</p>
        </div>
        <div className={stat}>
          <p className={statP}>Views on post</p>
          <p className={`${statP} ${statNum}`}>2,446</p>
        </div>
      </div>

      <div className=" text-left p-[10px] border-gray-200 border-[1px] rounded-[10px] mt-[10px] bg-white">
        <p className=" text-[13px] pb-[10px]">Recent</p>
        {recentItem("reactJS")}
        {recentItem("programming")}
        {recentItem("softwareEngineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
};

export default Sidebar;
