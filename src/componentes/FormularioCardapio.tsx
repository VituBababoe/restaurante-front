import React from "react";
import "../estilos/FormularioCardapio.css"; // Importando o CSS específico para o componente

const FormularioCardapio: React.FC = () => {
  return (
    <>
      <div className="form-container">
        <h1>Cadastro de Pratos</h1>
        <p>Bem-vindo ao sistema de cadastro de pratos!</p>
        <input type="text" name="nome" placeholder="Digite o nome do prato" />
        <input
          type="text"
          name="cozinha"
          placeholder="Digite o tipo de cozinha do prato"
        />
        <input
          type="text"
          name="descricao-resumida"
          placeholder="Digite a descrição resumida do prato"
        />
        <input
          type="text"
          name="descricao-detalhada"
          placeholder="Digite a descrição detalhada do prato"
        />
        <input
          type="text"
          name="imagem"
          placeholder="Digite a url da imagem do prato"
        />
        <input type="text" name="valor" placeholder="Digite o valor do prato" />
        <button type="submit">Cadastrar Prato</button>
      </div>
    </>
  );
};

export default FormularioCardapio;