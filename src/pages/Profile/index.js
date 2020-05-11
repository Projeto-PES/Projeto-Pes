import React from "react";
import "./styles.css";
import SideBar from "../SideBar/index.js";
import { GoPerson } from "react-icons/go";

export default function Profile() {
    return (
        <div className="main">
            <SideBar />
            <div className="content">
                <div></div>
                <h1>Perfil</h1>
                <GoPerson size={100} color="#909090" />
                <form className="formulario">
                    <input type="text" placeholder="Nome preenchido" />
                    <input type="text" placeholder="Email preenchido" />
                    <button>Alterar Informações</button>
                </form>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
