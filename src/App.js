import React from "react";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";

function App() {
  return (
    <div className="bg-[#f3f2ef] flex flex-col items-center">
      {/* Header */}
      <Header />

      {/* App Body */}
      <div className="flex w-full">
        <Sidebar />
        <Feed />
        {/* <Widgets /> */}
      </div>
    </div>
  );
}

export default App;
