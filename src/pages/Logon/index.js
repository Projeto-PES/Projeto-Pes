import React from "react";
import "./styles.css";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

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
          <Link className="naoTenhoCadastro" to="/Register">
            Não tenho cadastro
          </Link>
          <Link className="esqueciMinhaSenha" to="/RestorePass">
            Esqueci minha senha
          </Link>
        </div>
        <Link to="/main"><button>Entrar</button></Link>
      </form>
    </div>
  );
}
