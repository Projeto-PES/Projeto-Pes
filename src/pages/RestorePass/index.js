import React from "react";
import "./styles.css";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

export default function RestorePass() {
    return (
        <div className="container">
            <section className="secaoLogo">
                <img className="Logo" src={Logo}></img>
            </section>
            <form className="formulario">
                <input type="text" placeholder="Email utilizado para criar a conta" />
                <Link to="/newPass"><button onClick="">Enviar restauração de senha</button></Link>
            </form>
        </div>
    );
}