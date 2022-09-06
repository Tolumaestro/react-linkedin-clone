import { Avatar } from "@mui/material";
import React from "react";

function Post({ name, description, message, photoUrl }) {
  return (
    <div>
      <div className="header">
        <Avatar />
        <div className="info">
          <h1>Tolulope Soetan</h1>
          <p>Description</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
