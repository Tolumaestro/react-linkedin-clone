import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="flex p-[10px] cursor-pointer hover:bg-gray-100">
      <div className="mr-[5px] text-[#0177b7]">
        <FiberManualRecordIcon style={{ fontSize: "15px" }} />
      </div>
      <div className="flex-1">
        <h1 className="text-[14px]">{heading}</h1>
        <p className="text-[14px] text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div
      className="sticky top-20 flex-[0.3] bg-white rounded-[10px] border-[1px] border-gray-400 pb-[10px]"
      style={{ height: "fit-content" }}
    >
      <div className="flex items-center justify-between p-[10px]">
        <h1 className="text-[16px]">LinkedIn News</h1>
        <InfoIcon />
      </div>

      {newsArticle(
        "Maestro Dev is just getting started",
        "Top News - 9923 readers"
      )}
      {newsArticle("ASUU Strike Latest", "Nigeria - 923 readers")}
      {newsArticle("Bitcoin reaches all time high", "Crypto - 4724 readers")}
      {newsArticle("Redux is not dead", "Programming - 9923 readers")}
    </div>
  );
};

export default Widgets;
