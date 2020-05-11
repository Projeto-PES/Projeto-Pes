import React from "react";
import "./styles.css";
import SideBar from "../../components/SideBar/index.js";
import Room from "../../components/Room/index";

export default function Main() {
  return (
    <div className="main">
      <SideBar />
      <div className="content">
        <div></div>
        <h1>SALAS OBSERVADAS</h1>
        <div className="salas">
          <Room />
          <Room />
          <Room />
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
