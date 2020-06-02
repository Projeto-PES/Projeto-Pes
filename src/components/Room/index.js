import React, { useEffect, useState } from "react";
import "./styles.css";
import Popup from "reactjs-popup";
import { WiThermometer } from "react-icons/wi";
import { RiPencilLine, RiCommandLine } from "react-icons/ri";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

import api from "../../services/api";

export default function Room() {
  const [room, setRoom] = useState([]);

  useEffect(() => {
    api.get("getRoom").then((res) => {
      setRoom(res.data);
    });
  }, []);

  return (
    <Popup
      className="popup"
      trigger={
        <div className="sala">
          <h2>Sala 1</h2>
          <WiThermometer size={60} color="#909090" />
          <h3>20º</h3>
        </div>
      }
      modal
      closeOnDocumentClick
      contentStyle={{ borderRadius: "10px", width: "35%" }}
    >
      <div className="modal">
        <div className="title">
          <h1>Sala 1</h1>
        </div>
        <h2 className="numero"></h2>
        <div className="tempIdeal">
          <h3>
            Temperatura Ideal: <span>20º</span>
          </h3>
        </div>
        <div className="temperatura">
          <div className="boxSeta">
            <BsChevronLeft size={35} color="#87ceeb" />
          </div>
          <div className="boxTemperatura">
            <p>20º</p>
          </div>
          <div className="boxSeta">
            <BsChevronRight size={35} color="#87ceeb" />
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div className="buttons">
          <button>
            Alterar <RiPencilLine size={15} />
          </button>
          <button>
            Excluir <FaTrash size={15} />
          </button>
        </div>
      </div>
    </Popup>
  );
}
