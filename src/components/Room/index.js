import React, { useState } from "react";
import "./styles.css";
import { WiThermometer } from "react-icons/wi";
import Modal from "react-modal";

export default function Room() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <button className="sala" onClick={() => setModalIsOpen(true)}>
            <h2>Sala 1</h2>
            <WiThermometer size={60} color="#909090" />
            <h3>20º</h3>
            <Modal
                className="modal"
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                shouldCloseOnEsc={() => setModalIsOpen(false)}
                style={{
                    overlay: {
                        backgroundColor: "blue",
                        height: 700,
                        width: 700,
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    },
                }}
            >
                <div>
                    <h1></h1>
                </div>
            </Modal>
        </button>
    );
}