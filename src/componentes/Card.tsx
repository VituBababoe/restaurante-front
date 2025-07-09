import React from "react";
import "../estilos/Card.css";
import { Link, useParams } from "react-router-dom";
import api from "../services/api";

interface CardProps {
    id: number;
    nome: string;
    cozinha: string;
    descricao_resumida: string;
    imagem?: string;
    valor: number;
}
const DeletarPrato = async (id: number) => {
    try {
        await api.delete(`/pratos/${id}`);
        alert("Prato deletado com sucesso!");
        window.location.reload(); 
    } catch (error) {
        alert("Erro ao deletar o prato. Tente novamente.");
    }
}

const Card: React.FC<CardProps> = ({
    id,
    nome,
    cozinha,
    descricao_resumida,
    imagem,
    valor

}) => {


    return (
        <>
            <div className="prato-card">
                <div className="menu-container">
                    <button className="menu-button" onClick={() => { }}>
                        &#x22EE;
                    </button>
                    <div className="dropdown-menu">
                        <a href={`/editar-prato/${id}`} className="dropdown-item">
                            Editar
                        </a>
                        <a href="#" className="dropdown-item" onClick={() => DeletarPrato(id)}>
                            Deletar
                        </a>
                        <a href={`/detalhes/${id}`} className="dropdown-item">
                            Ver Detalhes
                        </a>
                    </div>
                </div>
                <img
                    src={imagem}
                    alt="Feijoada brasileira"
                />
                <h2 className="nome-prato">{nome}</h2>
                <p className="cozinha-prato">{cozinha}</p>
                <p className="descricao-curta-prato">{descricao_resumida}</p>
                <p className="valor-prato">R${valor}</p>
                
            </div>
        </>
    );
}

export default Card;