import React, { useEffect, useState } from "react";
import "./styles.css";
import SideBar from "../../components/SideBar/index.js";
import {} from "reactjs-popup";
import api from "../../services/api";
import Popup from "reactjs-popup";
import { WiThermometer } from "react-icons/wi";
import { RiPencilLine } from "react-icons/ri";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

export default function Main() {
  const [rooms, setRooms] = useState([]);
  const [temperature, setTemperature] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    api.get("getRoom").then((res) => {
      setRooms(res.data);
    });
  }, []);

  async function handleDelete(id) {
    try {
      const res = await api.delete(`Room/${id}`);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  async function handleAlter(id, temperature) {
    try {
      const res = await api.update(`Room/${id}`);
    } catch (err) {
      console.log(err);
    }
  }

  function alterPlusTemperature(temperature) {
    const room_temperature = temperature;
    room_temperature++;
    setTemperature(room_temperature);
  }
  return (
    <div className="main">
      <SideBar />
      <div className="content">
        <div></div>
        <h1>SALAS OBSERVADAS</h1>
        <div className="salas">
          {rooms.map((room) => (
            <div>
              <Popup
                className="popup"
                trigger={
                  <div className="sala">
                    <h2>{room.name}</h2>
                    <WiThermometer size={60} color="#909090" />
                    <h3>{room.temperature}º</h3>
                  </div>
                }
                modal
                closeOnDocumentClick
                contentStyle={{ borderRadius: "10px", width: "35%" }}
              >
                <div className="modal">
                  <div className="title">
                    <h1>{room.name}</h1>
                  </div>
                  <h2 className="numero">{room.equipment}</h2>
                  <div className="tempIdeal">
                    <h3>
                      Temperatura Ideal: <span>{room.ideal_temperature}º</span>
                    </h3>
                  </div>
                  <div className="temperatura">
                    <div className="boxSeta">
                      <BsChevronLeft size={35} color="#87ceeb" />
                    </div>
                    <div className="boxTemperatura">
                      <p>{room.temperature}º</p>
                    </div>
                    <div className="boxSeta">
                      <BsChevronRight
                        size={35}
                        color="#87ceeb"
                        onClick={() => handleAlter(room.id)}
                      />
                    </div>
                  </div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div className="buttons">
                    <button>
                      Alterar <RiPencilLine size={15} />
                    </button>
                    <button onClick={() => handleDelete(room.id)}>
                      Excluir <FaTrash size={15} />
                    </button>
                  </div>
                </div>
              </Popup>
            </div>
          ))}
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
