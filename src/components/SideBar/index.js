import React from "react";
import "./styles.css";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

export default function SideBar() {
    return (
        <div className="Container">
            <section className="secaoLogo">
                <img className="Logo" src={Logo}></img>
            </section>
            <ul className="menuList">
                <Link className="link" to="/profile"><li>Perfil</li></Link>
                <Link className="link" to="/main"><li>Salas Observadas</li></Link>
                <Link className="link" to="/newRoom"><li>Cadastro de Sala</li></Link>
                <Link className="link" to="/"><li>Sair</li></Link>
            </ul>
        </div >
    )
}