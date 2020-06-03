import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";
import SideBar from "../../components/SideBar/index";
import api from "../../services/api";

export default function NewRoom() {
  const [name, setName] = useState();
  const [ideal_temperature, setIdeal_temperature] = useState();
  const [equipment, setEquipment] = useState();
  const [temperature, setTemperature] = useState();
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const data = { ideal_temperature, temperature, name, equipment };
      const res = await api.post("Room", data);
      alert("Cadastrado com Sucesso");
      history.push("/main");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="main">
      <SideBar />
      <div className="content">
        <div></div>
        <h1>CADASTRAR UMA NOVA SALA</h1>
        <form className="formulario" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome da sala"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Equipamento"
            value={equipment}
            onChange={(e) => setEquipment(e.target.value)}
          />
          <input
            type="number"
            placeholder="Temperatura atual"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
          />
          <input
            type="number"
            placeholder="Temperatura Ideal"
            value={ideal_temperature}
            onChange={(e) => setIdeal_temperature(e.target.value)}
          />
          <button type="submit">Cadastrar</button>
        </form>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
