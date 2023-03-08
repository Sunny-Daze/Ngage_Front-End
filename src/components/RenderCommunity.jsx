import React from "react";
import SideBar from "./SideBar";
import Community from "../pages/Community";
import "./RenderCommunity.css";
import { authCheck } from "../services/auth.service";

function RenderCommunity() {

  return (
    <div className="RenderCommunity">
      <div className="navbar">
        <SideBar />
      </div>
      <div className="CommunityBody">
        <Community />
      </div>
    </div>
  );
}

export default RenderCommunity;
