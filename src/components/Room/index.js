import React from "react";
import "./styles.css";
import { WiThermometer } from "react-icons/wi";
import Popup from "reactjs-popup";
import { RiPencilLine } from "react-icons/ri";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

export default function Room() {
    return (
        <Popup
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
                <h2 className="numero">LAB01 - a1s5b1w53</h2>
                <div></div>
                <div className="temperatura">
                    <div className="boxSeta"><BsChevronLeft size={35} color="#87ceeb" /></div>
                    <div className="boxTemperatura"><p>20º</p></div>
                    <div className="boxSeta"><BsChevronRight size={35} color="#87ceeb" /></div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div className="buttons">
                    <button>Alterar <RiPencilLine size={15} /></button>
                    <button>Excluir <FaTrash size={15} /></button>
                </div>
            </div>
        </Popup>
    );
}