import React, { useState } from "react";
import "./styles.css";
import api from "../../services/api";
import Logo from "../../assets/Logo.png";
import { Link, useHistory } from "react-router-dom";

export default function Logon() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  async function handlerLogin(e) {
    e.preventDefault();

    try {
      const res = await api.post("login", { email, password });
      console.log(res);
      localStorage.setItem("email", res.data.email);
      history.push("/main");
    } catch (err) {
      alert("Erro ao efetuar o Login");
    }
  }

  return (
    <div className="container">
      <section className="secaoLogo">
        <img className="Logo" src={Logo}></img>
      </section>
      <form className="fomulario" onSubmit={handlerLogin}>
        <input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="linksForm">
          <Link className="naoTenhoCadastro" to="/Register">
            Não tenho cadastro
          </Link>
          <Link className="esqueciMinhaSenha" to="/RestorePass">
            Esqueci minha senha
          </Link>
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
