import React from "react";
import "./styles.css";
import Logo from "../../assets/Logo.png";

export default function Logon() {
  return (
    <div className="container">
      <section className="secaoLogo">
        <img className="Logo" src={Logo}></img>
      </section>
      <form className="fomulario">
        <input type="text" placeholder="Email ou id" />
        <input type="password" placeholder="Senha" />
        <div className="linksForm">
          <a className="naoTenhoCadastro" href="#">
            Não tenho cadastro
          </a>
          <a className="esqueciMinhaSenha" href="#">
            Esqueci minha senha
          </a>
        </div>
        <button onClick="/main">Entrar</button>
      </form>
    </div>
  );
}
