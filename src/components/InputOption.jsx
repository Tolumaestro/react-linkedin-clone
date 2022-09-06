import React from "react";

const InputOption = ({ title, Icon, color }) => {
  return (
    <div className="flex items-center mt-[15px] p-[10px] cursor-pointer text-gray-400 hover:bg-gray-100 hover:rounded-[10px] ">
      <Icon style={{ color: color }} />
      <h1>{title}</h1>
    </div>
  );
};

export default InputOption;
