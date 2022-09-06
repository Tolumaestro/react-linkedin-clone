import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  return (
    <div className="flex justify-evenly border-b-[0.1px] border-gray-200 py-[10px] sticky top-0 w-full z-[999] bg-white">
      <div className="flex">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="LinkedIn Logo"
          className="object-contain h-10 mr-[10px]"
        />
        <div className=" p-2.5 flex items-center rounded h-10 text-gray-400 bg-[#eef3f8]">
          {/* Search Icon */}
          <SearchIcon />
          <input
            type="text"
            placeholder="Search"
            className=" outline-none border-none bg-inherit"
          />
        </div>
      </div>

      <div className="flex">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Messaging" Icon={ChatIcon} />
        <HeaderOption title="Notifications" Icon={NotificationsIcon} />
        <HeaderOption
          avatar="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
          title="Me"
        />
      </div>
    </div>
  );
};

export default Header;
