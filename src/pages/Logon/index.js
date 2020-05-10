import React from "react";
import "./styles.css";

export default function Logon() {
  return (
    <div className="container">
      <img className="Logo"></img>
      <form className="fomulario">
        <input type="text" placeholder="Email ou id" />
        <input type="text" placeholder="Senha" />
        <a>Nao tenho cadastro</a>
        <a>Esqueci minha senha</a>
        <button onClick="">Entrar</button>
      </form>
    </div>
  );
}
