import React, { useState, useEffect } from 'react';
import Sidebar from '../../sidebar/sidebar';
import Header from '../../header/header';
import './Produtos.css';
//import logo from './sidebar'

function Produtos() {
  useEffect(() => {
    document.title = "Produtos";
}, []);

  return (
      <div className='produtos'>teste
      </div>

  );
}

export default Produtos;