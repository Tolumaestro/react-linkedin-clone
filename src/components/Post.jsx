import { Avatar } from "@mui/material";
import React from "react";
import InputOption from "./InputOption";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="bg-white p-[15px] mb-[10px] rounded-[10px]">
      <div className="flex mb-[10px]">
        <Avatar />
        <div className="ml-[10px]">
          <h1 className="font-bold">{name}</h1>
          <p className="text-[10px]">{description}</p>
        </div>
      </div>

      <div className="break-words">
        <p>{message}</p>
      </div>

      <div className="flex justify-evenly">
        <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
        <InputOption
          Icon={ChatBubbleOutlineIcon}
          title="Comment"
          color="gray"
        />
        <InputOption Icon={ShareIcon} title="Share" color="gray" />
        <InputOption Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Post;
