import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings,  Search } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">TransMonitor</span>
        </div>
      <div className="topRight">
          <div className="topSearch">
            <Search className="searchIcon" />
            <input type="text" placeholder="Search..."/>
          </div>
          <div className="topInfo">
            <div className="support">
            <span>Support</span>
           </div>
           <div className="question">
            <span>FAQ</span>
           </div>
           <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
           </div>
           <div className="contact">
              <div className="name">
                <span className="hello">Hello</span>
                <span>Oluwaleke Ojo</span>
              </div>
              <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
           </div>
           
        </div>
          
       </div>
      </div>
    </div>
  );
}
