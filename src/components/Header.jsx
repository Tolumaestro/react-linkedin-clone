import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import { Avatar } from "@mui/material";

const Header = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  };
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
        {user && (
          <div onClick={logoutApp}>
            <HeaderOption
              avatar={
                <Avatar
                  style={{ width: "18px", height: "18px", fontSize: "10px" }}
                >
                  {user.displayName[0]}
                </Avatar>
              }
              title="Me"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
