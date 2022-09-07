import React from "react";

const HeaderOption = ({ Icon, title, avatar }) => {
  return (
    <div className="flex flex-col items-center mr-5 text-gray-400 cursor-pointer hover:text-black">
      {Icon && <Icon />}
      {avatar && avatar}
      <h1 className=" text-xs font-normal">{title}</h1>
    </div>
  );
};

export default HeaderOption;
