// Fazendo os import necessarios para o projeto
import React from 'react';
import '../styles/style.css';
import logo from '../assets/bobs-burguer.ico'; // Importando a logo do Bob's Burguer para o Header

// Criando o componente Header para renderização em App.js
export default function Header(){
    return (
    <header className='header'>
        <h1>Bob´s Burguer Characters</h1>
        <img src={logo} alt='Logo Bobs Burguer '></img>
    </header>
    )
}