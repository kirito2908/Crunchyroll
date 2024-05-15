import React from "react";
import Header from "./Header.css";
import { BottomHeader } from "./Botton_Header/BottomHeader";

function TopHeader() {
  return (
    <div className="navbar" style = {Header}>
      <div className="top_header">
        <div className="upper_left_part">
          <i className="ri-menu-line"></i>
          <span>Menu</span>
        </div>
        <div className="logo"> 
          <img src="https://logodownload.org/wp-content/uploads/2020/02/crunchyroll-logo-0.png" alt="logo" />
        </div>
        <div className="upper_right_part">
        <i className="ri-bookmark-line"></i>
        <i className="ri-search-line"></i>
        <i className="ri-account-circle-fill"></i>
        </div>
      </div>
      <BottomHeader/>
    </div>
  );
}

export default TopHeader;