import React from "react";
import "./styles.css";
import Logo from "../../assets/Logo.png";

export default function SideBar() {
    return (
        <div className="Container">
            <section className="secaoLogo">
                <img className="Logo" src={Logo}></img>
            </section>
            <ul className="menuList">
                <a><li>Perfil</li></a>
                <a><li>Salas Observadas</li></a>
                <a><li>Cadastro de Sala</li></a>
                <a><li>Sair</li></a>
            </ul>
        </div >
    )
}