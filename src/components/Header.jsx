import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <div className="">
      <div>This is a header</div>

      <div>
        <img
          src="https://image.similarpng.com/very-thumbnail/2020/07/Linkedin-logo-on-transparent-Background-PNG-.png"
          alt="asxssda"
        />
        <div>
          {/* Search Icon */}
          <SearchIcon />
          <input type="text" placeholder="working" />
        </div>
      </div>
    </div>
  );
};

export default Header;
