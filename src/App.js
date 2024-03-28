import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './sidebar/sidebar'
import Produtos from './Cadastrar/Produtos/Produtos';
//import Fornecedores from './Cadastrar/Fornecedores/Fornecedores';
//import Clientes from './Cadastrar/Clientes/clientes';
import Header from './header/header'
//import logo from './sidebar'

function App() {
  const [pageTitle, setPageTitle] = useState("Início");

  return (
  <Router>
    <Header pageTitle={pageTitle} />
    <nav className="Main">
        <Sidebar setPageTitle={setPageTitle} /> 
        <span className='barra_lateral'></span>
        <div className='main-container'>
          <div className='main-container-content'>
            <Routes>
              <Route path="/produtos" element={<Produtos/>} />
              {/*Route path="/fornecedores" element=Fornecedores*/}
              {/*Route path="/clientes" element=Cliente*/}
            </Routes>
        </div>
      </div>
    </nav>
  </Router>
  );
}

export default App;
