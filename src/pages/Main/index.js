import React from "react";
import "./styles.css";
import SideBar from "../SideBar/index.js"

export default function Main() {
  return (
    <div className="main">
      <SideBar />
      <div className="content">
        <div></div>
        <h1>SALAS OBSERVADAS</h1>
        <div className="salas">
          <div className="sala"></div>
          <div className="sala"></div>
          <div className="sala"></div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
