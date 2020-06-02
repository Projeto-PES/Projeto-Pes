import React, { useEffect, useState } from "react";
import "./styles.css";
import SideBar from "../../components/SideBar/index.js";
import Room from "../../components/Room/index";
import api from "../../services/api";

export default function Main() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    api.get("getRoom").then((res) => {
      setRooms(res.data);
    });
  }, []);

  return (
    <div className="main">
      <SideBar />
      <div className="content">
        <div></div>
        <h1>SALAS OBSERVADAS</h1>
        <ul>
          {rooms.map((room) => (
            <div className="salas">
              <Room />
            </div>
          ))}
        </ul>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
