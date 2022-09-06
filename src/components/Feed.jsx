import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";

const Feed = () => {
  return (
    <div className=" flex-[0.6] mx-5">
      <div className="bg-white p-[10px] pb-5 rounded-[10px] mb-5">
        <div className=" border-gray-200 border-[1px] rounded-[30px] flex p-[10px] text-gray-400 pl-[15px]">
          <CreateIcon />
          <form className=" flex w-full">
            <input
              type="text"
              className=" border-none flex-[1] ml-[10px] outline-none font-semibold"
            />
            <button type="submit" className="hidden">
              Send
            </button>
          </form>
        </div>

        <div className="flex justify-evenly">
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7fc15e"
          />
        </div>
      </div>

      {/* Posts */}
    </div>
  );
};

export default Feed;
