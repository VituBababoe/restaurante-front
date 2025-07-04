import React from "react";
import "../estilos/Card.css";
import { Link, useParams } from "react-router-dom";

interface CardProps{
    id: number;
    nome: string;
    cozinha: string;
    descricao_resumida: string;
    imagem?: string;
}

const Card: React.FC<CardProps> = ({
    id,
    nome,
    cozinha,
    descricao_resumida,
    imagem
}) => {
    
    return (
        <>
            <div className="lista-pratos">
                <div className="prato-card">
                    <img src={imagem} alt="Feijoada brasileira" />
                    <h2 className="nome-prato">{nome}</h2>
                    <p className="cozinha-prato">{cozinha}</p>
                    <p className="descricao-curta-prato">{descricao_resumida}</p>
                    <Link to={`/detalhes/${id}`} className="btn"><button>Ver Detalhes</button></Link>
                </div>
            </div>
        </>
    );
}

export default Card;