import React, { useState, useEffect } from "react";
import '../styles/style.css';
import api from "../services/api.js";

export default function Lista() {
    // Declarando a váriavel personagens e a forma como ela vai ser alterada
    const [personagens, setPersonagens] = useState([]);

    useEffect(() => {
        // Função para buscar os personagens
        async function buscarPersonagens() {
            //Tratamento de erro e fazendo a requisição
            try {
                const response = await api.get('characters/?limit=10'); // Fazendo a requisição da API declarada em api.js e services
                setPersonagens(response.data); // Declarando que os dados retornados da API serão armazenados em personagens
            } catch (error) {
                console.error('Erro ao buscar personagens:', error);
            }
        }

        buscarPersonagens();
    }, []);

    return (
        // Retornando a div com os personagens
        // Fazendo para que para cada personagem que for retornada da API, seja criada uma div com as informações do personagem
        <div className="container">
            {personagens.map((personagem) => (
                <div key={personagem.id} className="personagem">
                    <img src={personagem.image} alt={personagem.name} />
                    <div className="info">
                        <h4>Name: {personagem.name}</h4>
                        <h4>Gender: {personagem.gender}</h4>
                        <h4>Occupation: {personagem.occupation}</h4>
                    </div>
                </div>
            ))}
        </div>
    );
}
