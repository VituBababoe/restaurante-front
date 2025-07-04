import React, { useEffect, useState } from "react";
import "../estilos/DetalhesPratos.css";
import api from "../services/api"; // Importando a API, se necessário
import { stringify } from "querystring";
import { Link, useParams } from "react-router-dom";

const DetalhesPrato: React.FC = () => {

  const [ prato, setPratos ] = useState({
    id: 0,
    nome: "",
    cozinha: "",
    descricao_resumida: "",
    descricao_detalhada: "",
    imagem: "",
    valor: 0,
  })

  const { id } = useParams() 

  useEffect(
    () => {
      async function requestData() {
        const request = await api.get(`/pratos/${id}`)
        const data = request.data
        setPratos(data)
      }

      if(id){
        requestData()
      }
    }, [id]
  )


  return (
    <div className="detalhes-prato">
      <div className="detalhes-prato-card">
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <img
            src={prato.imagem}
            alt="Feijoada"
          />
          <div style={{ marginLeft: "4rem" }}>
            <h1>{prato.nome}</h1>
            <p>
              <strong>Cozinha:</strong> {prato.cozinha}
            </p>
            <p>
              <strong>Valor:</strong> R${prato.valor}
            </p>
          </div>
        </div>
        <p>
          <strong>Descrição da sua experiência Gastronômica:</strong> {prato.descricao_detalhada}
        </p> 
        <Link to={"/"}>
        <button>Voltar</button>
        </Link>
      </div>
    </div>
  );
};

export default DetalhesPrato;