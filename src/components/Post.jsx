import { Avatar } from "@mui/material";
import React, { forwardRef, useState } from "react";
import InputOption from "./InputOption";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

const Post = forwardRef(({ name, description, message }, ref) => {
  const [like, setLike] = useState(false);

  return (
    <div ref={ref} className="bg-white p-[15px] mb-[10px] rounded-[10px]">
      <div className="flex mb-[10px]">
        <Avatar>{name[0]}</Avatar>
        <div className="ml-[10px]">
          <h1 className="font-bold">{name}</h1>
          <p className="text-[10px]">{description}</p>
        </div>
      </div>

      <div className="break-words">
        <p>{message}</p>
      </div>

      <div className="flex justify-evenly">
        <div onClick={() => setLike(!like)}>
          <InputOption
            Icon={like ? ThumbUpIcon : ThumbUpOffAltIcon}
            title="Like"
            color="gray"
          />
        </div>
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
});

export default Post;
