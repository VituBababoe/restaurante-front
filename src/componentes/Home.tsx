import React, { useState, useEffect } from "react";
import "../estilos/Home.css";
import terraDasAguas from "../assets/terra_das_aguas.jpg";
import { Link, redirect, useParams } from "react-router-dom";
import api from "../services/api";
import Card from "./Card";

function Home() {

  const [ pratos, setPratos ] = useState([
    {
      id: 0,
      nome: "",
      cozinha: "",
      descricao_resumida: "",
      valor: 0
    }
  ]);

  useEffect(
    () => {
      async function requestData() {
          const response = await api.get("/pratos");
          setPratos(response.data);
      }

      requestData();
    }, []
  );
  
  return (
    <div className="home">
      <div className="banner">
        <img src={terraDasAguas} alt="" />
      </div>
      <h1>Bem vindo ao Restaurante Terra das Aguas SENAC - MS</h1>
        <button className="button-add">
          <a href="/cadastro-prato">Adicionar Prato</a>
        </button>
      
      <div className="lista-pratos">
      {pratos.length && pratos.map((prato, index) => (
        <Card
        key={index}
        id={prato.id}
        nome={prato.nome}
        cozinha={prato.cozinha}
        descricao_resumida={prato.descricao_resumida}/>
      ))}
      </div>
    </div>
  );
}

export default Home;