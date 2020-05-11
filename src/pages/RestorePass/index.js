import React from "react";
import "./styles.css";
import Logo from "../../assets/Logo.png";

export default function RestorePass() {
    return (
        <div className="container">
            <section className="secaoLogo">
                <img className="Logo" src={Logo}></img>
            </section>
            <form className="formulario">
                <input type="text" placeholder="Email utilizado para criar a conta" />
                <button onClick="">Enviar restauração de senha</button>
            </form>
        </div>
    );
}