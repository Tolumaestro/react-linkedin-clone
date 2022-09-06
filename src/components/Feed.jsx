import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { db } from "../firebase";
import firebase from "firebase/compat/app";

const Feed = () => {
  const [input, setInput] = useState("");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "Tolulope Soetan",
      description: "this is a test",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className=" flex-[0.6] mx-5">
      <div className="bg-white p-[10px] pb-5 rounded-[10px] mb-5">
        <div className=" border-gray-200 border-[1px] rounded-[30px] flex p-[10px] text-gray-400 pl-[15px]">
          <CreateIcon />
          <form className=" flex w-full">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              className=" border-none flex-[1] ml-[10px] outline-none font-semibold"
            />
            <button type="submit" className="hidden" onClick={sendPost}>
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
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
      {/* <Post
        name="Tolulope Soetan"
        description="This is a test"
        message="Wow this worked"
      /> */}
    </div>
  );
};

export default Feed;
