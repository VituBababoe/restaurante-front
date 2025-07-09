import React, { useEffect, useState } from "react";
import "../estilos/FormularioCardapio.css"; // Importando o CSS específico para o componente
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

interface FormularioProps {
  id: number;
  nome: string;
  cozinha: string;
  descricao_resumida: string;
  descricao_detalhada: string;
  imagem: string;
  valor: number;
}

const FormularioEditar: React.FC = () => {
  const [prato, setPrato] = useState<FormularioProps>({
    id: 0,
    nome: "",
    cozinha: "",
    descricao_resumida: "",
    descricao_detalhada: "",
    imagem: "",
    valor: 0,
  });

  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(
    () => {
      async function requestData() {
        const request = await api.get(`/pratos/${id}`)
        const data = request.data
        setPrato(data)
      }

      if(id){
        requestData()
      }
    }, [id]
  )


  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name)
    console.log(value)
    setPrato((prevPrato) => ({
      ...prevPrato,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await api.put(`/pratos/${id}`, prato);
      navigate(`/`);
      alert("Prato editado com sucesso!");
    } catch (error) {
      alert("Erro ao editar o prato. Por favor, tente novamente.");
    }
  };

  return (
    <>
      <div className="form-container">
        <h1>Editor de Pratos</h1>
        <p>Bem-vindo ao sistema de edição de pratos!</p>
        <input
          type="text"
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
          name="descricao_resumida"
          placeholder="Digite a descrição resumida do prato"
          value={prato.descricao_resumida}
          onChange={handleChange()}
        />
        <input
          type="text"
          name="descricao_detalhada"
          placeholder="Digite a descrição detalhada do prato"
          value={prato.descricao_detalhada}
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
        type="button"
        onClick={() => handleSubmit(new Event('submit') as unknown as React.FormEvent<HTMLFormElement>)}
        >Editar Prato</button>
      </div>
    </>
  );
};

export default FormularioEditar;