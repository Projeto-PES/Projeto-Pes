import React from "react";
import "./styles.css";

export default function Logon() {
  return (
    <div className="container">
      <img className="Logo"></img>
      <form className="fomulario">
        <input type="text" placeholder="Email ou id" />
        <input type="password" placeholder="Senha" />
        <a>Nao tenho cadastro</a>
        <a>Esqueci minha senha</a>
        <button onClick="/main">Entrar</button>
      </form>
    </div>
  );
}
