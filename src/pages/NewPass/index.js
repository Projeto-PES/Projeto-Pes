import React from "react";
import "./styles.css";
import Logo from "../../assets/Logo.png";

export default function NewPass() {
    return (
        <div className="container">
            <section className="secaoLogo">
                <img className="Logo" src={Logo}></img>
            </section>
            <form className="formulario">
                <input type="password" placeholder="Digite sua nova senha" />
                <input type="password" placeholder="Confirme sua nova senha" />
                <button onClick="">Alterar Senha</button>
            </form>
        </div>
    );
}
