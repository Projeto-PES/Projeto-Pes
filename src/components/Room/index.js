import React from "react";
import "./styles.css";
import { WiThermometer } from "react-icons/wi";


export default function Room() {
    return (
        <div className="sala">
            <h2>Sala 1</h2>
            <WiThermometer size={60} color="#909090" />
            <h3>20º</h3>
        </div>
    );
}