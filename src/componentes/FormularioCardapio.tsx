import React, { useEffect, useState } from "react";
import "../estilos/FormularioCardapio.css"; // Importando o CSS específico para o componente
import { Navigate, useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

interface FormularioProps {
  id: number;
  nome: string;
  cozinha: string;
  descricaoResumida: string;
  descricaoDetalhada: string;
  imagem: string;
  valor: number;
}

const FormularioCardapio: React.FC = () => {
  const [prato, setPrato] = useState<FormularioProps>({
    id: 0,
    nome: "",
    cozinha: "",
    descricaoResumida: "",
    descricaoDetalhada: "",
    imagem: "",
    valor: 0,
  });

  const {id} = useParams()
  const navigate = useNavigate();

  useEffect(() => {
    async function requestData() {
      if (id) {
        const response = await api.post(`/pratos/${id}`);
        setPrato(response.data);
      }
    }

    requestData();
  }, [id]);

  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPrato((prevPrato) => ({
      ...prevPrato,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    try {
      // Envia os dados do prato para a API
      await api.post("/pratos", prato);
      alert("Prato cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      alert("Erro ao cadastrar o prato. Tente novamente.");
    }
  };

  return (
    <>
      <div className="form-container">
        <h1>Cadastro de Pratos</h1>
        <p>Bem-vindo ao sistema de cadastro de pratos!</p>
        <input type="text" 
        name="nome" 
        placeholder="Digite o nome do prato"
        value={prato.nome}
        onChange={handleChange()}
         />
        <input
          type="text"
          name="cozinha"
          placeholder="Digite o tipo de cozinha do prato"
          value={prato.cozinha}
          onChange={handleChange()}
        />
        <input
          type="text"
          name="descricaoResumida"
          placeholder="Digite a descrição resumida do prato"
          value={prato.descricaoResumida}
          onChange={handleChange()}
        />
        <input
          type="text"
          name="descricaoDetalhada"
          placeholder="Digite a descrição detalhada do prato"
          value={prato.descricaoDetalhada}
          onChange={handleChange()}
        />
        <input
          type="text"
          name="imagem"
          placeholder="Digite a url da imagem do prato"
          value={prato.imagem}
          onChange={handleChange()}
        />
        <input 
        type="text" 
        name="valor" 
        placeholder="Digite o valor do prato" 
        value={prato.valor}
        onChange={handleChange()}
        />
        <button 
        type="submit"
        onClick={handleSubmit}
        >Cadastrar Prato</button>
      </div>
    </>
  );
};

export default FormularioCardapio;