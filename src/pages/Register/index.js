import React, { useState } from "react";
import api from "../../services/api";
import "./styles.css";
import Logo from "../../assets/Logo.png";
import { useHistory } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  async function handlerSubmit(e) {
    e.preventDefault();

    try {
      const data = { name, email, password };
      const response = await api.post("registerUser", data);
      history.push("/");
    } catch (err) {
      alert("Erro no Cadastro");
    }
  }

  return (
    <div className="container">
      <section className="secaoLogo">
        <img className="Logo" src={Logo}></img>
      </section>
      <form className="formulario" onSubmit={handlerSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
