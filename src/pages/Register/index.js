import React from "react";
import "./styles.css";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

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
        <Link to="/"><button onClick="">Cadastrar</button></Link>
      </form>
    </div>
  );
}
