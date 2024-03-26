import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import './Produtos.css';
//import logo from './sidebar'

function Produtos() {
  useEffect(() => {
    document.title = "Produtos";
}, []);

  return (

  <body>
    <Header pageTitle="Início > Cadastros > Produtos" />
    <Sidebar/>
    <main className='main-container'>
    </main>
    </body>
  );
}

export default Produtos;