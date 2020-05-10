import React from "react";
import "./styles.css";

export default function Register() {
  return (
    <div className="container">
      <section className="secaoLogo">
        <img className="Logo" src={Logo}></img>
      </section>
      <form className="formulario">
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirme sua senha" />
        <button onClick="">Cadastrar</button>
      </form>
    </div>
  );
}
