import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar/sidebar'
import Produtos from './Produtos/Produtos';
import Fornecedores from './Fornecedores/Fornecedores';
import Clientes from './Clientes/clientes';
import Header from './header/header'
//import logo from './sidebar'

function App() {
  useEffect(() => {
    document.title = "Início";
}, []);

  return (
  <Router>
    <Routes>
      <Route path="/produtos" element={<Produtos/>} />
      <Route path="/fornecedores" element={Fornecedores} />
      <Route path="/clientes" element={Clientes} /> 
    </Routes>
  <body>
    <Header pageTitle="Início" />
    <Sidebar/>
    <main className='main-container'>
    </main>
    </body>
  </Router>
  );
}

export default App;
