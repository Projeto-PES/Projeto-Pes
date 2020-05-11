import React from "react";
import "./styles.css";
import SideBar from "../SideBar/index.js"

export default function NewRoom() {
    return (
        <div className="main">
            <SideBar />
            <div className="content">
                <div></div>
                <h1>CADASTRAR UMA NOVA SALA</h1>
                <form className="formulario">
                    <input type="text" placeholder="Nome da sala" />
                    <input type="text" placeholder="Id do aparelho" />
                    <button onClick="">Cadastrar</button>
                </form>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
